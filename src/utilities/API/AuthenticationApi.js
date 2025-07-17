
import API from "./API";

class AuthenticationApi {

  constructor() {
    this.api = new API()
  }

  async registerNewUser({ firstName, lastName, email, password}) {

    const method = "POST";
    const route = "/auth/users/registerNewUser";
    const data = {
      "FirstName": firstName,
      "LastName": lastName,
      "Email": email,
      "Password": password
    };
    const params = null;

    console.log(data)

    try {
      const response = await this.api.makeRequest(method, route, data, params);
      return response;
    } catch (e) {
      console.error(e)
    }
  }

  async checkVerificationCode(email, code) {

    const method = "GET";
    const route = "/auth/users/checkVerificationCode";
    const params = new URLSearchParams({ email, code });

    const response = await this.api.makeRequest(method, `${route}?${params.toString()}`, null, null);

    if (response && response.status === 200) {
      return response;
    } else {
      console.log(`Error: ${response?.status}`, response?.data);
      return response;
    }
  }

  async authenticate(formData) {

    const method = "POST";
    const route = "/auth/users/authenticate";
    const data = {
      Email : formData.email,
      Password : formData.password
    };
    const params = null;

    try {
      const response = await this.api.makeRequest(method, route, data, params);
      return response;
    } catch (e) {
      console.error(e)
    }
  }





}

export default AuthenticationApi;