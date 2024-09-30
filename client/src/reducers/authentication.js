import { AUTHENTICATION, LOGOUT } from "../constants/actionTypes";

// Get the initial state from localStorage if available
const initialState = {
  authData: JSON.parse(localStorage.getItem('profile')) || null
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action?.data
      };

    case LOGOUT:
      localStorage.removeItem('profile');
      return {
        ...state,
        authData: null
      };

    default:
      return state;
  }
};

export default authenticationReducer;
