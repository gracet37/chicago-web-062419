---
title: Client Server Communication
layout: post
---

# Client Server Communication


## Prerequisite knowledge
- Explain why a front-end application would need to fetch data from the server
- Explain how AJAX affects the user experience of a web application
- Explain the relationship between server-side and client-side data
- Explain what the `fetch` function is used for
- Use `fetch` to retrieve data from a server




## Lesson learning goals
After this lecture, students should be able to:
- Use fetch to retrieve data from a server and display the results in the DOM
- Use fetch to send data to a server
- Identify the return value of fetch as a promise object
- Implement an client-side application which just interacts with a database via API calls
- Identify client-side state vs. server side data
- Explain use cases for server-side vs. client-side rendering



## What is a Single Page Application? 

Applications that fetch data asynchronously
- Twitter Feed infinite scroll
- Instagram Post 'like' heart

Applications that rerender a whole page (not async)
- Google 'next' search results link
- Amazon shopping cart checkout


Remove the script tag linking in the `books.js` to the page. Now books is undefined 😱. Show the error that we get - books is no longer defined!

Let's get things working again by fetching the data.

In order to fetch the data from a server, we need to have a server running. We can use 'json-server' as a mock API. It is pretty similar to what we could build with Rails - it can CRUD books.

Start it with
```sh
$ json-server books.json
```

You can open the browser to `http://localhost:3000/books` and see the books.


Comment out the broken call to `showBooks` and add in:

```js
fetch("http://localhost:3000/books")
  .then(res => res.json())
  .then(books => showBooks(books));
```

So - it's working again. But what is it doing? Let's break it down.

```js
fetch("http://localhost:3000/books")
```

`fetch` is a function that's globally available - we can call it in the browser. It takes in a url, and sends a GET request to that url. Let's look at the network tab to see the request happen when we call fetch.

What about `then`?

```js
  .then(response => response.json())
  .then(books => showBooks(books));
```

Well, when we fetch data from the server, it doesn't actually happen right away. There might be a second or two while the request is "in flight".

`then` is similar to the way we attach an event listener. With event listeners, we register a callback function to handle the event when it eventually happens. `then` is similar - it takes in a callback function and runs it when the response actually comes back from the server.

```js
res => res.json()
```

What about this `.json` function?

Well - the response that we get back from the server isn't always going to be JSON formatted. `fetch` is designed to handle lots of different kinds of HTTP requests and responses.  Since we know that the response from our API is going to be formatted as JSON, we can call the `.json` method to parse the response. That effectively turns it from a string into the corresponding javascript object, with native JS strings, booleans, numbers, arrays, and objects all nested within it.

```js
.then(books => showBooks(books))
```

So, at this last step, we are attaching the callback we want to run when we actually get the data and have parsed it from a response object into a native javascript object. In this callback, `books` will be an array of books, that we got from the server.



##  More complex `fetch` requests

`fetch` can do more than just send GET requests. We can configure it with options.

 What are some of the things you might want to be able to configure about the request?

- HTTP method
- headers
- body of request
- what happens after the request


`fetch` can take in a second argument. This argument sets configuration options for the request, like the method, the headers, and the body. If you look at the docs closely, each of the options has a default value. For 'method', that's GET.

Let's use `fetch` to save new books in our database.

We'll need
- POST method
- body of the request
- headers to tell the server what format the body is

```js
fetch("http://localhost:3000/books", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: 'The Fifth Season',
    author: 'N.K. Jemisin',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61XfS2XCw3L._SL160_SX135_.jpg'
  })
});
```

Let's take a closer look at the body.

```js
{
  title: 'The Fifth Season',
  author: 'N.K. Jemisin',
  img: 'https://images-na.ssl-images-amazon.com/images/I/61XfS2XCw3L._SL160_SX135_.jpg'
}
```

Notice that we aren't just passing in the object. Instead, we are calling `JSON.stringify` on it first. `stringify` turns an object into a JSON string. That's what the `body` option expects - a string. We can format the string however we like! However, if we want the server to know that we are formatting it as JSON, we need to include the `'Content-Type'` header. That way, the server will know that it can safely parse the body as JSON.

Tracing what happens in what order in synchronous code is relatively easy.

What will get logged in what order?

```js
console.log("A");

function logB() {
  console.log("B");
}

console.log("C");
logB();
```

It will be A, C, B - since the function is run after we log "C".

Tracing what happens in async code is more challenging. Let's try the same exercise with this code:

```js
console.log("A");
fetch(url)
  .then(res => {
    console.log("B");
    return res.json();
  }
).then(data => console.log("C"))
console.log("D")
```

"ADBC". Why?

## Asynchrony and Promises

Let's take a look at the return value of the fetch method.

```js
var x = fetch(url);
x
//>  Promise {<pending>}
x
//>  Promise {<resolved>}
```

x is a javascript `Promise`. Promises are a container for data that will show up later. They can also tell you about whether the data is there yet.

Promises are a little bit abstract, but you might think of them as
* Online order confirmation email
* An IOU for a slice of cake
* Coffee that you've set to brew

The Promise isn't the thing you want - the item you ordered, the slice of cake, a cup of coffee. Instead, it's something that you can hold onto now, that eventually will get filled in with the real value - or not!

Eventually, a Javascript Promise - like an online order or an IOU - will get resolved. Usually, that means it will be _fulfilled_ -  you get the value you wanted. Sometimes, though, instead getting the value you want, the package goes missing, or your friend fails to give you a slice of cake. In javascript Promises, we say that these promises are _rejected_.

So, a promise can be in three states:
- pending
- fulfilled
- rejected

We call a promise 'settled' if it's either fulfilled or rejected - it's no longer pending, it's done one or another.


## `then`

Javascript promises have a few more features we can use.

We can add a handler that runs when the response arrives. When we call the `.then` function, it's like adding an event handler. It's code to run later, when the promise is resolved.

Unlike event handlers, `.then` is chainable. It returns a promise, so we can attach more `then` handlers that will run in order.

```js
fetch(url)
  .then(() => console.log('resolved'))
  .then(() => console.log('after resolved'))
  .then(() => console.log('after logging after resolved'))
```

## `catch`

`then` runs when the promise is fulfilled - but what about when it's rejected?

We can use `.catch` to attach a handler for when the promise is rejected.

```js
fetch("https://www.google.com")
.catch(error => console.log("Here's the error:", error))
```

If the fetch doesn't go through, you can add code to let the user know, or try again.

Helpfully, if there's an error within one of our `then` handlers, `catch` will run!

```js
fetch("https://www.google.com")
.then(res =>  console.log(value) )
.catch(error => console.log("Here's the error:", error))
// Here's the error: ReferenceError: value is not defined
//    at fetch.then.res
```
