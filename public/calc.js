$(document).ready(function(){
  $('.number').on('click',numberToDisplay);
  $('.operator').on('click',operatorToDisplay);
});
var clickClear = function() {
  $('#display').empty();
}
var numberToDisplay = function(e) {
  var number = $(this).text();
  var currentDisplay = $('#display').text();
  if (currentDisplay.length===0) {
    $('#display').text(number);
    return;
  }
  if (isNaN(currentDisplay.charAt(currentDisplay.length-1))) {
    $('#display').text(currentDisplay+' '+number);
  }
  else {
    $('#display').text(currentDisplay+number);
  }
}

var operatorToDisplay = function(e) {
  if ($(this).attr('id') === 'clear') { //if C clicked, clear display and return
    clickClear();
    return;
  }
  if ($(this).attr('id') === 'equals') { //if = clicked, do the math and return
    doTheMath();
    return;
  }
  var operator = $(this).text(); // otherwise, add operator to display
  var currentDisplay = $('#display').text();
  $('#display').text(currentDisplay+' '+operator);
}

var doTheMath = function() {
  var result = 0;
  var dsplyArry = $('#display').text().split(' '); //split numbers and operators
  var operand1 = dsplyArry[0];
  var operator = dsplyArry[1];
  console.log(operator);
  var operand2 = dsplyArry[2];
  switch (operator) {
    case '+':
      result = addNumbers(operand1,operand2);
      break;
    case '-':
      result = subtractNumbers(operand1,operand2);
      break;
    case 'X':
      result = multiplyNumbers(operand1,operand2);
      break;
    case '/':
      result = divideNumbers(operand1,operand2);
      break;
    default:
      result = 'error';
  }
  $('#display').text(result);
}

var addNumbers =  function(operand1,operand2) {
  return parseFloat(operand1) + parseFloat(operand2);
}
var subtractNumbers =  function(operand1,operand2) {
  return parseFloat(operand1) - parseFloat(operand2);
}
var multiplyNumbers =  function(operand1,operand2) {
  return parseFloat(operand1) * parseFloat(operand2);
}
var divideNumbers =  function(operand1,operand2) {
  return parseFloat(operand1) / parseFloat(operand2);
}
