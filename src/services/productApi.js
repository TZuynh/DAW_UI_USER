import axios from 'axios';

const ProductApi = {
    getAll: () => {
        const url = 'http://127.0.0.1:8000/api/products';
        return axios.get(url);
    },
};

export default ProductApi;
