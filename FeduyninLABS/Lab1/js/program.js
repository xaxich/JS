const first = ['a = ', 's1 = ', 's2 = ', 'h = '];
const second = ['a = ', 'h = ', '&ang;&alpha; = ', '&ang;&beta; = '];

function calculate(data) {
  if (checkRightInputs(data)) {
    
    let editDiv = document.getElementById('inputData');
    let edits = editDiv.getElementsByTagName("input");

    let values = [];
    for (let i = 0; i < 4; i++) {
      values.push(edits[i].value);
    }
    
      
    let output = applyFormules(data.inputWay.value, values, data.outputVars);
    let outDiv = document.getElementById('output');
    outDiv.innerHTML = '';
    
    if (output.length == 0) {
      let p = document.createElement('p');
      p.innerHTML = "Такой трапеции не существует!";
      outDiv.appendChild(p);
    } else {
      output.forEach( item => {
        let parag = document.createElement('p');
        parag.innerHTML = item;
        outDiv.appendChild(parag);
      })
    }
    
    
  }
}

function formatted(val) {
  return Math.round(val*100)/100;
}

function applyFormules(chosen, values, pars) {
  let output = [];

  if (chosen == '0') {
    let a = +values[0], s1 = +values[1], s2 = +values[2], h = +values[3];
    
    let b = Math.abs(a - Math.sqrt(s1*s1-h*h) - Math.sqrt(s2*s2-h*h));
    let sin_alpha = h/s1, sin_beta = h/s2;
    let cos_alpha = Math.sqrt(1 - sin_alpha*sin_alpha), cos_beta = Math.sqrt(1 - sin_beta*sin_beta);
    let d1 = Math.sqrt(a*a + s1*s1 - 2*a*s1*cos_alpha);
    let d2 = Math.sqrt(a*a + s2*s2 - 2*a*s2*cos_beta);
    
    let m = (a + b) / 2;
    
    let d_angle = 180*Math.asin(2*m*h/(d1*d2)) / Math.PI;
    
    if (isNaN(d_angle)) return output;
    
    if (pars[0].checked) {
      output.push(`Периметр: ${formatted(a+s1+s2+b)}`);
    }
    if (pars[1].checked) {
      output.push(`Неизвестные стороны: ${formatted(b)}`);
    }
    if (pars[2].checked) {
      output.push(`Угол между диагоналями: ${formatted(d_angle)}&deg;`);
    }
    if (pars[3].checked) {
      output.push(`Диагонали: ${formatted(d1)}, ${formatted(d2)}`);
    }
    
  } else {
    let a = +values[0], h = +values[1], alpha = +values[2], beta = +values[3];
    let s1 = h / Math.sin(Math.PI * alpha / 180);
    let s2 = h / Math.sin(Math.PI * beta / 180);
    let b = Math.abs(a - Math.sqrt(s1*s1-h*h) - Math.sqrt(s2*s2-h*h));
    
    let sin_alpha = h/s1, sin_beta = h/s2;
    let cos_alpha = Math.sqrt(1 - sin_alpha*sin_alpha), cos_beta = Math.sqrt(1 - sin_beta*sin_beta);
    let d1 = Math.sqrt(a*a + s1*s1 - 2*a*s1*cos_alpha);
    let d2 = Math.sqrt(a*a + s2*s2 - 2*a*s2*cos_beta);
    
    let m = (a + b) / 2;
    
    let d_angle = Math.abs(180*Math.asin(2*m*h/(d1*d2)) / Math.PI);
    
    if (isNaN(d_angle)) return output;
    
    if (pars[0].checked) {
      output.push(`Периметр: ${formatted(a+s1+s2+b)}`);
    }
    if (pars[1].checked) {
      output.push(`Неизвестные стороны: ${formatted(b)}, ${formatted(s1)}, ${formatted(s2)}`);
    }
    if (pars[2].checked) {
      output.push(`Угол между диагоналями: ${formatted(d_angle)}&deg;`);
    }
    if (pars[3].checked) {
      output.push(`Диагонали: ${formatted(d1)}, ${formatted(d2)}`);
    }
  }
  return output;
}

function checkRightInputs(forma) {
  
  let result = true;
  
  let chosen = forma.inputWay.value;
  let el = document.getElementById('inputWayDiv');
  if (chosen != '0' && chosen != '1') {
    el.classList.add('error');
    result = false;
  } else {
    el.classList.remove('error');
  }
  
  let pars = forma.outputVars;
  
  let flag = false;
  pars.forEach( item => {
    flag = flag || item.checked;
  });
  
  el = document.getElementById('outputWayDiv');
  if (!flag) {
    el.classList.add('error');
    result = false;
  } else {
    el.classList.remove('error');
  }
  
  let editDiv = document.getElementById('inputData');
  let edits = editDiv.getElementsByTagName("input");
  for (let i = 0; i < 4; i++) {
    if (edits[i].value == '') {
      edits[i].classList.add('error');
      result = false;
    }
    else edits[i].classList.remove('error')
  }
  
  return result;
}

function deleteInputPart() {
  let editDiv = document.getElementById('inputData');
  editDiv.innerHTML = '';
}

function resetForm(forma) {
  forma.reset();
  deleteInputPart();
}

function showInputs(forma) {
  let chosen = forma.inputWay.value;
  let el = document.getElementById('inputWayDiv');
  let img = document.getElementById("image");
  
  switch (chosen) {
    case '0':
      buildInputEdits(first);
      el.classList.remove('error');
      img.src = "res/Trap1.png";
      break;
    case '1':
      buildInputEdits(second);
      el.classList.remove('error');
      img.src = "res/Trap2.png";
      break;
    default:
      el.classList.add('error');
    }
}

function buildInputEdits(arr) {
  let editDiv = document.getElementById('inputData');
  deleteInputPart();
  arr.forEach( (item,ind) => {
    let parag = document.createElement('p');
    let label = document.createElement('label');
    let edit = document.createElement('input');
    
    edit.type = 'number';
    edit.id = 'input' + ind;
    
    label.innerHTML = item;
    label.appendChild(edit)
    parag.appendChild(label);
    
    if (item.indexOf("&ang;") != -1){
      edit.min = 1;
      edit.max = 179;
      label.innerHTML += '&deg;';
    } else {
      edit.min = Number(0);
      edit.max = Number(200);
    }
    
    editDiv.appendChild(parag);
  })
}