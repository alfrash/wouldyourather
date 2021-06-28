import React from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Toolbar,
  Button,
  //Avatar,
} from "@material-ui/core";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import { Route } from "react-router-dom";
import useStyles from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function NavBar() {
  const classes = useStyles();
  const [selectedTab, setSelectedTap] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setSelectedTap(newValue);
  };
  const id = useSelector((state) => state.authedUser);

  //const avatar = useSelector((state) => state.users[id].avatarURL)

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setAuthedUser(null));
    console.log("SIGNEDOUT");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <LocalFloristIcon className={classes.icon} />
          <Typography variant="subtitle2" className={classes.title}>
            Would you rather ?
          </Typography>
          <Route
            render={({ history }) => (
              <Tabs value={selectedTab} onChange={handleChange}>
                <Tab
                  label="Home"
                  onClick={() => {
                    history.push("/");
                  }}
                />
                <Tab
                  label="New Question"
                  onClick={() => {
                    history.push("/AddNewQuestion");
                  }}
                />
                <Tab
                  label="Leader Board"
                  onClick={() => {
                    history.push("/LeaderBoard");
                  }}
                />
              </Tabs>
            )}
          />
          {id ? (
            <>
              <Typography variant="h6" className={classes.signOut}>
                {id}
              </Typography>
              {/* <Avatar src={"/" + `${"1.png"}`} /> */}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleSignOut()}
              >
                LogOut
              </Button>
            </>
          ) : (
            <Typography variant="subtitle2" className={classes.signOut}>
              Please SignIn
            </Typography>
          )}
        </Toolbar>
      </AppBar>

      {/* {selectedTab === 0 && <NavLink to="/Home">Home</NavLink>}
      {selectedTab === 1 && (
        <NavLink to="/AddNewQuestion">AddNewQuestion</NavLink>
      )}
      {selectedTab === 2 && <NavLink to="/LeaderBoard">LeaderBoard</NavLink>} */}
    </>
  );
}

export default NavBar;
