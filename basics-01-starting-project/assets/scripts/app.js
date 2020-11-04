const defaultValue = 0;
let currentResult = defaultValue;
logEntries = [];


function getValue(){
  return parseInt(userInput.value)
}

function getDescription(operation, valueBefore, finalValue){
  const resultDescription= `${valueBefore} ${operation} ${finalValue}`
  outputResult(currentResult, resultDescription)
}

//shorthand to log Into console
function log(x){
  return console.log(x)
}

//to get the logEntry
function writeLog(operation, 
  beforeAdded, 
  afterAdd){
    const logEntry = {
      operation: operation,
      beforeAdded: beforeAdded,
      afterAdd: afterAdd
    };
    logEntries.push(logEntry);
    log(logEntries)
}

function add(){
  const enetedNumber = getValue()
  const initalValue = currentResult;
  currentResult += enetedNumber;
  getDescription("+", initalValue, enetedNumber)
  writeLog('Add', initalValue, currentResult)
}


function subtraction(){
  const enetedNumber = getValue()
  const initalValue = currentResult;
  currentResult -= enetedNumber;
  getDescription('-', initalValue, enetedNumber);
  writeLog('Subtraction', initalValue, currentResult)
}

function mutiply(){
  const enetedNumber = getValue()
  const initalValue = currentResult;
  currentResult = currentResult * enetedNumber;
  getDescription('*', initalValue, enetedNumber)
  writeLog('Multiplied', initalValue, currentResult)
}

function divides(){
  const enetedNumber = getValue()
  const initalValue = currentResult;
  currentResult = currentResult / enetedNumber;
  getDescription('/', initalValue, enetedNumber)
  writeLog('Divided', initalValue, currentResult)
}

addBtn.addEventListener('click', add)

subtractBtn.addEventListener('click', subtraction)

multiplyBtn.addEventListener('click', mutiply)

divideBtn.addEventListener('click', divides)































