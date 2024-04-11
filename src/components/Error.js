import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorText = useRouteError();
  //   console.log(errorText);

  return (
    <div>
      <h2>Oops!!</h2>
      <h3>Something is really wrong here</h3>
      <h4>{errorText.status}</h4>
      <h4>{errorText.statusText}</h4>
    </div>
  );
};

export default Error;
