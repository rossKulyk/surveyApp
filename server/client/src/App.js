import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./store/actions";
import Header from "./components/Header";
import Landing from "./components/Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>New Survey</h2>;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUser());
  }, [dispatch]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     dispatch(actions.fetchUser());
  //   };
  //   getUsers();
  // }, [dispatch]);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact={true} component={Landing} />
          <Route path="/surveys" exact={true} component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
