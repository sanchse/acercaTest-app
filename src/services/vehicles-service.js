import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://localhost:44325/api/v1/';

class VehiclesService {
    static getVehicles(numItems) {
        return axios.get(API_URL + `vehicles?pageNumber=0&pageSize=${numItems}`, { headers: authHeader() });
    }

    static getVehicle(id) {
        return axios.get(API_URL + `vehicles/${id}`, { headers: authHeader() });
    }

    static updateVehicle(vehicle) {
        return axios.patch(API_URL + `vehicles/${vehicle.id}`, {
            headers: authHeader(),
            body: vehicle
        });
    }

    static deleteVehicle(id) {
        return axios.delete(API_URL + `vehicles/${id}`, { headers: authHeader() });
    }
}

export default new VehiclesService();