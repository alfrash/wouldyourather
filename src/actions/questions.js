import { saveQuestionAnswer, saveQuestion } from "../repo/api";
import { assignAnswer } from "./assignAnswer"; //authedUser, qid, answer
import { assignQuestion } from "./assignQuestion" //authedUser, qid

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion(authedUser, qid, answer) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(answerQuestion(authedUser, qid, answer));
    dispatch(assignAnswer({ authedUser, qid, answer }));
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return async (dispatch, getState) => {
    const { authedUser } = getState();
    const question_1 = await saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    });
    dispatch(addQuestion(question_1));
    dispatch(assignQuestion(authedUser, question_1.id));
  };
}

