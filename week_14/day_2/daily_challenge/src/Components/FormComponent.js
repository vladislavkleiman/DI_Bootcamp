import React from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: "default",
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    };
  }

  handleSelectChange = (event) => {
    this.setState({ destination: event.target.value });
    this.props.changeDestination(event.target.value);
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
    this.props.changeDietaryRestrictions(name, checked); // Add this line
  };

  handleGenderChange = (event) => {
    this.props.changeGender(event.target.value);
  };

  render() {
    return (
      <>
        <h1 id="header">Sample form</h1>
        <form id="formUser" method="post" action="/">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={(event) => this.props.changeFirstName(event.target.value)}
          />

          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={(event) => this.props.changeLastName(event.target.value)}
          />

          <input
            type="number"
            name="age"
            id="age"
            placeholder="Age"
            onChange={(event) => this.props.changeAge(event.target.value)}
          />

          <label>
            Male:
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={this.handleGenderChange} // Corrected this line
            />
          </label>
          <label>
            Female:
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={this.handleGenderChange} // Corrected this line
            />
          </label>

          <label htmlFor="destination">Select your destination:</label>
          <select
            name="destination"
            id="destination"
            value={this.state.destination}
            onChange={this.handleSelectChange}
          >
            <option value="default">-- Please Choose a destination --</option>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
          </select>

          <div>
            <label>
              <input
                type="checkbox"
                name="nutsFree"
                checked={this.state.nutsFree}
                onChange={this.handleCheckboxChange}
              />
              Nuts free
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="lactoseFree"
                checked={this.state.lactoseFree}
                onChange={this.handleCheckboxChange}
              />
              Lactose free
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                name="vegan"
                checked={this.state.vegan}
                onChange={this.handleCheckboxChange}
              />
              Vegan
            </label>
          </div>

          <button id="btnSubmit" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default UserForm;
