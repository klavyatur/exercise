import axios from 'axios';
const COLLEGE_SCORECARD_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools?api_key=JV2IyZTwqh1cEjHq3B0WKctKfFUeC509iHybf7pU';


export default {
    getAPIResponse() {
        return axios.get(COLLEGE_SCORECARD_URL);
    }
};
