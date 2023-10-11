import { useDispatch, useSelector } from "react-redux";

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
        <li>
          <a>Logout</a>
        </li>
      );
    }
  };
  console.log("HEADER: authState:", authState);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="left brand-logo">
          SurveyApp
        </a>
        <ul id="nav-mobile" className="right">
          <li>{renderContent()}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
