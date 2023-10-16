import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const authState = useSelector((state) => state.auth);

  const renderContent = () => {
    if (authState === null) {
      return;
    } else if (authState === false) {
      return (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      );
    } else {
      return (
        // to be refactored with ajax request later
        <li>
          <a href="/api/logout">Logout</a>
        </li>
      );
    }
  };
  console.log("HEADER: authState:", authState);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={authState ? "/surveys" : "/"} className="left brand-logo">
          SurveyApp
        </Link>
        <ul id="nav-mobile" className="right">
          <li>{renderContent()}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
