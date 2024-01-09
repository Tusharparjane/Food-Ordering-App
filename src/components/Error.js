import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps!!</h1>
      <h1>Something went wrong:{err.status}</h1>
      <h1>{err.statusText}</h1>
    </div>
  );
};
export default Error;
