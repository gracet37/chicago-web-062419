function addBook(book) {
  const book_list = document.querySelector("#book-list");
  const div = makeBookCard(book);
  book_list.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showBooks(bookArray) {
  bookArray.map(book => {
    addBook(book);
  });
}

// what happens when books isn't defined?
// showBooks(books);
fetch("http://localhost:3000/books")
// .then(function(response){
//   return response.json()
// })
.then(response => response.json())
// console.log(books)
// showBooks(books)
.then(books => {
  console.log(books)
  showBooks(books)
})

let bookForm = document.querySelector("form")
bookForm.addEventListener("submit", postNewBook)

function postNewBook(){
  event.preventDefault()
  let title = document.getElementsByName("title")[0].value
  let author = document.getElementsByName("author")[0].value
  let cover = document.getElementsByName("cover")[0].value

  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      author: author,
      img: cover
    })
  })
  .then(response => response.json())
  .then(book => addBook(book))
  .catch(errors => console.log(errors))
}
