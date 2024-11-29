import React, { useState, useEffect } from "react";
import Header from "../components/header"
import Banner from "../components/banner"
import CustomContainerService from "../components/customcontainerservice"
import CustomContainer from "../components/customcontainer"
import SpecialProduct from "../components/specialproduct"
import FlashSale from "../components/flashsale"
import ContainerFluid from "../components/containerfluid"
import Footer from "../components/footer"
import PopupLogin from "../components/popuplogin";
import FooterApi from '../services/footerApi';
import { Helmet } from 'react-helmet';

function IndexPage() {
    const [user, setUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [title, setTitle] = useState({});

    const fetchFooter = async () => {
        try {
            const response = await FooterApi.getAll();
            setTitle(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized, please log in');
            } else {
                console.log('Failed to fetch footer', error);
            }
        }
    };

    useEffect(() => {
        fetchFooter();
        document.title = title?.content || "Katie";
    }, []);

    useEffect(() => {
        if (title?.title) {
            document.title = title.content;
        }
    }, [title]);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setShowPopup(false);
    };

    const handleProtectedAction = () => {
        if (!isLoggedIn) {
            setShowPopup(true);
        } else {
            alert('Thực hiện chức năng yêu cầu đăng nhập!');
        }
    };

    return (
        <>
            <Helmet>
                {title.content}
            </Helmet>
            <li className="onhover-div">
                <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <button
                        onClick={handleProtectedAction}
                        style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                        }}
                    >
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                                fill="#292D32"
                            />
                            <path
                                d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z"
                                fill="#292D32"
                            />
                        </svg>
                    </button>
                </div>

                {/* Hiển thị popup khi showPopup = true */}
                {showPopup && (
                    <PopupLogin
                        isOpen={showPopup}
                        onClose={() => setShowPopup(false)}
                        onLoginSuccess={handleLoginSuccess}
                        setUser={setUser}
                    />
                )}
            </li>
            <Header name={user} setUser={setUser} />
            <Banner />
            <CustomContainerService />
            <CustomContainer />
            <SpecialProduct />
            <FlashSale />
            <ContainerFluid />
            <Footer />
        </>
    )
}
export default IndexPage;

