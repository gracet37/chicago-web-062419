import React, { Component } from 'react'

class RandomKoala extends Component {
  constructor(props) {
    super(props);
    this.state = {
      koala: {
        id: 0,
        image_url: 'https://cdn.dribbble.com/users/726577/screenshots/2134158/ask_koala-02.jpg'
      }
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/koalas')
      .then((response) => {
          console.log(response);
          return response.json();
      })
      .then((koalas) => {
        const randomIndex = Math.floor(Math.random() * koalas.length)
        this.setState({koala: koalas[randomIndex]})
      })
  }

  render () {
    const koalaImageUrl = this.state.koala.image_url;
    return (
      <div className="app-children">
        <h1>Random Koala!</h1>
        <img src={koalaImageUrl} alt="a random koala" />
      </div>
    )
  }
}

export default RandomKoala
