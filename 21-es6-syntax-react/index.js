//Arrow functions
const sayHello = greeting => console.log(greeting)

const returnName = name => {
  let fullGreeting = "Hello " + name
  return fullGreeting
}

let dog = {
  name: "Fred",
  breed: "Scottie",
  fur: "black",
  bark: "worse than bite"
}
//destructuring
function petDog(dog) {
  let { name, breed } = dog
  console.log("you petted " + name + " the " + breed)
}

let candies = ["Reese's", "M&M's", "Oreos", "Twizzlers", "Skittles", "Swedish Fish"]
//forEach
//candies.forEach(candy => console.log(candy))

//map
let bigCandy = candies.map(candy => {
  return candy.toUpperCase()
})


//filter
let sCandies = candies.filter(candy => candy[0] === "S")

//reduce
function candyReducer(collector, candy) {
  return candy + collector
}

let meltedCandy = candies.reduce(candyReducer, "")

//spread operator
let dog2 = dog
console.log(dog === dog2) //true

let dog3 = {...dog, paws: "adorable"}
console.log(dog3 === dog) //false
