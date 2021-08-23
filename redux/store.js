import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reducers_ } from "./reducers";

const initialState = {
  name: "",
  answers: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers_,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
