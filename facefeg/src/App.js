import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Component/nav/Nav.js'
import Logo from './Component/Logo/Logo.js'
import ImageLink from './Component/ImageLink/ImageLink.js'
import SignIn from './Component/SignIn/SignIn.js'
import FaceReg from './Component/FaceReg/FaceReg.js'
import Rank from './Component/Rank/Rank.js'
import Particles from 'react-particles-js'
import Register from './Component/Register/Register.js'
import './App.css';





const particlesOp = {
  particles: {
    number:{
      value: 30,
      density:{
        enable: true,
        value_area: 150
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
const initialState ={
  input:'',
  url: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user:{
    id:'',
    name:'',
    email:'',
    entries:'',
    joined:'',
  }
}
class App extends Component {

  constructor(){
    super();
    this.state = initialState;

  }

  loadUser = (user)=>{
    this.setState({
      user:{
        id:user.id,
        name:user.name,
        email:user.email,
        entries:user.entries,
        joined:user.joined,
      }
    })
  }

  calculateFaceLocation = (dataA) => {
    console.log(dataA);
    const face = dataA.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    const faceArray = dataA.outputs[0].data.regions.map((region) =>{
      var faceBox = region.region_info.bounding_box;
      return {
        left: faceBox.left_col * width,
        topRow: faceBox.top_row * height,
        right: width - (faceBox.right_col *width),
        bottomRow: height - (faceBox.bottom_row * height),
      }
    });
    return faceArray;
  }

  displayFaceBox = (box) => {
    console.log("box",box)
    this.setState({box: box});
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if(route === 'signin'){
      this.setState(initialState);
    } else if(route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route:route})
  }

  onSubmit = () => {
    this.setState({url:this.state.input});
    fetch('http://localhost:3000/imageurl', {
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
              input: this.state.input
            })
    })
    .then(response => response.json())
    .then(response => {
      if(response){
        fetch('http://localhost:3000/image',{
          method:'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        }).then(response => response.json())
          .then(rank => {
              this.setState(Object.assign(this.state.user, {entries: rank}));
          });
      }
      this.displayFaceBox(this.calculateFaceLocation(response));
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Particles
              className='particles'
              params={particlesOp}
            />
        <Nav onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        { this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank rank={this.state.user.entries} name={this.state.user.name}/>
            <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
            <FaceReg box={this.state.box} url={this.state.url}/>
          </div>
          : (this.state.route === 'signin' ?
              <div>
                <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              </div>
              :
              <div>
                <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
