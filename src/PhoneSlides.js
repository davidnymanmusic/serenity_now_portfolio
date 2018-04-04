import React from 'react';
import SlideShow from 'react-image-show';

const urlArray =['https://i.imgur.com/MrnRZx0.png', 'https://i.imgur.com/bSosMmh.png', 'https://i.imgur.com/fq1aBGy.png']

export default class Slides extends React.Component {
  render() {
    return (
			<div className="slideshow">


      <SlideShow
        images={urlArray}
        width="520px"
				height="730px"
        imagesWidth="400px"
        imagesHeight="730px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="0px"
        thumbnailsHeight="0px"
        indicators thumbnails fixedImagesHeight

      />
		</div>
    );
  }
}
