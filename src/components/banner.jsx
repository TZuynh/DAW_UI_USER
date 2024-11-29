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
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Women’s Clothing</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Men’s Clothing</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Kids Clothing</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Watch</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Sports Accessories</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Sunglass</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Bags</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Sneakers</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Jewellery</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Hair Accessories</a>
                                </li>
                                <li>
                                    {" "}
                                    <a href="collection-left-sidebar.html" className="fw-bolder">Other</a>
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
