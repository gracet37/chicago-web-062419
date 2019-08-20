const BOOKS_URL = "http://localhost:3000/books"
const books_container = document.getElementById("book-list")

class Rectangle {

  constructor(height, width){
    this.height = height
    this.width = width
    this.element = document.createElement("div")
  }

  area() {
    return this.width * this.height
  }

  render(){
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.borderStyle = "solid"
    this.element.addEventListener("click", event => {
      this.width = this.width * 2
      this.height = this.height * 2
      event.target.innerHTML = this.render()
    })
    return this.element
  }

  static biggestOf(rectangles) {
    let largest = rectangles[0]
    rectangles.forEach(rectangle => {
      if(rectangle.area() > largest.area()){
        largest = rectangle
      }
    })
    return largest
  }
}

class Book {
  constructor(title, author, img){
    this.title = title
    this.author = author
    this.img = img
    this.element = document.createElement("div")
  }

  render(){
    let h2 = document.createElement("h2")
    h2.innerText = this.title
    let pAuthor = document.createElement("p")
    pAuthor.innerText = this.author
    let cover = document.createElement("img")
    cover.src = this.img
    this.element.append(h2, pAuthor, cover)
    return this.element
  }
}


fetch(BOOKS_URL)
.then(resp => resp.json())
.then(books => {
  books.forEach(book => {
    let bookObj = new Book(book.title, book.author, book.img)
    books_container.appendChild(bookObj.render())
  })
})
// let newDiv = new Rectangle(100, 200)
// books_container.appendChild(newDiv.render())
//
// let r1 = new Rectangle(1, 3)
// let r2 = new Rectangle(2, 6)
// let r3 = new Rectangle(2, 4)
// let rs = [r1, r2, r3]
// console.log(Rectangle.biggestOf(rs))
