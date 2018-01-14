import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class FileAdd extends Component {

  constructor() {
    super();

    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(file) {

		var dataURL;
		var imgLoader = new Image();			
		imgLoader.src = file[0].preview;	

		imgLoader.onload = (data) => {

			function resizeImage(image, maxWidth, maxHeight, crop){

				var newDimensions;
				var canvas;
				var originalWidth = image.width;
				var originalHeight = image.height;
				
				if(crop) {
					newDimensions = setSizeWithCrop(originalWidth, originalHeight, maxWidth, maxHeight);
				} else {
					newDimensions = setSizeWithRatio(originalWidth, originalHeight, maxWidth, maxHeight);
				}

				canvas = resizeStep(imgLoader, newDimensions, maxWidth, maxHeight, crop);
				return canvas;

			}

			function setSizeWithRatio(originalWidth, originalHeight, maxWidth, maxHeight){

				var ratio, newHeight, newWidth;

				if (originalWidth > originalHeight) {
					if (originalWidth > maxWidth) {
						ratio = maxWidth / originalWidth;
						newHeight = Math.round(originalHeight * ratio);
						newWidth = maxWidth;
					} else {
						newHeight = originalHeight;
						newWidth = originalWidth;
					}
				} else {
					if (originalHeight > maxHeight) {
						ratio = maxHeight / originalHeight;
						newWidth = Math.round(originalWidth * ratio);
						newHeight = maxHeight;
					} else {
						newHeight = originalHeight;
						newWidth = originalWidth;
					}
				}
				return { 
					newHeight,
					newWidth
				};
			}

			function setSizeWithCrop(originalWidth, originalHeight, maxWidth, maxHeight){


				var newHeight, newWidth, calculationRatio;

				var originalRatio = originalWidth / originalHeight;
				var maxRatio = maxWidth / maxHeight;
				var moveX = 0;
				var moveY = 0;
				
				if(originalRatio >= maxRatio) {
					calculationRatio = originalHeight / maxHeight
					newWidth = Math.round(maxWidth * calculationRatio);
					newHeight = originalHeight;
					moveX = (originalWidth - newWidth) / 2;
				} else {
					calculationRatio = originalWidth / maxWidth;
					newHeight = Math.round(maxHeight * calculationRatio);
					newWidth = originalWidth;
					moveY = (originalHeight - newHeight) / 2;
				}

				return { 
					newHeight,
					newWidth,
					moveX,
					moveY
				};
			}
			// Resizing function
			function resizeStep(image, newDimensions, maxWidth, maxHeight, crop) {
				
				const { newWidth, newHeight, moveX, moveY } = newDimensions;

				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
			
				if(crop){
					canvas.width = maxWidth; 
					canvas.height = maxHeight; 
					ctx.drawImage(image, moveX, moveY, newWidth, newHeight, 0, 0, maxWidth, maxHeight );
				} else {
					canvas.width = newWidth;
					canvas.height = newHeight; 
					ctx.drawImage(image, 0, 0, newWidth, newHeight);
				}

				dataURL = canvas.toDataURL('image/jpg');
				return dataURL;
			}

			var resizedImageThumb = resizeImage(imgLoader, 300, 200, true);
			var resizedImageMedium = resizeImage(imgLoader, 1200);
			// Append to body
			// document.body.appendChild(resizedImageThumb);

      this.props.onDrop(resizedImageMedium)

		};

		
  }
  render(){

    const dropStyle = {
			'width': 200,
			'height': 200,
			'border': '2px solid red',
			'active': {
				'border': '3px solid green'
			}
    }
    
    return (
        <Dropzone
        onDrop={this.onDrop}
        style={ dropStyle }
        multiple={ false }
        activeStyle={ dropStyle.active }>
          <p>Fote dawaj tu</p>
      </Dropzone>
    )
  }
}

export default FileAdd;