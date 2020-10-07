import {
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAIL,
  } from "../actions/types";
  
  const token = JSON.parse(localStorage.getItem("token"));
  
  const initialState = token
    ? { isLoggedIn: true, token: token }
    : { isLoggedIn: false, token: null };

    export default function (state = initialState, action) {
        const { type, payload } = action;
      
        switch (type) {
          case GET_TOKEN_SUCCESS:
            return {
              ...state,
              isLoggedIn: true,
              token: payload.token,
            };
          case GET_TOKEN_FAIL:
            return {
              ...state,
              isLoggedIn: false,
              token: null,
            };
          default:
            return state;
        }
    }