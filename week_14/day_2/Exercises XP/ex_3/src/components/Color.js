import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("Child component will be unmounted");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red", show: true };
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
    return null;
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

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color</button>
        {this.state.show && <Child />}
        <button onClick={this.deleteChild}>Delete</button>
      </div>
    );
  }
}

export default Color;
