import { useState } from "react";

const UserDetails = (props) => {
  //   or pass just  {name} - destructuring

  const [count, setCount] = useState(0);
  //   const [count2] = useState(2);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="user-card">
      <h2>Created By: {props.name}</h2>
      {/* just add {name} */}
      <h3>Location: Bangalore, India</h3>
      <h3>Contact: mukherjeeritwisha@gmail.com</h3>
      <h6>
        {" "}
        <button onClick={increment}>Click me {count} times</button>
        {/* {count2} */}
      </h6>
    </div>
  );
};

export default UserDetails;
