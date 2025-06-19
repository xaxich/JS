function changeTable(id) {
  let list = document.getElementById(id);
  let tbody = list.children[0];
  let chs = tbody.children;
 
  let newList = [chs[0]];
  for (let i = 1; i < chs.length-1; i+=2) {
    newList.push(chs[i+1]);
    newList.push(chs[i]);
  }
  
  if (chs.length % 2 == 0){
    newList.push(chs[chs.length-1]);
  }
  
  tbody.innerHTML = "";
  newList.forEach(item => {
    tbody.appendChild(item);
  })
}