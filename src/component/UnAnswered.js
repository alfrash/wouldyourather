import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./Styles";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function UnAnswered(props) {
  const { question, id } = props;
  const classes = useStyles();

  const avatar = useSelector((state) => state.users);
  console.log(question);

  //question.map(data => ({auther: data.auther});

  return (
    <>
      {question.map((data) => (
        <Card className={classes.root2} key={data.id}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="subtitle1">Would you rather ?</Typography>
              <Typography variant="h5">{data.author} asks:-</Typography>
              <Typography variant="subtitle1">{data.optionOne.text}</Typography>
              {/* <Typography variant="subtitle1" color="textSecondary">
                OR
              </Typography> */}
              {/* <Typography variant="subtitle1">{data.optionTwo.text}</Typography> */}
              <NavLink
                to={{
                  pathname: `/questions/${data.id}`,
                  type: "unanswered",
                  id: id,

                  data: data,
                }}
                exact
              >
                <Button variant="contained" color="secondary">
                  Vote
                </Button>
              </NavLink>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image={`/${avatar[data.author].avatarURL}`}
          />
        </Card>
      ))}
    </>
  );
}

export default UnAnswered;
