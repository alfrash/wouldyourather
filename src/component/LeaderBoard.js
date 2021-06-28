import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import useStyles from "./Styles";

function LeaderBoard() {
  const users = useSelector((state) => state.users);
  const classes = useStyles();
  console.log("leader = ", users);

  const sortedValues = Object.values(users)
    .map((value) =>
      Object.assign({}, value, {
        score: Object.keys(value.answers).length + value.questions.length,
      })
    )
    .sort((a, b) => b.score - a.score);

  return (
    <>
      {sortedValues.map((value) => (
        <Card className={classes.root2} key={value.id}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="subtitle1">
                Number of questions: {Object.keys(value.answers).length}
              </Typography>
              <Typography variant="subtitle1">
                Number of answer: {value.questions.length}{" "}
              </Typography>
              <Typography variant="subtitle1">
                score:{" "}
                {Object.keys(value.answers).length + value.questions.length}
              </Typography>
            </CardContent>
          </div>
          <CardMedia className={classes.cover} image={`/${value.avatarURL}`} />
        </Card>
      ))}
    </>
  );
}

export default LeaderBoard;
