import React, { Component } from "react";

class Icon extends Component {
  render() {
    const svg = {
      logo: () => {
        return (
          <svg
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150.9 82.8">
            <path d="M62.6 21.1l1.4-3.8v-.2c0-.3-.3-.5-.6-.5H57c-1.5 0-1.5-.6-1.5-2.1V14c0-1.1 0-2.3 1.1-2.3H66c.2 0 1.5.1 1.9.1.4 0 1 .2 1 1v5c0 .9-.2 1.3-.6 2l-7 16.1c-.2.2-.2.2-.2.5 0 .1 0 .3.2.4l7.4-.2c.3.1.6.2.6.6v3.3c0 .3-.2.8-.4.9-3.5 0-6.9.3-10.4.3h-1.8c-.9 0-.9-1.5-.9-2.2v-2.7c.3-1.1 1.4-3.4 6.8-15.7zM77.2 18.8c-.1 0-.1 1-.1 2.5 0 4.1.2 12.4.2 19.9 0 1.1-.8 1.2-1.6 1.2h-1.8c-.7 0-1.4-.1-1.5-.7V27.9c0-4-.1-8-.1-12v-4.7c0-.4.3-.7.8-.7h5.6c.4 0 .9.1.9.5l6.6 22-1.1-22c.1-.3.5-.6.9-.6h3.4c.2 0 .6.1.7.4v.3c0 1.7.3 6.6.3 9.9 0 1.5.2 9.8.2 15.5 0 3.1-.1 5.4-.3 5.4h-4.9c-.4 0-.8-.3-1-.7l-7.2-22.4zM93.4 29.6v-5.7c0-9.5.7-13.7 8.3-13.7h.7c5.5.2 5.7 3.9 6 8.6 0 .2 0 .5.2 22.2 0 .5-.3 1.2-1 1.2h-3.1c-1 0-1.1-1.1-1.1-1.9v-.8c0-1.2 0-7.2-.1-8.4-.2-.4-.5-.5-1-.5h-3.5c-.6 0-.9.2-.9 1v9.7c0 .3-.6.7-.9.7h-2.9c-1 0-1-1.1-1-1.9.3-3.5.3-6.8.3-10.5zm6.1-3.7c.2 0 1.9 0 2.6.1h.4c.8 0 1.1-.6 1.1-1.4 0-1.4.1-2.6.1-3.7 0-4.4-.4-5.6-1.5-5.6-.3 0-.9-.1-1.6-.1-2 .1-2.3 2.4-2.3 4v5.1c0 .8.3 1.6 1.2 1.6zM110 39c0-.2.1-1.2.5-1.2h2.3c1.3 0 1.4-2.1 1.4-3.3 0-6.9-1.3-18.9-1.5-23.9v-.3c0-1 1-1.2 1.8-1.2h2.2c.5 0 2.1.9 2.1 23.4 0 6.9-.5 10.3-6.6 10.3H111c-.3-.1-.8-.1-.8-.5-.1-.7-.2-2.9-.2-3.3zM121.4 9.2h1c11.3 0 13.8.9 13.8 21.8v.4c-.2 5.8-1.2 9.5-12.3 9.5-.5 0-1.8 0-1.9-1.7v-.7c0-1.6-.1-7.3-1.1-28.3.1-.4.2-.8.5-1zm4.6 6.1c0 5.2.4 10.9.5 16.1 0 .4.1 2.9.1 3.3 0 .3 0 1.1.4 1.3 3.6-.5 4.3-1.7 4.3-7.3v-1.2l-.1-1.6c-.4-6.4-.7-11.8-4.1-11.8-.4 0-.7 0-1.1.2v1zM144.3 21.1l1.4-3.8v-.2c0-.3-.3-.5-.6-.5h-6.4c-1.5 0-1.5-.6-1.5-2.1V14c0-1.1 0-2.3 1.1-2.3h9.3c.2 0 1.5.1 1.9.1.4 0 1 .2 1 1v5c0 .9-.2 1.3-.6 2l-7 16.1c-.2.2-.2.2-.2.5 0 .1 0 .3.2.4l7.4-.2c.3.1.6.2.6.6v3.3c0 .3-.2.8-.4.9-3.5 0-6.9.3-10.4.3h-1.8c-.9 0-.9-1.5-.9-2.2v-2.7c.4-1.1 1.4-3.4 6.9-15.7z" />
            <g>
              <path d="M7.3 61.7l1.4-3.8v-.2c0-.3-.3-.5-.6-.5H1.7c-1.5 0-1.5-.6-1.5-2.1v-.5c0-1.1 0-2.3 1.1-2.3h9.3c.2 0 1.5.1 1.9.1.4 0 1 .2 1 1v5c0 .9-.2 1.3-.6 2l-7 16.1c-.2.2-.2.2-.2.5 0 .1 0 .3.2.4l7.4-.2c.3.1.6.2.6.6v3.3c0 .3-.2.8-.4.9-3.5 0-6.9.3-10.4.3H1.2c-.9 0-.9-1.5-.9-2.2v-2.7c.5-1.2 1.6-3.4 7-15.7zM22.9 82.5c-6.2 0-6.9-9.7-6.9-18.9 0-4.1.2-8 .2-10.7 0-.5.1-1.3.7-1.3h3.7c.5 0 .8.4.8.9v.3c-.2 2.2-.2 4.3-.2 6.4 0 2.9.1 5.9.1 9.2.3 6.3.4 8.2 1.1 8.2h.2c2.5-1.2 2.3-9.2 2.9-10.8.1-.6.5-.7 1-.8 0 0 2.3-.1 3.4-.1.3 0 .5.1.5.6.1 1.3.8 11.5 3 11.5.4 0 .4-1.2.4-10.9 0-3.5-.3-6.9-.3-10.4v-2.3c.1-.5.5-.7 1-.7h2.8c.6 0 1.2.2 1.2 1l.2 20.6c0 3-.3 8.4-5.5 8.4H33c-1.8 0-3.3-1-4.8-5.9-1.8 5.1-3 5.8-3.9 5.8-.5-.2-1-.1-1.4-.1zM41.6 74.8c0-3.3.1-7.3.4-12.8.1-2.9.3-6.1.5-10 0-.3.3-.7.7-.7h3.1c.6 0 .8.5.8 1.1L46.4 81c0 .6-.1 1.1-.9 1.2l-3 .4c-.4 0-.7-.4-.7-.8-.1-2.3-.2-4.4-.2-7zM51.3 50.5h3.9c.8 0 4.7 0 5.5.1.3.1.5.2.6.5v3.4c0 .5-.1.9-.9.9h-5.2l-.4.4.3 7.9 4 .1c.6 0 .7 1 .7 2v.4l-.1 1.2c0 .4-.1 1-.7 1h-3.6s-.1.1-.2.1l-.1.1.2 7.4c.1.5.3.9 1 .9h5.1c.8 0 1 .6 1 1.3L62 81c0 .3-.4.7-.7.8l-10.1.4c-.5 0-1.1-.7-1.1-12.1v-9.3c0-3.2 0-6.4.1-9.7.1-.5.6-.6 1.1-.6zM64.6 51.5c0-.5.1-1.2.7-1.4 1.2-.1 2.3-.1 3.3-.1h4.6c3.7.3 4.6 3.5 4.9 6.7 0 5.5-.1 7.3-.2 7.8-.6 2.7-2.4 2.9-3 3.7v.2c1.2 2.6 3.6 8.1 3.6 12.4 0 .8-2.8 1-3.4 1.1-.8 0-.9-1.2-1-1.8 0-1.9-2.1-10.4-4.2-10.4-.3 0-.9 0-1 .4v10.8c0 .6 0 1-.7 1h-3.4c-.9 0-.9-1.2-.9-1.9l.7-28.5zm4.7 13.2c0 .6.6.8 1.2.8 1.3 0 2.2-.2 2.5-1.5.2-2 .2-3.3.2-5.2v-2.3c-.2-1-1-1.5-2-1.5-1.1 0-1.7.4-1.8 1.4l-.1 8.3zM87.4 61.7l1.4-3.8v-.2c0-.3-.3-.5-.6-.5h-6.4c-1.5 0-1.5-.6-1.5-2.1v-.5c0-1.1 0-2.3 1.1-2.3h9.3c.2 0 1.5.1 1.9.1.4 0 1 .2 1 1v5c0 .9-.2 1.3-.6 2l-7 16.1c-.2.2-.2.2-.2.5 0 .1 0 .3.2.4l7.4-.2c.3.1.6.2.6.6v3.3c0 .3-.2.8-.4.9-3.5 0-6.9.3-10.4.3h-1.8c-.9 0-.9-1.5-.9-2.2v-2.7c.4-1.2 1.4-3.4 6.9-15.7zM97 70.2v-5.7c0-9.5.7-13.7 8.3-13.7h.7c5.5.2 5.7 3.9 6 8.6 0 .2 0 .5.2 22.2 0 .5-.3 1.2-1 1.2h-3.1c-1 0-1.1-1.1-1.1-1.9v-.8c0-1.2 0-7.2-.1-8.4-.2-.4-.5-.5-1-.5h-3.5c-.6 0-.9.2-.9 1v9.7c0 .3-.6.7-.9.7h-2.9c-1 0-1-1.1-1-1.9.3-3.5.3-6.9.3-10.5zm6.1-3.7c.2 0 1.9 0 2.6.1h.4c.8 0 1.1-.6 1.1-1.4 0-1.4.1-2.6.1-3.7 0-4.4-.4-5.6-1.5-5.6-.3 0-.9-.1-1.6-.1-2 .1-2.3 2.4-2.3 4v5.1c.1.8.3 1.5 1.2 1.6zM115.2 51c.1-.5.4-.9 1.1-.9h3.1c.3 0 .7.3.8.6.1 3.4.1 8.9.1 10v2.2c0 .3 0 1.1.5 1.1 1.9 0 3.3-5.5 3.5-6.5.1-1 .3-4.4.3-6.7.1-.6.8-.8 1.4-.8h2.2c1.2 0 1 2.1 1.2 3.5v.4c0 6-4.1 11.8-4.7 13.3 0 0 0 .1.1.1 2.3 1.3 4.6 5.3 5.5 10.4.1.7.2 1 .2 1.6 0 1.4-.1 1-1.4 1.2l-2.5.5c-.5 0-.8-.6-.8-1-2-6.8-3.1-9.2-4.4-9.2-.3 0-.5.3-.6.5v.7c0 2.6.5 5.2.5 7.8v1c-.1.1-.4.3-.6.3h-3.9c-.7 0-.8-.6-.9-1.1l-.7-29zM132.4 70.2v-5.7c0-9.5.7-13.7 8.3-13.7h.7c5.5.2 5.7 3.9 6 8.6 0 .2 0 .5.2 22.2 0 .5-.3 1.2-1 1.2h-3.1c-1 0-1.1-1.1-1.1-1.9v-.8c0-1.2 0-7.2-.1-8.4-.2-.4-.5-.5-1-.5h-3.5c-.6 0-.9.2-.9 1v9.7c0 .3-.6.7-.9.7h-2.9c-1 0-1-1.1-1-1.9.3-3.5.3-6.9.3-10.5zm6-3.7c.2 0 1.9 0 2.6.1h.4c.8 0 1.1-.6 1.1-1.4 0-1.4.1-2.6.1-3.7 0-4.4-.4-5.6-1.5-5.6-.3 0-.9-.1-1.6-.1-2 .1-2.3 2.4-2.3 4v5.1c.1.8.3 1.5 1.2 1.6z" />
            </g>
            <g>
              <path d="M142.6 8.7c-.5-.1-1.1-.3-1-.8.1-.6.3-1.1.4-1.5 1.5-6.4 1.6-6.4 2-6.3.3.1 1.1.2 1.3.3.5.1.9.3 1.2.6l-1.9 7.8v.1c-.1.3-.6.2-1 .1l-1-.3z" />
            </g>
            <g>
              <ellipse
                transform="rotate(-81.42 29.117 11.448)"
                cx="29.1"
                cy="11.4"
                rx="8.3"
                ry="6.1"
              />
              <ellipse
                transform="rotate(-81.42 41.36 20.644)"
                cx="41.4"
                cy="20.6"
                rx="8"
                ry="5.5"
              />
              <path d="M18.8 21.5c2.9-1.4 3.4-6 1.2-10.2-2.2-4.2-6.3-6.5-9.2-5.1-2.9 1.4-3.4 5.9-1.2 10.2 2.2 4.2 6.3 6.5 9.2 5.1zM11.2 23.7c-2.1-4-6-6.2-8.8-4.8-2.7 1.3-3.2 5.7-1.1 9.7 2.1 4 6 6.2 8.8 4.8 2.7-1.3 3.2-5.7 1.1-9.7zM23.7 21.6l-.6.1s-12 4-9.6 18.2c1.3 8.3 7.6 3.6 7.6 3.6s2.4-3.4 4.9-3.8l.6-.2c2.4-.4 5.8 2.1 5.8 2.1s7.5 2.5 6.1-5.8c-2.2-14.1-14.8-14.2-14.8-14.2z" />
            </g>
          </svg>
        );
      },
      home: () => {
        return (
          <svg
            x="0px"
            y="0px"
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            viewBox="0 0 495.4 495.4">
            <g>
              <g>
                <g>
                  <path
                    d="M487.1,225.5L412,150.4V63.7c0-15.7-12.7-28.4-28.4-28.4c-15.7,0-28.4,12.7-28.4,28.4v29.9l-55.9-55.9
									c-27.6-27.6-75.7-27.6-103.3,0L8.3,225.5c-11.1,11.1-11.1,29.1,0,40.2c11.1,11.1,29.1,11.1,40.2,0L236.2,77.9
									c6.1-6.1,16.9-6.1,23,0l187.7,187.7c5.6,5.6,12.8,8.3,20.1,8.3c7.3,0,14.5-2.8,20.1-8.3C498.2,254.6,498.2,236.6,487.1,225.5z"
                  />
                  <path
                    d="M257.6,131.8c-5.5-5.5-14.3-5.5-19.7,0L72.7,296.9c-2.6,2.6-4.1,6.2-4.1,9.9v120.4c0,28.3,22.9,51.2,51.2,51.2h81.8
									V351.7h92.3v126.6h81.8c28.3,0,51.2-22.9,51.2-51.2V306.8c0-3.7-1.5-7.3-4.1-9.9L257.6,131.8z"
                  />
                </g>
              </g>
            </g>
          </svg>
        );
      },
      contact: () => {
        return (
          <svg
            x="0px"
            y="0px"
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            viewBox="0 0 512 512">
            <path
              d="M467.2,211.9L267.7,12.4c-3.1-3.1-7.3-4.8-11.7-4.8c-4.4,0-8.6,1.7-11.6,4.8L44.8,211.9c-3.1,3.1-4.8,7.3-4.8,11.6V488
						c0,9.1,7.4,16.5,16.5,16.5h399.1c9.1,0,16.4-7.4,16.4-16.5V223.5C472,219.3,470.4,215.1,467.2,211.9z M256,47.3l176.2,176.3
						L383.8,272v-56.3c0-10.5-8.5-19-19-19H147.2c-10.5,0-19,8.5-19,19V272l-48.4-48.4L256,47.3z M72.9,471.5V263.3l97.5,97.5l-67.7,63.4
						c-5,4.7-5.3,12.5-0.6,17.5c2.4,2.6,5.7,3.9,9,3.9c3,0,6-1.1,8.4-3.3l68.3-63.9l56.5,56.5c3.1,3.1,7.3,4.8,11.6,4.8
						c4.4,0,8.5-1.7,11.7-4.8l56.4-56.5l68.3,63.9c2.4,2.2,5.4,3.3,8.4,3.3c3.3,0,6.6-1.3,9-3.9c4.7-5,4.4-12.8-0.6-17.5l-67.7-63.4
						l97.5-97.5v208.2L72.9,471.5L72.9,471.5z"
            />
          </svg>
        );
      },
      advert: () => {
        return (
          <svg
            x="0px"
            y="0px"
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            viewBox="0 0 491.2 491.2">
            <g>
              <g>
                <g>
                  <path
                    d="M433.8,64.5H332.7c-3.6,20.3-15.4,37.6-31.8,48.8h132.9c4.7,0,8.5,3.8,8.5,8.5v310.5c0,4.7-3.8,8.5-8.5,8.5H57.4
									c-4.7,0-8.5-3.8-8.5-8.5V121.8c0-4.7,3.8-8.5,8.5-8.5h102.7c1.4-4.1,3.1-8,5.5-11.7l20.1-30.4c-0.6-2.2-1-4.5-1.4-6.8H57.4
									C25.7,64.5,0,90.2,0,121.8v310.5c0,31.6,25.7,57.4,57.4,57.4h376.5c31.6,0,57.4-25.7,57.4-57.4V121.8
									C491.2,90.2,465.5,64.5,433.8,64.5z"
                  />
                  <path
                    d="M192.7,176.7c-7.1-5.5-17.3-4.1-22.8,3l-48.1,62.9l-22.1-15.3c-7.4-5.1-17.5-3.3-22.7,4.1c-5.1,7.4-3.3,17.5,4.1,22.6
									l34.9,24.1c2.8,2,6.1,2.9,9.3,2.9c4.9,0,9.7-2.2,12.9-6.4l57.6-75.2C201.2,192.3,199.8,182.1,192.7,176.7z"
                  />
                  <path
                    d="M385.5,223.8H217.6c-9,0-16.3,7.3-16.3,16.3c0,9,7.3,16.3,16.3,16.3h167.9c9,0,16.3-7.3,16.3-16.3
									C401.7,231.1,394.5,223.8,385.5,223.8z"
                  />
                  <path
                    d="M169.9,298.5l-48.1,62.9l-22.1-15.3c-7.4-5.1-17.5-3.3-22.7,4.1c-5.1,7.4-3.3,17.5,4.1,22.7L116,397
									c2.8,2,6.1,2.9,9.3,2.9c4.9,0,9.7-2.2,12.9-6.4l57.6-75.2c5.5-7.1,4.1-17.4-3-22.8C185.6,290,175.4,291.4,169.9,298.5z"
                  />
                  <path
                    d="M385.5,342.6H217.6c-9,0-16.3,7.3-16.3,16.3c0,9,7.3,16.3,16.3,16.3h167.9c9,0,16.3-7.3,16.3-16.3
									C401.7,349.9,394.5,342.6,385.5,342.6z"
                  />
                  <path
                    d="M197.8,143.4c2.9,1.9,6.2,2.9,9.5,2.9c5.6,0,11.1-2.7,14.4-7.7l16.6-25.2l10.2-15.4c3.2,0.7,6.6,1,10,1
									c26.9,0,48.7-21.8,48.7-48.7S285.3,1.6,258.5,1.6c-26.9,0-48.7,21.8-48.7,48.7c0,10.9,3.7,20.9,9.7,29l-26.6,40.3
									C187.6,127.5,189.8,138.2,197.8,143.4z"
                  />
                </g>
              </g>
            </g>
          </svg>
        );
      },
      mapMarker: () => {
        return (
          <svg
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            className={this.props.class}
            viewBox="0 0 512 512"
            x="0px"
            y="0px">
            <path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.94 313.167 173.004 321.035 6.636 7.392 18.222 7.38 24.846 0 7.065-7.867 173.004-194.146 173.004-321.034C441.425 83.182 358.244 0 256 0zm0 278.72c-51.442 0-93.292-41.852-93.292-93.294S204.558 92.134 256 92.134s93.29 41.85 93.29 93.293S307.44 278.72 256 278.72z" />
          </svg>
        );
      },
      date: () => {
        return (
          <svg
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            className={this.props.class}
            viewBox="0 0 361.77 361.77">
            <g>
              <g>
                <g>
                  <path d="M323.885,43.77h-27.5V25c0-13.807-11.193-25-25-25h-1c-13.807,0-25,11.193-25,25v18.77h-129V25c0-13.807-11.193-25-25-25h-1c-13.807,0-25,11.193-25,25v18.77h-27.5c-13.807,0-25,11.193-25,25v268c0,13.809,11.193,25,25,25h286c13.807,0,25-11.191,25-25v-268C348.885,54.963,337.691,43.77,323.885,43.77z M306.885,322.27h-252v-203h252V322.27z" />
                  <path d="M89.136,211.134h43.498c2.209,0,4-1.791,4-4v-43.498c0-2.209-1.791-4-4-4H89.136c-2.209,0-4,1.791-4,4v43.498C85.136,209.343,86.927,211.134,89.136,211.134z" />
                  <path d="M159.136,211.134h43.498c2.209,0,4-1.791,4-4v-43.498c0-2.209-1.791-4-4-4h-43.498c-2.209,0-4,1.791-4,4v43.498C155.136,209.343,156.927,211.134,159.136,211.134z" />
                  <path d="M229.136,211.134h43.498c2.209,0,4-1.791,4-4v-43.498c0-2.209-1.791-4-4-4h-43.498c-2.209,0-4,1.791-4,4v43.498C225.136,209.343,226.927,211.134,229.136,211.134z" />
                  <path d="M89.136,281.134h43.498c2.209,0,4-1.791,4-4v-43.498c0-2.209-1.791-4-4-4H89.136c-2.209,0-4,1.791-4,4v43.498C85.136,279.343,86.927,281.134,89.136,281.134z" />
                  <path d="M159.136,281.134h43.498c2.209,0,4-1.791,4-4v-43.498c0-2.209-1.791-4-4-4h-43.498c-2.209,0-4,1.791-4,4v43.498C155.136,279.343,156.927,281.134,159.136,281.134z" />
                  <path d="M229.136,281.134h43.498c2.209,0,4-1.791,4-4v-43.498c0-2.209-1.791-4-4-4h-43.498c-2.209,0-4,1.791-4,4v43.498C225.136,279.343,226.927,281.134,229.136,281.134z" />
                </g>
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        );
      },
      upload: () => {
        return (
          <svg
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            className={this.props.class}
            viewBox="0 0 472 472">
            <g>
              <path d="M457.7 230.15c-7.5 0-13.5 6-13.5 13.5v122.8c0 33.4-27.2 60.5-60.5 60.5H87.5c-33.4 0-60.5-27.2-60.5-60.5v-124.8c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v124.8c0 48.3 39.3 87.5 87.5 87.5h296.2c48.3 0 87.5-39.3 87.5-87.5v-122.8c0-7.4-6-13.5-13.5-13.5z" />
              <path d="M159.3 126.15l62.8-62.8v273.9c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V63.35l62.8 62.8c2.6 2.6 6.1 4 9.5 4 3.5 0 6.9-1.3 9.5-4 5.3-5.3 5.3-13.8 0-19.1l-85.8-85.8c-2.5-2.5-6-4-9.5-4-3.6 0-7 1.4-9.5 4l-85.8 85.8c-5.3 5.3-5.3 13.8 0 19.1 5.2 5.2 13.8 5.2 19 0z" />
            </g>
          </svg>
        );
      },
      email: () => {
        return (
          <svg
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            className={this.props.class}
            viewBox="0 0 483.3 483.3">
            <path d="M424.3 57.75H59.1c-32.6 0-59.1 26.5-59.1 59.1v249.6c0 32.6 26.5 59.1 59.1 59.1h365.1c32.6 0 59.1-26.5 59.1-59.1v-249.5c.1-32.6-26.4-59.2-59-59.2zm32.1 308.7c0 17.7-14.4 32.1-32.1 32.1H59.1c-17.7 0-32.1-14.4-32.1-32.1v-249.5c0-17.7 14.4-32.1 32.1-32.1h365.1c17.7 0 32.1 14.4 32.1 32.1v249.5h.1z" />
            <path d="M304.8 238.55l118.2-106c5.5-5 6-13.5 1-19.1-5-5.5-13.5-6-19.1-1l-163 146.3-31.8-28.4c-.1-.1-.2-.2-.2-.3-.7-.7-1.4-1.3-2.2-1.9L78.3 112.35c-5.6-5-14.1-4.5-19.1 1.1-5 5.6-4.5 14.1 1.1 19.1l119.6 106.9-119.1 111.5c-5.4 5.1-5.7 13.6-.6 19.1 2.7 2.8 6.3 4.3 9.9 4.3 3.3 0 6.6-1.2 9.2-3.6l120.9-113.1 32.8 29.3c2.6 2.3 5.8 3.4 9 3.4s6.5-1.2 9-3.5l33.7-30.2 120.2 114.2c2.6 2.5 6 3.7 9.3 3.7 3.6 0 7.1-1.4 9.8-4.2 5.1-5.4 4.9-14-.5-19.1l-118.7-112.7z" />
          </svg>
        );
      },
      phone: () => {
        return (
          <svg
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            className={this.props.class}
            viewBox="0 0 578.106 578.106">
            <path
              fill="#010002"
              d="M577.83 456.128c1.225 9.385-1.635 17.545-8.568 24.48l-81.396 80.781c-3.672 4.08-8.465 7.551-14.381 10.404-5.916 2.857-11.729 4.693-17.439 5.508-.408 0-1.635.105-3.676.309-2.037.203-4.689.307-7.953.307-7.754 0-20.301-1.326-37.641-3.979s-38.555-9.182-63.645-19.584c-25.096-10.404-53.553-26.012-85.376-46.818-31.823-20.805-65.688-49.367-101.592-85.68-28.56-28.152-52.224-55.08-70.992-80.783-18.768-25.705-33.864-49.471-45.288-71.299-11.425-21.828-19.993-41.616-25.705-59.364S4.59 177.362 2.55 164.51-.306 141.56.102 134.216c.408-7.344.612-11.424.612-12.24.816-5.712 2.652-11.526 5.508-17.442s6.324-10.71 10.404-14.382L98.022 8.756c5.712-5.712 12.24-8.568 19.584-8.568 5.304 0 9.996 1.53 14.076 4.59s7.548 6.834 10.404 11.322l65.484 124.236c3.672 6.528 4.692 13.668 3.06 21.42-1.632 7.752-5.1 14.28-10.404 19.584l-29.988 29.988c-.816.816-1.53 2.142-2.142 3.978s-.918 3.366-.918 4.59c1.632 8.568 5.304 18.36 11.016 29.376 4.896 9.792 12.444 21.726 22.644 35.802s24.684 30.293 43.452 48.653c18.36 18.77 34.68 33.354 48.96 43.76 14.277 10.4 26.215 18.053 35.803 22.949 9.588 4.896 16.932 7.854 22.031 8.871l7.648 1.531c.816 0 2.145-.307 3.979-.918 1.836-.613 3.162-1.326 3.979-2.143l34.883-35.496c7.348-6.527 15.912-9.791 25.705-9.791 6.938 0 12.443 1.223 16.523 3.672h.611l118.115 69.768c8.571 5.308 13.67 12.038 15.303 20.198z"
            />
          </svg>
        );
      }
    };

    return svg[this.props.icon]();
  }
}

Icon.defaultProps = {
  class: "",
  icon: "home",
  width: "20px",
  height: "20px",
  fill: "#232425"
};

export default Icon;
