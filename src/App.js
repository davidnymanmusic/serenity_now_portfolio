import React, { Component } from 'react';
import Tooltip from 'react-simple-tooltip';

import './App.css';

import Slides from './PhoneSlides';

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
					<h3>David Nyman</h3>
					<h4>Technologies</h4>
					<img
						className='logos'
						src={'https://cdn.worldvectorlogo.com/logos/react.svg'}
					/>
					<Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Framework'>
						<p>React Native</p>
					</Tooltip>
					<img
						id='goog'
						src={
							'https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png'
						}
					/>
					<Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={"ease-in-out"}
						content='Tools for Audio'>
						<p>Expo SDK</p>
					</Tooltip>
					<img
						className='logos'
						src={'https://reactnavigation.org/img/spiro_white.svg'}
					/>
					<Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Tab Navigation'>
						<p>React Navigation</p>
					</Tooltip>
					<img
						id='goog'
						src={'https://cdn.worldvectorlogo.com/logos/google-analytics-3.svg'}
					/>
					<Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Event Tracking'>
						<p>Google Analytics</p>
					</Tooltip>
					<img
						className='logos'
						src={'https://cdn.worldvectorlogo.com/logos/amazon-s3.svg'}
					/>
					<Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Music Storage'>
						<p>AWS S3</p>
					</Tooltip>
					<img className='logos' src={'https://i.imgur.com/mmrd7DU.png'} />
					<Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='CI for Mobile'>
						<p>Bitrise</p>
					</Tooltip>
				</div>
				<div id='slides'>
					<Slides />
				</div>
				<div id='info' />
			</div>
		);
	}
}

export default App;
