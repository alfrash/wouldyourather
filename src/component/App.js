import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import NavBar from "./NavBar";
import LogIn from "./LogIn";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import AddNewQuestion from "./AddNewQuestion";
import LeaderBoard from "./LeaderBoard";
import Question from "./Question";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const state = useSelector((state) => state.users);
  const id = useSelector((state) => state.authedUser);

  // const id = Object.values(state).map((data) => data.id)

  console.log("users = ", Object.keys(state));

  return (
    <React.Fragment>
      <LoadingBar />
      <NavBar />

      {id ? (
        <Switch>
          <Route
            path="/Home"
            exact
            render={(props) => <Home {...props} id={id} />}
          />
          <Route path="/AddNewQuestion" exact component={AddNewQuestion} />
          <Route path="/LeaderBoard" exact component={LeaderBoard} />
          <Route
            path="/questions/:question"
            exact
            render={(props) => <Question {...props} />}
          />
          <Route path="/" render={() => <div> 404 Page not found</div>} />
        </Switch>
      ) : (
        <LogIn />
      )}
    </React.Fragment>
  );
}

export default App;
