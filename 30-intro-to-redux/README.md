# Intro to Redux

- What's hard about managing state in React
- Introducing Redux
- Designing our redux state
- Dispatching actions to our store
- Updating based on actions
- Problems with this version of our redux app

## (Psst! Redux Terminology Cheatsheet)
[Redux Terminology](https://gist.github.com/alexgriff/0e247dee73e9125177d9c04cec159cc6)

## The Problem - Refactoring Components
![gif](http://g.recordit.co/s2OFw0VtYb.gif)

We've changed `App` so that the computed value can render in the Header. What did we have to change?

- state initialization moved to App
- state managing functions moved to App
- count in Counter changed to `this.props.count`
- computation moved to Header
- computation switched to use a prop
- change functions switched to props in Counter

Almost everything in the code for the App had to change to accomodate this tiny design change!

## Introducing Redux - The Plumbing

Installing redux: `yarn add redux`

Creating our redux store:

```js
import { createStore } from 'redux'
const reducer = (oldState, action) => {
  console.log("action", action)
  if(oldState === undefined) {
    return {}
  }
  return oldState;
}

const store = createStore(reducer);
```

## Designing our state

- Starting to think in Redux
- 'Shape' of our state: keys in our store and the _types_ of the values
- e.g. "`count` will be a number. `friends` will be an array of Friend objects. `loading` will be a boolean.

> Note: This is just like step 3 of Thinking in React. We _just_ need to figure out the shape of the state, not where it lives.

- What should the initial state be?
- Redux init action - `"@@redux/INITxyz"`
- Warning on returning `undefined` from our store


### Reading from the store

We want to read the count from the store
We can get the current state with `getState`

```js
// instead of this.props.count or this.state.count
store.getState().count
```

**We no longer depend on props!**

## Dispatching Actions to our store

- What are the things that can happen in our app?
- These will become the _actions_ that our store responds to

Action: A plain old javascript object (POJO) with the key `type`, a string. Optionally, more data.

```js
{ type: 'CLICKED_PLUS' }
```

```js
increment = () => {
  store.dispatch({type: 'CLICKED_PLUS'})
}


decrement = () => {
  store.dispatch({type: 'CLICKED_MINUS'})
}
```

Q: Where should these functions live?
A: Wherever you like! They don't depend on `setState`, so they can be defined in the component where they are used.

## Updating State

Let's see the actions flow through our reducer:

```js
const reducer = (oldState = { count: 0 }, action) => {
  console.log('action', action)
  return oldState;
}
```

*Rule: we must not mutate the old state!*

Our reducer should return a _new_ object with the updated state

```js
const reducer = (oldState = { count: 0 }, action) => {
  console.log('action', action)
  if(action.type === 'CLICKED_PLUS') {
    return { count: oldState.count + 1 }
  }
  return oldState;
}
```

If we expect to return different states based on different actions, we can use a switch statement:

```js
const reducer = (oldState = { count: 0 }, action) => {
  console.log('action', action)
  switch(action.type) {
    case 'CLICKED_PLUS':
      return { count: oldState.count + 1 }
    case 'CLICKED_MINUS':
      return { count: oldState.count - 1 }
    default:
      return oldState;
  }
}
```

### Why isn't our view updating?

The redux store is changing! (We can see if we log it)

React only rerenders on props or state change. We need a little hack to make our store updates rerender our app.

```js
componentDidMount() {
  store.subscribe(() => this.forceUpdate())
}
```

## Challenge

Add buttons, actions, and cases to your reducer so that we can increment and decrement by `+3` and `-5`

---

# Part II - React Redux, Provider, Connect, and mapping all the things to props

We've seen how simple the Redux library really is.

But to make it work in React, we had to shoehorn our app all into one file. Not very good React!  

Let's refactor app, header, counter into individual components.

Hardcode counter value (for now) instead of pulling from store. Comment breaking dispatches out.

npm install --save react-redux

import { Provider } from 'react-redux'

index.js - wrap app in Provider like we've done before with router

pass store={store} into Provider

in component that needs to access the store, import { connect } from react-redux

then in the export line, export default connect(() => ({}))(Counter)

check work: log counter props at top of render function

Now pass a k/v into the connect() object and check the log again

What about setting a const which is a function, one that returns your props... and then you use that const in the export line?

What if that function logged its "mystery argument?"

So we can see that connect() is able to access the state of the whole app!

That's because the state was passed in as "store" when we set up our Provider. Without Provider, connect() wouldn't work.

Let's go back and call our const function "mapStateToProps" and call the mystery argument "state" to follow the react-redux convention. Also because that's what the function is doing.

So we have mapStateToProps, which is great for when our component needs to read its specific props from the app's state

But what about when our component needs to interact with state and modify it?

Let's make a new function called mapDispatchToProps(), and give it a mystery argument like last time, and then let's add it as the second argument to our connect() call.

What's the mystery argument here? aha, it's a dispatch function! That means we have the ability to connect back to the store the other way and send actions to it!

This function is formatted just like mapStateToProps in that it returns an object. The keys of the object will be the names of the functions we'd like to call (e.g. {increment: () => { dispatch({ type: 'INCREMENT', amount: 1 })}} this.props.increment on click)
