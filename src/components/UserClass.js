import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child constructor 3");
    // console.log(props);
    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };

    this.state = {
      userInfo: {
        name: "Default",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    // console.log("did mount 5");
    const data = await fetch("https://api.github.com/users/RitwishaMukherjee");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("unmounter");
  }

  render() {
    // const { skills } = this.props;

    // const {count, count2} = this.state;
    const { name, location, bio, company, url } = this.state.userInfo;
    // debugger;
    console.log("child render 4");
    return (
      <div className="user-card">
        <h3>Name: {name} </h3>
        <h3>Company: {company}</h3>
        <h3>Role: {bio}</h3>
        <h3>Location: {location}</h3>
        <h3>Profile Link: {url}</h3>
        {/* <h6>Count: {this.state.count}</h6> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              //   count2: this.state.count2 + 1,
            });
          }}
        >
          {" "}
          Increment
        </button> */}
        {/* <h6>{this.state.count2}</h6> */}
        {/* count: {count} */}
      </div>
    );
  }
}

export default UserClass;
