import * as actions from "../actions/actions";

const initialState = {
  userInfo: [
    {
      id: 0,
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      gender: "",
      country: ""
    }
  ],
  isAuthenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA:
      return { ...state, userInfo: action.payload.data, isAuthenticated: true };
    case actions.POST_DATA:
      return { ...state };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export default reducer;
