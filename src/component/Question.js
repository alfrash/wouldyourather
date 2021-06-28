import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import useStyles from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions"; //qid, answer

function Question(props) {
  const classes = useStyles();
  const { match } = props;
  const questionId = match.params.question;
  let location = useLocation();

  const id = location.id;

  const data = location.data;
  
  const [type, setType] = useState(location.type);
  const [value, setValue] = useState("optionOne");
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  //let update = useSelector((state) => state.questions[questionId]);

  const handleVote = () => {
    setType("answered");
    console.log("value = ", value);
    dispatch(handleAnswerQuestion(questionId, value));
    

  };
  const total = data["optionOne"].votes.length + data["optionTwo"].votes.length;
  const percentage = (votes, total) => {
    return Math.round((votes / total) * 100);
  };

  return (
    <div className={classes.rootQuestion}>
      <Paper className={classes.paperQuestion}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h5">Would you rather ?</Typography>
            <ButtonBase className={classes.imageQuestion}>
              <img
                className={classes.imgQuestion}
                alt="complex"
                src={`/${users[data.author].avatarURL}`}
              />
            </ButtonBase>
          </Grid>
          {type === "answered" ? (
            [data.optionOne, data.optionTwo].map((option) => (
              <Grid
                item
                xs={12}
                sm
                container
                className={
                  option["votes"].includes(id)
                    ? classes.chosen
                    : classes.notChosen
                }
                key={option.text}
              >
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      {option.text}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {percentage(option.votes.length, total)} % Completed
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${option.votes.length} Out Of ${total}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))
          ) : (
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Result
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup name="Results" value={value}>
                      <FormControlLabel
                        value="optionOne"
                        control={<Radio />}
                        label={data.optionOne.text}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <FormControlLabel
                        value="optionTwo"
                        control={<Radio />}
                        label={data.optionTwo.text}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"

                    onClick={() => handleVote()}
                  >
                    Vote
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Paper>
    </div>
  );
}
export default Question;
