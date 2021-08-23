export const SET_ANSWER = "SET_ANSWER";
export const SET_NAME = "SET_NAME";

export const setAnswer = (answer) => (dispatch) => {
  dispatch({
    type: SET_ANSWER,
    payload: answer,
  });
};

export const setName_ = (name_) => (dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: name_,
  });
};
