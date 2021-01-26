console.log("---Challenge 1: Capitalize---")
function capitalize(str) {
  // Makes the first letter of a given string uppercase
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize('hello world'))


console.log("---Challenge 2: All Caps---")
function allCaps(str) {
  return str.toUpperCase();
}

console.log(allCaps("foo bar"));


console.log("---Challenge 3: Capitalize Words---")
function capitalizeWords(str, sep = " ") {
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = capitalize(strArr[i])
  }
  return strArr.join(sep);
}

console.log(capitalizeWords("the most foo in bar"));


console.log("---Challenge 4: Remove Extra Spaces---")
function removeExtraSpaces(str) {
  return str.replace(/\s+/g, ' ').trim()
  // \s: match whitespace symbols
  // +: match one or more of \s
  // g: indicated iterative searching throughout the full string
}

console.log(removeExtraSpaces("   Hello    world!   "))


console.log("---Challenge 5: Remove Extra Spaces and replace with '-' and lowercase---")
function kebobCase(str, sep = "-") {
  const words = str.split(' ')
  const res = words.join(sep)
  return res
}

console.log(kebobCase("Hello world foo bar"))


console.log("---Challenge 6: Remove Extra Spaces and replace with '_' and lowercase---")
function snakeCase(str) {
  return kebobCase(str, '_')
}

console.log(snakeCase("Hello world foo bar"))


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
console.log(camelCase('hello world'))


console.log("---Challenge 8: Make the string backwards---")
function backwardString(str) {
  return str.split("").reverse().join("");
}

console.log(backwardString('654 321 dlrow olleh'))


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
  let cutStr = strArr.slice(0,3)
  // Combine array into single string
  let combineStr = cutStr.join('')
  // Add hashtag infront
  return `#${combineStr}`
}

console.log(makeHashTag('hash tag string is a hard one'))