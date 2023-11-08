import React from "react";
import UserForm from "./Components/FormComponent";
import SummaryInfo from "./Components/SummaryUser";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null,
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    };
  }

  changeGender = (newGender) => {
    this.setState({ gender: newGender });
  };

  changeDestination = (newDestination) => {
    this.setState({ destination: newDestination });
  };

  changeDietaryRestrictions = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <UserForm
          changeFirstName={(newName) => {
            this.setState({ firstName: newName });
          }}
          changeLastName={(newLastName) => {
            this.setState({ lastName: newLastName });
          }}
          changeAge={(newAge) => {
            this.setState({ age: newAge });
          }}
          changeGender={(newGender) => {
            this.setState({ gender: newGender });
          }}
          changeDestination={this.changeDestination}
          changeDietaryRestrictions={this.changeDietaryRestrictions}
        />
        <SummaryInfo
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          age={this.state.age}
          gender={this.state.gender}
          destination={this.state.destination}
          nutsFree={this.state.nutsFree}
          lactoseFree={this.state.lactoseFree}
          vegan={this.state.vegan}
        />
      </>
    );
  }
}

export default App;
