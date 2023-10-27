import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="./c1cklkyp6ms02tougufx.webp" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="./e8fnw35p6zgusq218foj.webp" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="./jrfyzvgzvhs1iylduuhj.jpg" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="./liw377az16sxmp9a6ylg.webp" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    );
  }
}

export default App;
