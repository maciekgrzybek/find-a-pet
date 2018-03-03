import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Icon from "../components/Icon";

class FileAdd extends Component {
  constructor() {
    super();
    this.state = {
      fileError: false
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(acceptedFile, rejectedFile) {
    this.setState({ fileError: false });
    console.log(acceptedFile);
    if (rejectedFile.length > 0) {
      this.setState({ fileError: true });
      rejectedFile.length = 0;
    } else {
      var dataURL;
      var imgLoader = new Image();
      imgLoader.src = acceptedFile[0].preview;

      imgLoader.onload = data => {
        function resizeImage(image, maxWidth, maxHeight, crop) {
          var newDimensions;
          var imageData;
          var originalWidth = image.width;
          var originalHeight = image.height;

          if (crop) {
            newDimensions = setSizeWithCrop(
              originalWidth,
              originalHeight,
              maxWidth,
              maxHeight
            );
          } else {
            newDimensions = setSizeWithRatio(
              originalWidth,
              originalHeight,
              maxWidth,
              maxHeight
            );
          }

          imageData = resizeStep(
            imgLoader,
            newDimensions,
            maxWidth,
            maxHeight,
            crop
          );
          return imageData;
        }

        function setSizeWithRatio(
          originalWidth,
          originalHeight,
          maxWidth,
          maxHeight
        ) {
          // TODO: square images needs fixing
          var ratio, newHeight, newWidth;

          if (originalWidth >= originalHeight) {
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

        function setSizeWithCrop(
          originalWidth,
          originalHeight,
          maxWidth,
          maxHeight
        ) {
          var newHeight, newWidth, calculationRatio;

          var originalRatio = originalWidth / originalHeight;
          var maxRatio = maxWidth / maxHeight;
          var moveX = 0;
          var moveY = 0;

          if (originalRatio >= maxRatio) {
            calculationRatio = originalHeight / maxHeight;
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

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");

          if (crop) {
            canvas.width = maxWidth;
            canvas.height = maxHeight;
            ctx.drawImage(
              image,
              moveX,
              moveY,
              newWidth,
              newHeight,
              0,
              0,
              maxWidth,
              maxHeight
            );
          } else {
            canvas.width = newWidth;
            canvas.height = newHeight;
            ctx.drawImage(image, 0, 0, newWidth, newHeight);
          }

          dataURL = canvas.toDataURL("image/jpg");
          return { dataURL, canvas };
        }

        var resizedImageThumb = resizeImage(imgLoader, 300, 200, true);
        var resizedImageMedium = resizeImage(imgLoader, 768);
        // document.body.appendChild(resizedImageThumb.canvas);
        let images = {
          thumbnail: resizedImageThumb.dataURL,
          medium: resizedImageMedium.dataURL
        };

        this.props.onDrop(images);
      };
    }
  }

  render() {
    const dropStyle = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 150,
      border: "2px dashed #f5f5f5 ",
      flexDirection: "column",
      marginBottom: 15,
      active: {
        border: "3px dashed #787878"
      }
    };
    return (
      <Dropzone
        className="dropzone"
        onDrop={this.onDrop}
        style={dropStyle}
        maxSize={2097152}
        accept="image/jpeg, image/png"
        multiple={false}
        activeStyle={dropStyle.active}>
        <Icon icon="upload" />
        <p>Umieść tu zdjęcie</p>
        <p className="dropzone__small-text">*Nie może być większe niż 2mb</p>
        <p style={{ color: "red" }}>
          {this.state.fileError && `Plik jest za duży`}
        </p>
      </Dropzone>
    );
  }
}

export default FileAdd;
