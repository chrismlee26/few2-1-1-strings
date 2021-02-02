console.log("---Challenge 1: Capitalize First Word---")
function capitalize(str) {
  // Makes the first letter of a given string uppercase
  return str[0].toUpperCase() + str.slice(1);
}

// console.log(capitalize('hello world'))

// Prototype version of Capitalize First
String.prototype.capitalize = function () {
  return capitalize(this);
}

// console.log('hello world'.capitalize())



console.log("---Challenge 2: All Caps---")
function allCaps(str) {
  return str.toUpperCase();
}

// console.log(allCaps("foo bar"));

// Prototype version of All Caps
String.prototype.allCaps = function () {
  return allCaps(this);
}

// console.log('foo bar'.allCaps())



console.log("---Challenge 3: Capitalize Words---")
function capitalizeWords(str, sep = " ") {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = capitalize(strArr[i])
  }
  return strArr.join(sep);
}

// console.log(capitalizeWords("the most foo in bar"));

// Prototype version of Capitalize Words
String.prototype.capitalizeWords = function () {
  return capitalizeWords(this);
}

// console.log("the most foo in bar".capitalizeWords())



console.log("---Challenge 4: Remove Extra Spaces---")
function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim()
  // \s: match whitespace symbols
  // +: match one or more of \s
  // g: indicated iterative searching throughout the full string
}

// console.log(removeExtraSpaces("   Hello    world!   "))

// Prototype version of Fn
String.prototype.removeExtraSpaces = function () {
  return removeExtraSpaces(this);
}

// console.log("   Hello    world!   ".removeExtraSpaces())



console.log("---Challenge 5: Remove Extra Spaces and replace with '-' and lowercase---")
function kebobCase(str, sep = "-") {
  const words = str.split(' ')
  const res = words.join(sep)
  return res.toLowerCase();
}

// console.log(kebobCase("Hello world foo bar"))

// Prototype version of kebobCase
String.prototype.kebobCase = function () {
  return kebobCase(this);
}

// console.log("Hello world foo bar".kebobCase())



console.log("---Challenge 6: Remove Extra Spaces and replace with '_' and lowercase---")
function snakeCase(str) {
  return kebobCase(str, '_')
}

// console.log(snakeCase("Hello world foo bar"))

// Prototype version of snakeCase
String.prototype.snakeCase = function () {
  return snakeCase(this);
}

// console.log("Hello world foo bar".snakeCase())



console.log("---Challenge 7: Make the string camelcase---")
function camelCase(str) {
  strList = str.split(' ')
  newStr = ""
  for (let i = 0; i < strList.length; i++) {
    if(i == 0) {
      newStr += strList[i] 
    } else {
      newStr += capitalize(strList[i])
    }
  }
  return newStr
}

// console.log(camelCase('hello world'))

// Prototype version of camelCase
String.prototype.camelCase = function () {
  return camelCase(this);
}

// console.log('hello world'.camelCase())



console.log("---Challenge 8: Move first character to last---")
function shiftChar(str) {
  const firstChar = str.slice(0, 1);
  return str.slice(1) + firstChar
}

// console.log(shiftChar('dHello Worl'))

// Prototype version of shift first char to last
String.prototype.shiftChar = function () {
  return shiftChar(this);
}

// console.log('dHello Worl'.shiftChar())



console.log("---Challenge 9: Hash Tag, First letter cap, No Space, 3 Longest Words only---")
function makeHashTag(str) {
  // Split into array + capitalize words
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = capitalize(strArr[i])
  }
  // Sort into descending order
  strArr.sort(function(a, b){
    return b.length - a.length;
  });
  // Take only first 3 into new array
  const cutStr = strArr.slice(0,3)
  // Combine array into single string
  const combineStr = cutStr.join('')
  // Add hashtag infront
  return `#${combineStr}`
}

// console.log(makeHashTag('hash tag string is a hard one'))

// Prototype version of shift first char to last
String.prototype.makeHashTag = function () {
  return makeHashTag(this);
}

// console.log('hash tag string is a hard one'.makeHashTag())



console.log("---Challenge 10: Return true if empty---")
function isEmpty(str) {
  // delete all white space
  const clearSpace = removeExtraSpaces(str)
  // const clearSpace = str.replace(/\s+/g, ' ').trim()
  if (clearSpace == '') {
    return true;
  } else {
    return false;
  }
}

// console.log(isEmpty('hash tag string is a hard one')) //false
// console.log(isEmpty('')) //empty
// console.log(isEmpty('  ')) //spaces
// console.log(isEmpty(' ')) //tab

// Prototype version of shift first char to last
String.prototype.isEmpty = function () {
  return isEmpty(this);
}

// console.log('hash tag string is a hard one'.isEmpty())
// console.log(''.isEmpty()) //empty
// console.log('  '.isEmpty()) //spaces
// console.log(' '.isEmpty()) //tab

module.exports.capitalize = capitalize
module.exports.allCaps = allCaps
module.exports.capitalizeWords = capitalizeWords
module.exports.removeExtraSpaces = removeExtraSpaces
module.exports.kebobCase = kebobCase
module.exports.snakeCase = snakeCase
module.exports.camelCase = camelCase
module.exports.shiftChar = shiftChar
module.exports.makeHashTag = makeHashTag
module.exports.isEmpty = isEmpty
