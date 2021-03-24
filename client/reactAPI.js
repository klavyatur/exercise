import axios from 'axios';
const PLANET_JSON_URL = 'https://swapi.dev/api/planets/1/';


export default {
    getAPIResponse() {
        return axios.get(PLANET_JSON_URL);
    }
};
