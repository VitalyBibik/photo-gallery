import config from "../config/config";

class Api {
    constructor(apiRequest) {
        this.apiRequest = apiRequest
    }

    _primaryResponseHandler(res) {
        if (res.ok) {
            return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise))
            .catch((err) => {
                throw err;
            })
    }

    getAllUsers() {
        return fetch(
            `${this.apiRequest.getAllUsers}`,
        )
            .then(res => this._primaryResponseHandler(res));
    }


}

const api = new Api(config.apiRequest);

export default api;