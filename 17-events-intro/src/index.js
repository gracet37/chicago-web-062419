document.addEventListener("DOMContentLoaded", function(){
  let form = document.querySelector("#comment-form")
  let submitBtn = form.querySelector(".btn")
  // submitBtn.addEventListener("click", alertUser)
  form.addEventListener("submit", addComment)
  document.getElementById("helicopter-parent").addEventListener("click", doAThing)
})

function alertUser(){
  alert("Alert!")
}

function addComment(){
  event.preventDefault()
  let userInput = document.getElementById("new-comment").value
  let newNode = document.createElement("p")
  newNode.innerText = userInput
  console.log(newNode)
  let container = document.getElementById("comments-container")
  container.appendChild(newNode)
  document.getElementById("new-comment").value = ""
}

function doAThing(){
  console.log(event)
  if (event.target.dataset["name"] === "alert") {
    alert(event.target.dataset["name"])
  } else if (event.target.dataset["name"] === "log") {
    console.log(event.target.dataset["name"])
  } else if (event.target.dataset["name"] === "error") {
    console.log(event.target.dataset["name"])
  }
}
