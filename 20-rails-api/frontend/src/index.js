const url = "http://localhost:3000/api/v1/users"

fetch(url)
.then(resp => resp.json())
.then(users => {
  let userContainer = document.getElementById('user-container')
  let ul = document.createElement("ul")
  let tweetContainer = document.getElementById("flits-container")
  users.forEach(user => {
    let li = document.createElement("li")
    li.innerText = user.name
    user.tweets.forEach(tweet => {
      let newNode = document.createElement("p")
      newNode.innerText = tweet.content + " by " + user.name
      tweetContainer.appendChild(newNode)
    })
    ul.appendChild(li)
  })
  userContainer.appendChild(ul)
})
