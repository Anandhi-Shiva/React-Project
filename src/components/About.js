import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <h2>Learning React from Namaste React</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
