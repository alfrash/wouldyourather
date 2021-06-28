const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the action: ", action);
  const returnValue = next(action);
  console.log("the new state: ", store.getState());
  console.log("The new state: ", returnValue);
  console.groupEnd();
  return returnValue;
};

export default logger;
