import layout from "../images/layout-3/1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import BannerSwiper from "./bannerswiper";


export default function Banner() {
    return (
        <>
            <section className="pt-0 home-section-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-2 d-none d-xl-block">
                            <ul>
                                <li >
                                    {" "}
                                    <a href="#" className="fw-bolder">Quần Áo Nữ</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Quần Áo Nam</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Áo Sơ Mi Nữ</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Áo Sơ Mi Nam</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Phụ Kiện Nữ</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Phụ Kiện Nam</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Áo Khoác Nữ</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Áo Khoác Nam</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Túi Xách Nữ</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Thắt Lưng Nam</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="#" className="fw-bolder">Khác</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-xl-10 pe-0">
                            <div className="home-banner p-right">
                                {" "}
                                {/* <img
                                    className="img-fluid"
                                    src={layout}
                                    alt=""
                                /> */}
                                <BannerSwiper />
                            </div>
                            <ul className="social-icon">
                                <li>
                                    {" "}
                                    <a href="#">
                                        <h6>Follow Us</h6>
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <FaFacebookF />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
