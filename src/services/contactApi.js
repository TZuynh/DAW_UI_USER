import axios from 'axios';

const ContactApi = {
    getAll: () => {
        return axios.get('http://127.0.0.1:8000/api/contacts');
    },

    store: (contactData) => {
        const url = 'http://127.0.0.1:8000/api/contacts';
        return axios.post(url, contactData);
    }
};

export default ContactApi;
