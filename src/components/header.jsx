import React, { useState } from 'react';
import axios from "axios";
import logolight from '../images/logo/logo.png';
import banner from '../images/mega-menu/banner.png';
import fashion1 from '../images/mega-menu/5.jpg';
import fashion2 from '../images/mega-menu/6.jpg';
import fashion3 from '../images/mega-menu/1.png';
import PopupLogin from "../components/popuplogin";
import { FaChevronDown } from "react-icons/fa";

function Header(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState(null);

    const handleLogout = async () => {
        props.setUser(null);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/logout');
            setIsLoggedIn(false);
            setMessage({
                type: 'success',
                text: response.data.message,
            });
            setShowPopup(false);
            localStorage.removeItem("user");
        } catch (error) {
            setMessage({
                type: 'error',
                text: 'Có lỗi xảy ra khi đăng xuất!',
            });
        }
    };

    return <>
        <header>
            <div className="custom-container container header-1">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="mobile-fix-option">
                            <ul>
                                <li>
                                    {" "}
                                    <a href="/">
                                        <i className="iconsax" data-icon="home-1">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 18V15"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.07 2.81997L3.14002 8.36997C2.36002 8.98997 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </i>
                                        Trang chủ
                                    </a>
                                </li>
                                <li>
                                    <a href="search.html">
                                        <i className="iconsax" data-icon="search-normal-2">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                                                    fill="#292D32"
                                                />
                                                <path
                                                    d="M21.9995 22.7514C21.8095 22.7514 21.6195 22.6814 21.4695 22.5314L19.4695 20.5314C19.1795 20.2414 19.1795 19.7614 19.4695 19.4714C19.7595 19.1814 20.2395 19.1814 20.5295 19.4714L22.5295 21.4714C22.8195 21.7614 22.8195 22.2414 22.5295 22.5314C22.3795 22.6814 22.1895 22.7514 21.9995 22.7514Z"
                                                    fill="#292D32"
                                                />
                                            </svg>
                                        </i>
                                        Tìm kiếm
                                    </a>
                                </li>
                                <li className="shopping-cart">
                                    {" "}
                                    <a href="cart.html">
                                        <i className="iconsax" data-icon="shopping-cart">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M9 8H21"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </i>
                                        Cart
                                    </a>
                                </li>
                                <li>
                                    <a href="wishlist.html">
                                        <i className="iconsax" data-icon="heart">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z"
                                                    fill="#292D32"
                                                />
                                            </svg>
                                        </i>
                                        Yêu thích của tôi
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="dashboard.html">
                                        <i className="iconsax" data-icon="user-2">
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
                                        </i>
                                        Tài khoản
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="offcanvas offcanvas-start"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            tabIndex={-1}
                            aria-labelledby="staticBackdropLabel"
                        >
                            <div className="offcanvas-header">
                                <h3 className="offcanvas-title" id="staticBackdropLabel">
                                    Offcanvas
                                </h3>
                                <button
                                    className="btn-close"
                                    type="button"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body">
                                <div />I will not close if you click outside of me.
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="main-menu">
                            {" "}
                            <a className="brand-logo" href="/">
                                {" "}
                                <img
                                    className="img-fluid for-light"
                                    src={logolight}
                                    alt="logo"
                                />
                                <img
                                    className="img-fluid for-dark"
                                    src="../assets/images/logo/logo-white-1.png"
                                    alt="logo"
                                />
                            </a>
                            <nav id="main-nav" className='fw-bold'>
                                <ul
                                    className="nav-menu sm-horizontal theme-scrollbar"
                                    id="sm-horizontal"
                                >
                                    <li className="mobile-back" id="mobile-back">
                                        Back
                                        <i
                                            className="fa-solid fa-angle-right ps-2"
                                            aria-hidden="true"
                                        />
                                    </li>
                                    <li>
                                        {" "}
                                        <a className="nav-link" href="/">
                                            Trang chủ{" "}
                                            <span>
                                                {" "}
                                            </span>
                                        </a>

                                    </li>
                                    <li>
                                        {" "}
                                        <a className="nav-link" href="/view-product">
                                            Sản phẩm{" "}
                                        </a>
                                    </li>
                                    <li>
                                        {" "}
                                        <a className="nav-link" href="/blog">
                                            Blog{" "}
                                        </a>

                                    </li>
                                    <li>
                                        {" "}
                                        <a className="nav-link" href="/view-about-us">
                                            Về Chúng Tôi{" "}
                                        </a>

                                    </li>
                                    <li>
                                        {" "}
                                        <a className="nav-link" href="/view-contact">
                                            Liên hệ{" "}
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="sub_header">
                                <div className="toggle-nav" id="toggle-nav">
                                    <i className="fa-solid fa-bars-staggered sidebar-bar" />
                                </div>
                                <ul className="justify-content-end">
                                    <li>
                                        {" "}
                                        <button>
                                            <i className="iconsax" data-icon="search-normal-2">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                                                        fill="#292D32"
                                                    />
                                                    <path
                                                        d="M21.9995 22.7514C21.8095 22.7514 21.6195 22.6814 21.4695 22.5314L19.4695 20.5314C19.1795 20.2414 19.1795 19.7614 19.4695 19.4714C19.7595 19.1814 20.2395 19.1814 20.5295 19.4714L22.5295 21.4714C22.8195 21.7614 22.8195 22.2414 22.5295 22.5314C22.3795 22.6814 22.1895 22.7514 21.9995 22.7514Z"
                                                        fill="#292D32"
                                                    />
                                                </svg>
                                            </i>
                                        </button>
                                        <input type="search" name="text" placeholder="Tôi muốn tìm kiếm..." />
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="wishlist.html">
                                            <i className="iconsax" data-icon="heart">
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z"
                                                        fill="#292D32"
                                                    />
                                                </svg>
                                            </i>
                                            <span className="cart_qty_cls">2</span>
                                        </a>
                                    </li>
                                    <li className="onhover-div">
                                        <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
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
                                        </div>
                                    </li>
                                    <li>
                                        {props.name}
                                    </li>
                                    {/* Hiển thị nút Đăng xuất nếu người dùng đã đăng nhập */}
                                    {props.name && (
                                        <button onClick={handleLogout}>Đăng xuất</button>
                                    )}
                                    <li className="onhover-div shopping-cart">
                                        {" "}
                                        <a
                                            className="p-0"
                                            href="/view-cart"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight"
                                            aria-controls="offcanvasRight"
                                        >
                                            <div className="shoping-prize">
                                                <i className="iconsax pe-2" data-icon="basket-2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
                                                            stroke="#292D32"
                                                            strokeWidth="1.5"
                                                            strokeMiterlimit={10}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z"
                                                            stroke="#292D32"
                                                            strokeWidth="1.5"
                                                            strokeMiterlimit={10}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M15.4955 12H15.5045"
                                                            stroke="#292D32"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M8.49451 12H8.50349"
                                                            stroke="#292D32"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </i>
                                                0 items
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    </>
}
export default Header