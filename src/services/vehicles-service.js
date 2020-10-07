import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:44325/api/v1/';

export function getVehicles(numItems) {
    return axios.get(API_URL + `vehicles?pageNumber=0&pageSize=${numItems}`, { headers: authHeader() });
}

export function getVehicle(id) {
    return axios.get(API_URL + `vehicles/${id}`, { headers: authHeader() });
}

export function createVehicle(vehicle) {
    return axios.post(API_URL + `vehicles`, {
        headers: authHeader(),
        body: vehicle
    });
}

export function updateVehicle(vehicle) {
    return axios.patch(API_URL + `vehicles/${vehicle.id}`, {
        headers: authHeader(),
        body: vehicle
    });
}

export function deleteVehicle(id) {
    return axios.delete(API_URL + `vehicles/${id}`, { headers: authHeader() });
}