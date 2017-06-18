$(document).ready(function(){
  $('.number').on('click',numberToDisplay);
  $('.operator').on('click',operatorToDisplay);
  $(document).on('keydown',checkKeyStroke);
});


var clickClear = function() { // clears display
  $('#display').empty();
}

var checkKeyStroke = function(e) {
  if (e.keyCode >= 48 && e.keyCode <= 58) {
    numberToDisplay(e.key);
    return;
  }

  if (e.key==='+'||e.key==='-'||e.key==='*'||e.key==='/'
    ||e.key==='='||e.key==='.'||e.key==='Backspace'||e.key==='Enter') {
    operatorToDisplay(e.key);
    return;
  }

}
var numberToDisplay = function(e) { // displays number based on user click
  var number = isNaN(e) ? $(this).text(): e;
  var currentDisplay = $('#display').text();
  if (currentDisplay.length===0) {
    $('#display').text(number);
    return;
  }
  if (isNaN(currentDisplay.charAt(currentDisplay.length-1))
    && currentDisplay.charAt(currentDisplay.length-1) !== '.') {
    $('#display').text(currentDisplay+' '+number);
  }
  else {
    $('#display').text(currentDisplay+number);
  }
}

var displayDecimal = function() {
  var currentDisplay = $('#display').text();
  if (currentDisplay.length===0) {
    console.log('in displayDecimal 1st if statement');
    $('#display').text('0.');
    return;
  }

  if(isNaN(currentDisplay.charAt(currentDisplay.length-1))) {
    $('#display').text(currentDisplay+ ' ' + '0.');
    return;
  }
  $('#display').text(currentDisplay+'.');
}

var operatorToDisplay = function(e) {
  var operator = (e==='+'||e==='-'||e==='*'
    ||e==='/'||e==='='||e==='.'||e==='Backspace') ? e : $(this).text();
  if ($(this).attr('id') === 'clear'|| e==='Backspace') { //if 'C' clicked, clear display and return
    clickClear();
    return;
  }
  if ($(this).attr('id') === 'equals'||e==='='||e==='Enter') { //if '=' clicked, do the math and return
    doTheMath();
    return;
  }
  if ($(this).attr('id') === 'decimal'||e==='.') { // if '.' clicked, displayDecimal
    displayDecimal();
    return;
  }
  // var operator = $(this).text(); // otherwise, add operator to display
  var currentDisplay = $('#display').text();
  $('#display').text(currentDisplay+' '+operator);
}

var doTheMath = function() {
  var result = 0;
  var dsplyArry = $('#display').text().split(' '); //split numbers and operators
  var operand1 = dsplyArry[0];
  var operator = dsplyArry[1];
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
