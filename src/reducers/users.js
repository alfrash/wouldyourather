import { RECEIVE_USERS } from "../actions/receiveUsers";
import { ASSIGN_ANSWER } from "../actions/assignAnswer";
import { ASSIGN_QUESTION } from "../actions/assignQuestion";

const users = (state = {}, action) => {
  const { authedUser, qid, answer } = action;
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...state, ...action.users };
    case ASSIGN_ANSWER:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: Object.assign(state[authedUser].answers, { [qid]: answer }),
        },
      };
    case ASSIGN_QUESTION:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat(qid),
        },
      };
    default:
      return state;
  }
};

export default users;
