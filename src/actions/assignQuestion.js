// assign Question to user

export const ASSIGN_QUESTION = "ASSIGN_QUESTION";

export function assignQuestion(authedUser, qid) {
  return {
    type: ASSIGN_QUESTION,
    authedUser,
    qid,
  };
}
