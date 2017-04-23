import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super ();
    this.state = {
      Projects: [{
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        title: 'Social App',
        category: 'ios Deisgn'
      },
      {
        title: 'e-com',
        category: 'Web Dev'
      }]
    }
  }
  render() {
    return (
      <div className="App">
       My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
