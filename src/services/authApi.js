import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
            username: username,
            password: password,
            role_id: 2,
        });

        const { user } = response.data;

        return user;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Lỗi đăng nhập');
    }
};
