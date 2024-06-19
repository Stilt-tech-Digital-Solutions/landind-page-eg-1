import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import NotFoundSvg from "./404.svg";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        {error.status === 404 && <NotFoundSvg />}
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-casagray-100 mt-12">
            Page Not Found
          </p>
          <p className="md:text-lg lg:text-xl text-casagray-600 dark:text-casagray-200 mt-8">
            Sorry, the page you are looking for could not be found.
          </p>
          <Link
            to="/"
            className="btn btn-primary mt-12"
            title="Return Home">
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-casagray-100 mt-12">
            Oops! Unexpected Error
          </p>
          <p className="md:text-lg lg:text-xl text-casagray-600 dark:text-casagray-200 mt-8">
            {error.message}
          </p>
          <Link
            to="/"
            className="btn btn-primary mt-12"
            title="Return Home">
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-casagray-100 mt-12">
            Oops! Unexpected Error
          </p>
          <p className="md:text-lg lg:text-xl text-casagray-600 dark:text-casagray-200 mt-8">
            Sorry, An error Occured please try again later.
          </p>
          <Link
            to="/"
            className="btn btn-primary mt-12"
            title="Return Home">
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
