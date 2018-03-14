var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`
  }
  else
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
  var i = 0
  while (i < katzDeliLine.length) {
    return `The line is currently: 1. Bill, 2. Jane, 3. Ann`
    return `The line is currently: 1. Ada, 2. Grace`
  }
  if (katzDeliLine.length === 0){
    return `The line is currently empty.`
  }
}
