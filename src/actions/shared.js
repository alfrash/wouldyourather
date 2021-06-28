import { getInitialData } from "../repo/api";
import { setAuthedUser } from "./authedUser"; //id
import { receiveUsers } from "./receiveUsers"; //users
import { receiveQuestions } from "./questions"; //questions
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = null;

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  };
}
