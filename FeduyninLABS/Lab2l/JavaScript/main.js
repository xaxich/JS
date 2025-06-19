document.addEventListener("DOMContentLoaded", function() {
    let sortForm = document.getElementById('sort');

    setSortSelects(buildings, sortForm);

    let selects = sortForm.getElementsByTagName('select');
    selects[0].addEventListener("change", function(){changeNextSelect(selects[1].id, selects[0])});
})

function clearSort(dataForm) {
    let selects = dataForm.getElementsByTagName('select');

    for (let i = 0; i < selects.length; i++) {
        selects[i].selectedIndex = 0;

        let checkBox = document.getElementById(selects[i].id+'Desc');
        checkBox.checked = false;

        if (i > 0) selects[i].disabled = true;
    }

    clearTable('list');
    createTable(buildings, 'list');
    filterTable(buildings, 'list', document.getElementById('filter'));
}

let createOption = (str, val) => {
    let item = document.createElement('option');
    item.text = str;
    item.value = val;
    return item;
}

let setSortSelect = (arr, sortSelect) => {
    sortSelect.append(createOption('Нет', 0));
    for (let i in arr) {
        sortSelect.append(createOption(arr[i], Number(i) + 1));
    }
}

let setSortSelects = (data, dataForm) => {
    let head = Object.keys(data[0]);
    let allSelect = dataForm.getElementsByTagName('select');

    for(let j = 0; j < allSelect.length; j++) {
        //формируем очередной SELECT
        setSortSelect(head, allSelect[j]);

        if (j>0) allSelect[j].disabled = true;
    }
}

// настраиваем поле для следующего уровня сортировки
let changeNextSelect = (nextSelectId, curSelect) => {

    let nextSelect = document.getElementById(nextSelectId);

    nextSelect.disabled = false;

    // в следующем SELECT выводим те же option, что и в текущем
    nextSelect.innerHTML = curSelect.innerHTML;

    // удаляем в следующем SELECT уже выбранную в текущем опцию
    // если это не первая опция - отсутствие сортировки
    if (curSelect.value != 0) {
        nextSelect.remove(curSelect.value);
    } else {
        nextSelect.disabled = true;
    }
}

let createSortArr = (data) => {
    let sortArr = [];
    let sortSelects = data.getElementsByTagName('select');

    for (let i = 0; i < sortSelects.length; i++) {
        let keySort = sortSelects[i].value;
        if (keySort == 0) {
            break;
        }
        let desc = document.getElementById(sortSelects[i].id + 'Desc').checked;
        sortArr.push(
            {column: keySort - 1,
                order: desc}
        );
    }
    return sortArr;
};

let sortTable = (idTable, data) => {

    let sortArr = createSortArr(data);

    if (sortArr.length === 0) {
        return false;
    }
    let table = document.getElementById(idTable);

    let rowData = Array.from(table.rows);

    let header = rowData.shift();

    rowData.sort((first, second) => {
        for(let i in sortArr) {
            let key = sortArr[i].column;
            if (first.cells[key].innerHTML > second.cells[key].innerHTML) {
                return !sortArr[i].order ? 1 : -1;
            } else if (first.cells[key].innerHTML < second.cells[key].innerHTML){
                return !sortArr[i].order ? -1 : 1;
            }
        }
        return 0;
    });

    clearTable(idTable);
    rowData.unshift(header);
    rowData.forEach(row => table.append(row));
}