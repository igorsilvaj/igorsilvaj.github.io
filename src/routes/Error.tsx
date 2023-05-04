import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      console.error(error);
      return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.data?.message}</i>
          </p>
          <Link to="/">
            <p>Click Here to return Home</p>
          </Link>
        </div>
      );
    }
  }
  console.error(error);
  return <div>"Unknown error"</div>;
}
