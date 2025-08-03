
import API from "./API";

class KeysApi {

  constructor() {
    this.api = new API()
  }

  async requestNewApiKey(userId, keyName ) {

    const method = "POST";
    const route = "/auth/keys/requestNewApiKey";
    const data = {
      "UserId": userId,
      "KeyName": keyName
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





}

export default KeysApi;