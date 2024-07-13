import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <h1>Page not found</h1>
      <button>
        <Link to="/">Go to the main page</Link>
      </button>
    </>
  );
}

export default NotFoundPage;
