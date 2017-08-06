function expression(str) {
  var lastChar = $(".total").text()[$(".total").text().length - 1];
  var strNew = (lastChar.match(/[0-9]/) !== null && str === "0." && $(".total").text() !== "0") ? "." : str;
  var lastOp = lastChar.match(/[\+x÷-]/);
  var strOp = strNew.match(/[\+x÷-]/)
  var lastDec = lastChar.match(/\./);
  var strDec = strNew.match(/\./);
  var arr = $(".total").text().split((/([\+x÷-])/));
  var arrDec = arr[arr.length - 1].match(/[0-9]+\.[0-9]+/);

  if($(".total").text() === "0" && strOp === null){
    $(".total").text(strNew);
  }
  else if(!((lastOp !== null && strOp !== null) || (lastDec !== null && strDec !== null) || (arrDec !== null && strDec !== null))){
    $(".total").append(strNew);
  }
}

function total(str){
  var arr = str.split(/([\+x÷-]|[0-9]*.?[0-9]+e[\+-][0-9]+)/).filter(Boolean);
  if(arr[0] === "-"){
    arr.unshift("0");
  }
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
  else if(operation === "÷" && secondNum === 0){
    total = NaN;
  }
  else if(operation === "÷"){
    total = firstNum / secondNum;
  }
  else if(operation === "%"){
    total = first / 100;
  }
  return total;
}

$(document).ready(function(){
  $(".0").click(function(){
    expression("0");
  });

  $(".1").click(function(){
    expression("1");
  });

  $(".2").click(function(){
    expression("2");
  });

  $(".3").click(function(){
    expression("3");
  });

  $(".4").click(function(){
    expression("4");
  });

  $(".5").click(function(){
    expression("5");
  });

  $(".6").click(function(){
    expression("6");
  });

  $(".7").click(function(){
    expression("7");
  });

  $(".8").click(function(){
    expression("8");
  });

  $(".9").click(function(){
    expression("9");
  });

  $(".percent").click(function(){
    expression("÷100");
  });

  $(".decimal").click(function(){
    expression("0.");
  });

  $(".add").click(function(){
    expression("+");
  });

  $(".subtract").click(function(){
    expression("-");
  });

  $(".multiply").click(function(){
    expression("x");
  });

  $(".divide").click(function(){
    expression("÷");
  });

  $(".ce").click(function(){
    var str = $(".total").text();
    if(str[str.length-1].match(/[\+x÷-]/) !== null){
      $(".total").text(str.slice(0,str.length-1));
    }
    else {
      if(Number(str) < 0){
        var arr = str.split(/(-[0-9]*\.?[0-9]+e[\+-][0-9]+|-[0-9]*\.?[0-9]+)/).filter(Boolean);
      }
      else {
        var arr = str.split(/([\+x÷-]|[0-9]*\.?[0-9]+e[\+-][0-9]+)/).filter(Boolean);
      }
      arr.pop();
      if(arr.length === 0){
        $(".total").text("0");
      }
      else {
        $(".total").text(arr.join(""));
      }
    }
  });

  $(".ac").click(function(){
    $(".total").text("0");
  });

  $(".equals").click(function(){
    if($(".total").text()[$(".total").text().length - 1].match(/[\+x÷-]/) === null)
    $(".total").text(total($(".total").text()));
  });
});
