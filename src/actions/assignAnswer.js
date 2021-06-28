// Assign answer to user
export const ASSIGN_ANSWER = "ASSIGN_ANSWER";
export function assignAnswer({ authedUser, qid, answer }) {
  return {
    type: ASSIGN_ANSWER,
    authedUser,
    qid,
    answer,
  };
}
