import React, { useState } from 'react';
import { register } from '../services/registerApi'; // Import hàm register từ file bạn đã tạo
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap'; // Importing necessary bootstrap components
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../App.css'; // Optional, if you want to add custom styles

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate(); // Initialize the navigate function

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!username || !password || !fullname) {
            alert("Please fill in all fields!");
            return;
        }

        try {
            const user = await register(username, password, fullname);
            console.log('Registration success:', user);
            setSuccess(true);
            setError(null); // Reset error if successful

            // Redirect to the home page after successful registration
            setTimeout(() => {
                navigate('/'); // Redirect to home ("/")
            }, 1000); // Delay for 1 second to show success message
        } catch (error) {
            setError(error.message);
            setSuccess(false); // Reset success flag if error occurs
        }
    };

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <div className="sign-up-form-container">
                        <h3 className="text-center mb-4">Đăng ký</h3>
                        {/* Success and Error messages */}
                        {error && (
                            <Alert variant="danger" className="text-center">
                                {error}
                            </Alert>
                        )}
                        {success && (
                            <Alert variant="success" className="text-center">
                                Đăng ký thành công!
                            </Alert>
                        )}
                        {/* Form */}
                        <Form onSubmit={handleRegister}>
                            <Form.Group controlId="formUsername" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Tên tài khoản"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formFullname" className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Họ và tên"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            {/* Submit Button */}
                            <Button variant="primary" type="submit" className="w-100 mb-3">
                                Đăng ký
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUpForm;
