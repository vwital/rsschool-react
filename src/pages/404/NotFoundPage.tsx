import { NavLink } from "react-router-dom";
import "./style.css";

function NotFoundPage() {
  return (
    <div className="page-404">
      <h1>Page not found</h1>
      <button>
        <NavLink to="/">Go to the main page</NavLink>
      </button>
    </div>
  );
}

export default NotFoundPage;
