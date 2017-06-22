function total(str){
  var arr = str.split(/([\+x÷-])/);
  while(arr.indexOf("x") !== -1 || arr.indexOf("÷") !== -1){
    if(arr.indexOf("x") === -1 || arr.indexOf("÷") === -1){
      var index = Math.max(arr.indexOf("x"),arr.indexOf("÷"));
    }
    else {
      var index = Math.min(arr.indexOf("x"),arr.indexOf("÷"));
    }
    arr.splice(index+2,0,calculate(arr[index-1],arr[index],arr[index+1]));
    arr.splice(index-1,3);
  }
  while(arr.indexOf("+") !== -1 || arr.indexOf("-") !== -1){
    if(arr.indexOf("+") === -1 || arr.indexOf("-") === -1){
      var index = Math.max(arr.indexOf("+"),arr.indexOf("-"));
    }
    else {
      var index = Math.min(arr.indexOf("+"),arr.indexOf("-"));
    }
    arr.splice(index+2,0,calculate(arr[index-1],arr[index],arr[index+1]));
    arr.splice(index-1,3);
  }
  return arr[0];
}

function calculate(first,operation,second){
  var total = 0;
  var firstNum = Number(first);
  var secondNum = Number(second);
  if(operation === "+"){
    total = firstNum + secondNum;
  }
  else if(operation === "-"){
    total = firstNum - secondNum;
  }
  else if(operation === "x"){
    total = firstNum * secondNum;
  }
  else if(operation === "÷"){
    total = firstNum / secondNum;
  }
  return total;
}
