import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will UnMount");
  }

  render() {
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>Name: Anandhi</h2>
        <h3>Location: Erode</h3>
        <h4>Contact: anandhi@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
