import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  componentDidMount() {
    alert("Mounted with favorite color: " + this.state.favoriteColor);
    this.timeout = setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      alert("Color changed to: " + this.state.favoriteColor);
      console.log("after update");
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      console.log("in getSnapshotBeforeUpdate");
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

export default Color;
