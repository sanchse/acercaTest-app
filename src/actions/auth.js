import {
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAIL,
    SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth-service";

export const getToken = (username, password) => (dispatch) => {
    return AuthService.getToken(username, password).then(
        (response) => {
            dispatch({
                type: GET_TOKEN_SUCCESS,
                payload: { token: response },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: GET_TOKEN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};