import React from "react";
class SummaryInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    const { nutsFree, lactoseFree, vegan } = this.props;
    return (
      <>
        <div id="summary">
          <h1>Entered information:</h1>
          <p>Your name: {this.props.firstName}</p>
          <p>Your last name: {this.props.lastName}</p>
          <p>Your age: {this.props.age}</p>
          <p>Your gender: {this.props.gender}</p>
          <p>
            Your destination:
            {this.props.destination !== "default"
              ? this.props.destination
              : "Not selected"}
          </p>
          <p>Your dietary restrictions:</p>
          <span>**Nuts free: {nutsFree ? "Yes" : "No"}</span>
          <span>**Lactose free: {lactoseFree ? "Yes" : "No"}</span>
          <span>**Vegan meal: {vegan ? "Yes" : "No"}</span>
        </div>
      </>
    );
  }
}

export default SummaryInfo;
