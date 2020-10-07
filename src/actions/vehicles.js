import VehiclesService from '../services/vehicles-service';

import {
    GET_VEHICLES_SUCCESS,
    GET_VEHICLES_FAIL,
    SET_MESSAGE,
} from "./types";


export const loadVehicles = (numItems) => (dispatch) => {
    return VehiclesService.loadVehicles(numItems)
        .then((response) => {
            dispatch({
                type: GET_VEHICLES_SUCCESS,
                payload: { vehiclesResponse: response },
            });

            return Promise.resolve();
        })
        .catch(() => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: GET_VEHICLES_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        });
};