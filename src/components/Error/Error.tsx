import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError() as { data:string, status:number, statusText:string };
  const { data, status, statusText } = error;
  
  return (
    <div>
      <h1>{`${status} ERROR!!`}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ data || statusText }</i>
      </p>
    </div>
  );
}

export default Error;