import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import useStyles from "./Styles";
import { handleAddQuestion } from "../actions/questions";
import { useDispatch } from "react-redux";

function AddNewQuestion() {
  const classes = useStyles();
  const [questionOne, setQuestionOne] = useState("");
  const [questionTwo, setQuestionTwo] = useState("");
  const dispatch = useDispatch();

  const handleAddNewQuestions = (e) => {
    e.preventDefault();
    if (questionOne && questionTwo) {
      dispatch(handleAddQuestion(questionOne, questionTwo));
      console.log(questionOne + " " + questionTwo);
    } else {
      alert("please add questionOne and questionTwo");
    }
  };
  return (
    <>
      <form className={classes.form} noValidate autoComplete="off">
        <Typography variant="subtitle1">Would you rather ?</Typography>
        <TextField
          className={classes.field}
          id="outlined-basic"
          fullWidth
          required
          label="question one"
          variant="outlined"
          onChange={(e) => setQuestionOne(e.target.value)}
        />
        <Typography variant="subtitle1">OR</Typography>
        <TextField
          className={classes.field}
          id="outlined-basic"
          fullWidth
          required
          label="question two"
          variant="outlined"
          onChange={(e) => setQuestionTwo(e.target.value)}
        />
        <Typography variant="subtitle1">submit you're question</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => handleAddNewQuestions(e)}
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default AddNewQuestion;
