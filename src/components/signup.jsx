import React from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

const SignUp = () => {
    return (
        <React.Fragment>
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="border-0 shadow-lg rounded-lg">
                        <Row className="align-items-center">
                            <Col md={6} className="p-4">
                                <Card.Body>
                                    <div className="text-center">
                                        <i className="feather icon-user-plus auth-icon" style={{ fontSize: '2rem' }} />
                                    </div>
                                    <h3 className="mb-4 font-weight-bold">Đăng ký</h3>
                                    <Form>
                                        <Form.Group controlId="formAccount" className="mb-3">
                                            <Form.Control type="text" placeholder="Tên tài khoản" />
                                        </Form.Group>

                                        <Form.Group controlId="formPhone" className="mb-3">
                                            <Form.Control type="text" placeholder="Số điện thoại" />
                                        </Form.Group>

                                        <Form.Group controlId="formPassword" className="mb-3">
                                            <Form.Control type="password" placeholder="Mật khẩu" />
                                        </Form.Group>

                                        <Form.Group controlId="formConfirmPassword" className="mb-4">
                                            <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
                                        </Form.Group>

                                        <Button variant="primary" className="w-100">Đăng ký</Button>

                                        <p className="mt-3">
                                            Đã có tài khoản?{' '}
                                            <NavLink to={'/'} className="f-w-400 text-decoration-none">
                                                Đăng nhập
                                            </NavLink>
                                        </p>
                                    </Form>
                                </Card.Body>
                            </Col>
                            <Col md={6} className="d-none d-md-block bg-signup-image"></Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignUp;
