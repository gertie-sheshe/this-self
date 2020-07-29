import React from 'react';
import Profile from './components/profile/profile';
import Project from './components/projects/projects';
import './App.scss';

function App() {
  return (
    <main className="App">
      <div className="upper-section">
        <Profile/>
        <Project/>
      </div>
      <div className="lower-section">
        <div>Interviews and Talks</div>
        <div>Articles</div>
      </div>
    </main>
  );
}

export default App;
