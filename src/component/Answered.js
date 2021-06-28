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

function Answered(props) {
  const { answer, id } = props;
  const classes = useStyles();
  const avatar = useSelector((state) => state.users);
  console.log(answer);

  return (
    <>
      {answer.map((data) => (
        <Card className={classes.root2} key={data.id}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="h5">{data.author}</Typography>
              <Typography variant="subtitle1">your answer is</Typography>
              <Typography variant="subtitle2">
                {data.optionOne["votes"].includes(id)
                  ? `Option One ${data.optionOne.text}`
                  : `Option Two ${data.optionTwo.text}`}
              </Typography>
              <NavLink
                to={{
                  pathname: `/questions/${data.id}`,
                  type: "answered",
                  id: id,
                  data: data,
                }}
                exact
              >
                <Button variant="contained" color="secondary">
                  View Answer
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

export default Answered;
