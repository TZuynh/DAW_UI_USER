import React, { useState } from "react";
import { login } from "../services/authApi";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopupContent = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
    text-align: left;
`;

const Label = styled.label`
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background: #007bff !important;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;

const ButtonClose = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background: #dc3545 !important;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background: #0056b3;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    margin-bottom: 10px;
`;

const PopupLogin = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error trước khi xử lý
        setMessage(null); // Reset message trước khi xử lý

        try {
            const user = await login(username, password);

            if (user) {
                localStorage.setItem("id", user.id);
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);

                props.setUser(user.fullname);

                props.onClose();

                setMessage("Đăng nhập thành công");
            } else {
                setMessage("Tên đăng nhập hoặc mật khẩu không đúng");
            }
        } catch (err) {
            console.error("Đăng nhập thất bại:", err);
            setError("Có lỗi xảy ra, vui lòng thử lại sau.");
        }
    };
    if (!props.isOpen) return null;

    return (
        <PopupOverlay>
            <PopupContent>
                <h2>Đăng nhập</h2>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Tên đăng nhập:</Label>
                        <Input
                            type="text"
                            placeholder="Nhập tên đăng nhập"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Mật khẩu:</Label>
                        <Input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormGroup>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Button type="submit">Đăng nhập</Button>
                </form>
                <ButtonClose onClick={props.onClose} style={{ marginTop: "10px" }}>
                    Đóng
                </ButtonClose>
                <br />
                <NavLink to="/sign-up">Đăng ký</NavLink> {/* Correct usage */}
            </PopupContent>
        </PopupOverlay >
    );
};

export default PopupLogin;
