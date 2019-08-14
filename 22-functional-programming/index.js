function runThis(callback){
  callback()
}

runThis(function() { console.log("Function called!") })

function sayHello() {
  console.log("Greetings and salutations!")
}

runThis(sayHello)



const timesTwo = num => {
  console.log(num * 2)
}
array = [1, 2, 3, 4, 5]
array.forEach(timesTwo)

//HIGHER ORDER Function
function addUp(num1) {
  return function(num2){
    return num1+num2
  }
}

//Curried
function secretGetter(password){
  if (password === "opensesame") {
    return function(name) {
      return "Welcome " + name
    }
  }
}
//impure
function getBigNums(numArray) {
  let bigNums = []
  numArray.forEach(function(num){
    if (num >= 3) {
      bigNums.push(num)
    }
  })
  return bigNums
}
//pure
function easyBigNums(numArray) {
  return numArray.filter(num => num >= 3)
}
//impurish
nums = [1, 2, 3, 4, 5]
function addTwoToArray() {
  newNums = Object.assign([], nums)
  newNums.push(2)
  return newNums
}
