import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import useStyles from "./Styles";
import { setAuthedUser } from "../actions/authedUser";

function LogIn() {
  const classes = useStyles();

  const state = useSelector((state) => state.users);

  // let id = Object.values(state).map((data) => data.avatarURL);
  const dispatch = useDispatch();

  const handleSigning = (id) => {
    dispatch(setAuthedUser(id));
  };

  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Choose you're user name and SignIn
        </Typography>
        <List component="nav" className={classes.list}>
          {Object.values(state).map((value) => {
            const labelId = `${value.id}`;
            return (
              <ListItem
                key={value.id}
                onClick={() => handleSigning(value.id)}
                button
              >
                <ListItemAvatar>
                  <Avatar src={"/" + `${value.avatarURL}`} />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${value.id}`} />
              </ListItem>
            );
          })}
        </List>
      </Container>
    </div>
  );
}

export default LogIn;
