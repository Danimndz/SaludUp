import { SET_ANSWER, SET_NAME } from "./actions";

export const reducers_ = (state = {}, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };

    case SET_ANSWER:
      return { ...state, answers: [...state.answers, action.payload] };
    default:
      return state;
  }
};
