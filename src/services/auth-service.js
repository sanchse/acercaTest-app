import axios from "axios";

const API_URL = "https://localhost:44325/api/auth/";

class AuthService {
  getToken(username, password) {
    return axios
      .post(API_URL + "authenticate", { username, password })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("token", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  resetToken() {
    localStorage.removeItem("token");
  }
}

export default new AuthService();