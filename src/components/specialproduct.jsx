import { FaStar } from "react-icons/fa";


export default function SpecialProduct() {
    return (
        <>
            <section className="section-t-space">
                <div className="custom-container container">
                    <div className="row special-products align-items-center">
                        <div className="col-md-4 col-12">
                            <div className="title-1">
                                <p>
                                    Bộ Sưu Tập Trending
                                    <span />
                                </p>
                                <h3>Sản Phẩm Đặc Biệt</h3>
                            </div>
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="theme-tab-3">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            data-bs-target="#new-product"
                                            role="tab"
                                            aria-controls="new-product"
                                            aria-selected="true"
                                        >
                                            <h6>Sản Phẩm Mới</h6>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#featured-product"
                                            role="tab"
                                            aria-controls="featured-product"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            <h6>Sản Phẩm Nổi Bật</h6>
                                        </a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link"
                                            data-bs-toggle="tab"
                                            data-bs-target="#best-seller"
                                            role="tab"
                                            aria-controls="best-seller"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            <h6>Bán Chạy</h6>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="new-product"
                                    role="tabpanel"
                                    tabIndex={0}
                                >
                                    <div className="row ratio1_3 gy-4 gx-3 gx-sm-4">
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">MỚI</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/1.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/1.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/11.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/11.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv9">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div>
                                                                <span className="title">Ngày</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">22</div>
                                                                </div>
                                                                <span className="title">Giờ</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">43</div>
                                                                </div>
                                                                <span className="title">Phút</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">51</div>
                                                                </div>
                                                                <span className="title">Giây</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star-half-stroke" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-star" />
                                                        </li>
                                                        <li>4.2</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6> Bộ sưu tập thời trang của Greciilooks</h6>
                                                    </a>
                                                    <p>
                                                        599.000
                                                        <del>799.000</del>
                                                        <span>-25%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">MỚI</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/2.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/2.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/19.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/19.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-star" />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Thời trang cặp đôi</h6>
                                                    </a>
                                                    <p>
                                                        350.000
                                                        <del>450.000 </del>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">MỚI</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/3.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/3.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/18.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/18.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Quần áo nữ</h6>
                                                    </a>
                                                    <p>
                                                        380.000
                                                        <del>500.000</del>
                                                        <span>-22%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">MỚI</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/10.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/10.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a  
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/21.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/21.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                    {/* <div className="countdown">
                                                        <ul className="clockdiv3">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div>
                                                                <span className="title">Days</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">22</div>
                                                                </div>
                                                                <span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">43</div>
                                                                </div>
                                                                <span className="title">Min</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">51</div>
                                                                </div>
                                                                <span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div> */}
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star-half-stroke" />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Bộ sưu tập xanh dương</h6>
                                                    </a>
                                                    <p>
                                                        499.000
                                                        <del>699.000</del>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div
                                    className="tab-pane fade"
                                    id="featured-product"
                                    role="tabpanel"
                                    tabIndex={0}
                                >
                                    <div className="row ratio1_3 gy-4">
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">NEW</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/4.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/4.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/16.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/16.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv4">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div>
                                                                <span className="title">Days</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">22</div>
                                                                </div>
                                                                <span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">43</div>
                                                                </div>
                                                                <span className="title">Min</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">51</div>
                                                                </div>
                                                                <span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star-half-stroke" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-star" />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Greciilooks Women's Stylish Top</h6>
                                                    </a>
                                                    <p>
                                                        $100.00
                                                        <del>$140.00</del>
                                                        <span>-20%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">NEW</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/11.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/11.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/15.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/15.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-star" />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Wide Linen-Blend Trousers</h6>
                                                    </a>
                                                    <p>
                                                        $100.00
                                                        <del>$18.00 </del>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">NEW</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/9.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/9.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/14.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/14.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Long Sleeve Rounded T-Shirt</h6>
                                                    </a>
                                                    <p>
                                                        $12.30
                                                        <del>$140.00</del>
                                                        <span>-20%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">NEW</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/10.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/10.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/13.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/13.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv5">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div>
                                                                <span className="title">Days</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">22</div>
                                                                </div>
                                                                <span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">43</div>
                                                                </div>
                                                                <span className="title">Min</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">51</div>
                                                                </div>
                                                                <span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star-half-stroke" />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Blue lined White T-Shirt</h6>
                                                    </a>
                                                    <p>
                                                        $190.00
                                                        <del>$210.00</del>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div
                                    className="tab-pane fade"
                                    id="best-seller"
                                    role="tabpanel"
                                    tabIndex={0}
                                >
                                    <div className="row ratio1_3 gy-4">
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">NEW</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/16.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/16.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/2.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/2.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv6">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div>
                                                                <span className="title">Days</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">22</div>
                                                                </div>
                                                                <span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">43</div>
                                                                </div>
                                                                <span className="title">Min</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">51</div>
                                                                </div>
                                                                <span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star-half-stroke" />
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-star" />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Greciilooks Women's Stylish Top</h6>
                                                    </a>
                                                    <p>
                                                        $100.00
                                                        <del>$140.00</del>
                                                        <span>-20%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">NEW</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/17.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/17.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/1.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/1.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star"></i>
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-regular fa-star" />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Wide Linen-Blend Trousers</h6>
                                                    </a>
                                                    <p>
                                                        $100.00
                                                        <del>$18.00 </del>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">NEW</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/18.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/18.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/20.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/20.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Long Sleeve Rounded T-Shirt</h6>
                                                    </a>
                                                    <p>
                                                        $12.30
                                                        <del>$140.00</del>
                                                        <span>-20%</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-6">
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block">
                                                        <span className="lable-1">NEW</span>
                                                        <a
                                                            className="label-2 wishlist-icon"
                                                            href="javascript:void(0)"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="heart"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to Wishlist"
                                                            >
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
                                                        </a>
                                                    </div>
                                                    <div className="product-image">
                                                        <a
                                                            className="pro-first bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/19.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/19.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                        <a
                                                            className="pro-sec bg-size"
                                                            href="product.html"
                                                            style={{
                                                                backgroundImage:
                                                                    "url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/3.jpg)",
                                                                backgroundSize: "cover",
                                                                backgroundPosition: "center",
                                                                backgroundRepeat: "no-repeat",
                                                                display: "block"
                                                            }}
                                                        >
                                                            {" "}
                                                            <img
                                                                className="bg-img"
                                                                src="../assets/images/product/product-3/3.jpg"
                                                                alt="product"
                                                                style={{ display: "none" }}
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="cart-info-icon">
                                                        {" "}
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#addtocart"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="basket-2"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Add to card"
                                                            >
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
                                                        </a>
                                                        <a href="compare.html" tabIndex={0}>
                                                            <i
                                                                className="iconsax"
                                                                data-icon="arrow-up-down"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Compare"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z"
                                                                        fill="#292D32"
                                                                    />
                                                                    <path
                                                                        d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z"
                                                                        fill="#292D32"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#quick-view"
                                                            tabIndex={0}
                                                        >
                                                            <i
                                                                className="iconsax"
                                                                data-icon="eye"
                                                                aria-hidden="true"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-title="Quick View"
                                                            >
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                    <path
                                                                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z"
                                                                        stroke="#292D32"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv7">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div>
                                                                <span className="title">Days</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">22</div>
                                                                </div>
                                                                <span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">43</div>
                                                                </div>
                                                                <span className="title">Min</span>
                                                            </li>
                                                            <li className="dot">
                                                                {" "}
                                                                <span>:</span>
                                                            </li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">51</div>
                                                                </div>
                                                                <span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <FaStar />
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-star-half-stroke" />
                                                        </li>
                                                        <li>4.3</li>
                                                    </ul>
                                                    <a href="product.html">
                                                        <h6>Blue lined White T-Shirt</h6>
                                                    </a>
                                                    <p>
                                                        $190.00
                                                        <del>$210.00</del>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}