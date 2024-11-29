import axios from 'axios';

const FooterApi = {
    getAll: () => {
        const url = 'http://127.0.0.1:8000/api/footer';
        return axios.get(url);
    },
};

export default FooterApi;
