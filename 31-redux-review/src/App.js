import React from 'react';
import Navbar from './Navbar';
import PaintingList from './PaintingList';
import PaintingShow from './PaintingShow';
import { Route, Switch } from 'react-router-dom';
import Counter from './Counter';
import About from './About';
const painting = {
    id: 1,
    title: 'Portrait of a Carthusian',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg',
    slug: 'petrus-christus-portrait-of-a-carthusian',
    date: '1446',
    dimensions: {
      width: 8.5,
      height: 11.5
    },
    votes: 24,
    artist: {
      id: 1,
      name: 'Petrus Christus',
      hometown: 'Baarle-Hertog, Belgium',
      birthday: '1410',
      deathday: '1475'
    },
    museum: {
      id: 1,
      name: 'Unknown Museum'
    }
}

const App = () => {
  return (
    <div className="App">
      <Navbar icon="paint brush" title="Painterest" description="out app" />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/' component={PaintingList} />
      </Switch>
    </div>
  );
};

export default App;
