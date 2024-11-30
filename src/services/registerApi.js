import axios from 'axios';

export const register = async (username, password, fullname) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
            username: username,
            password: password,
            fullname: fullname,
            role_id: 2, // Assuming role_id is required
        });

        return response.data; // Assuming the response contains the user data or a success message
    } catch (error) {
        if (error.response) {
            // Log the response error details for debugging
            console.error('Error:', error.response.data);
            throw new Error(error.response.data.message || 'Lỗi đăng ký');
        } else {
            throw new Error('Lỗi kết nối');
        }
    }
};
