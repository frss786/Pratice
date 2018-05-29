import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Component/nav/Nav.js'
import Logo from './Component/Logo/Logo.js'
import ImageLink from './Component/ImageLink/ImageLink.js'
import Rank from './Component/Rank/Rank.js'
import Particles from 'react-particles-js'
import './App.css';


const particlesOp = {
  particles: {
    number:{
      value: 30,
      density:{
        enable: true,
        value_area: 100
      }
    },
    // line_linked: {
    //   shadow: {
    //     enable: true,
    //     color: "#3CA9D1",
    //     blur: 5
    //   }
    // }
  }
}

class App extends Component {
  //Add title to the page.
  componentDidMount(){
    document.title = "FaceReg"
  }

  render() {
    return (
      <div className="App">
        <Particles 
              className='particles'
              params={particlesOp}
            />
        <Nav />
        <Logo />
        <Rank />
        <ImageLink />
        {/*<FaceReg />*/}
      </div>
    );
  }
}

export default App;
