import React from 'react';
import Profile from './components/profile/profile';
import Project from './components/projects/projects';
import Talks from './components/talks/talks';
import Articles from './components/articles/articles';
import './App.scss';

function App() {
  return (
    <main className="App">
      <div className="upper-section">
        <Profile/>
        <Project/>
      </div>
      <div className="lower-section">
        <Articles/>
        <Talks />
      </div>
    </main>
  );
}

export default App;
