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
					<img id='galvanize' src={'https://i.imgur.com/GYhKbi6.png'} />
					<h3>David Nyman</h3>
					<h3>Capstone</h3>
					<h4>Technologies</h4>
					<img
						className='logos'
						src={'https://cdn.worldvectorlogo.com/logos/react.svg'}
						id={'react'}
					/>
					{/* <Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Framework'>
					</Tooltip> */}
					<p>React Native</p>
					<img
						id='goog'
						src={
							'https://seeklogo.com/images/E/expo-logo-01BB2BCFC3-seeklogo.com.png'
						}
					/>
					{/* <Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Tools for Audio'>
					</Tooltip> */}
					<p>Expo SDK</p>
					<img
						className='logos'
						src={'https://reactnavigation.org/img/spiro_white.svg'}
					/>
					{/* <Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Tab Navigation'>
					</Tooltip> */}
					<p>React Navigation</p>
					<img
						id='goog'
						src={'https://cdn.worldvectorlogo.com/logos/google-analytics-3.svg'}
					/>
					{/* <Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Event Tracking'>
					</Tooltip> */}
					<p>Google Analytics</p>
					<img
						className='logos'
						src={'https://cdn.worldvectorlogo.com/logos/amazon-s3.svg'}
					/>
					{/* <Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='Music Storage'>
					</Tooltip> */}
						<p>AWS S3</p>
					<img className='logos' src={'https://i.imgur.com/mmrd7DU.png'} />
					{/* <Tooltip
						background={'#fff'}
						color={'#9dc6d1'}
						border={'#fff'}
						radius={2}
						fontSize={'22px'}
						padding={15}
						fadeEasing={'ease-in-out'}
						content='CI for Mobile'>
					*/}	<p>Bitrise</p>
					{/* </Tooltip> */}
				</div>
				<div id='slides'>
					<Slides />
				</div>
				<div id='download'>
				<img id='qr' src={'https://i.imgur.com/gcUOivO.png'}></img>
				<img id='app' src={'https://www.silverdalebc.com/wp-content/uploads/2018/02/itunes-app-store-logo.png'}></img>
				</div>
				<div className='mobile'>
					<h6>Screenshots</h6>

					<img className='mobile-images' src={				'https://i.imgur.com/MrnRZx0.png'}></img>
					<img className='mobile-images'src={'https://i.imgur.com/bSosMmh.png'}></img>
					<img className='mobile-images'src={'https://i.imgur.com/fq1aBGy.png'}></img>

				</div>
			</div>
		);
	}
}

export default App;
