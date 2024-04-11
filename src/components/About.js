// import UserDetails from "./UserDetails";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor 1");
  }
  componentDidMount() {
    // console.log("parent did mount 6");
  }

  render() {
    console.log("Parent render2");
    return (
      <div className="about">
        <h2>About Me</h2>
        {/* <UserDetails name={"Ritwisha Mukherjee"} /> */}
        <UserClass
          name={"Frontend Developer @ Accenture"}
          skills={"React.js, Javascript, Tailwind Css"}
        />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div className="about">
//       <h2>About Me</h2>
//       <UserDetails name={"Ritwisha Mukherjee"} />
//       <UserClass
//         name={"Frontend Developer @ Accenture"}
//         skills={"React.js, Javascript, Tailwind Css"}
//       />
//     </div>
//   );
// };

export default About;
