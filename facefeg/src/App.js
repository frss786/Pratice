import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Component/nav/Nav.js'
import Logo from './Component/Logo/Logo.js'
import ImageLink from './Component/ImageLink/ImageLink.js'
import './App.css';

class App extends Component {
  //Add title to the page.
  componentDidMount(){
    document.title = "FaceReg"
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Logo />
        <ImageLink />
        {/*<FaceReg />*/}
      </div>
    );
  }
}

export default App;
