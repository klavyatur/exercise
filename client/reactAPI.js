import axios from 'axios';

export default {
    getAPISchools(zip, dist) {
        const COLLEGE_SCORECARD_URL = `https://api.data.gov/ed/collegescorecard/v1/schools?per_page=100&zip=${zip}&distance=${dist}mi&fields=id,school.name,school.state,school.city,school.school_url&api_key=JV2IyZTwqh1cEjHq3B0WKctKfFUeC509iHybf7pU`;

        return axios.get(COLLEGE_SCORECARD_URL);
    },

    getAPIParks(state='NY') {
        
        const NPS_API_URL = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&limit=100&api_key=nDdyAXx2NFYncL2IxriTGIJWktsETLxW3sXDheDK`;

        console.log(state);

        return axios.get(NPS_API_URL);
    }
};



