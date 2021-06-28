import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers/index";
import thunk from "redux-thunk";
import logger from "../middleware/logger";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware(thunk, logger)
    // other store enhancers if any
  )
);
