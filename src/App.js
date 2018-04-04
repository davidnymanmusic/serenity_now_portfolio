import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slides from './PhoneSlides'

class App extends Component {
  render() {
    return (
      <div>
				<div id='header'>
				<h1>Serenity Now</h1>
				<h3>Meditation, Music, and Reflection</h3>
				</div>
				<div id='technologies'>
					<h3>Galvanize Capstone</h3>
					<h4>Technologies</h4>
					<p>React Native</p>
					<p>Expo SDK</p>
					<p>React Navigation</p>
					<p>Animatable</p>
					<p>Google Analytics</p>
					<p>AWS S3</p>
				</div>
				<div id='slides'>
					<Slides/>
					</div>
					<div id='info'></div>
      </div>
    );
  }
}

export default App;
