
export default function AboutUs() {
    return (
        <>
            <section className="section-b-space pt-0">
                <div className="custom-container container">
                    {" "}
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6 order-1 order-lg-1 ratio_55">
                            <div
                                className="about-img bg-size"
                                style={{
                                    backgroundImage: "",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    display: "block"
                                }}
                            >
                                {" "}
                                <img
                                    className="bg-img img-fluid"
                                    src="../assets/images/about/7.jpg"
                                    alt=""
                                    style={{ display: "none" }}
                                />
                                <div className="about-tag">
                                    {" "}
                                    <a href="collection-left-sidebar.html">
                                        {" "}
                                        <h5>Women</h5>
                                        <i className="fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-lg-2">
                            {" "}
                            <div className="about-content">
                                {" "}
                                <div className="sidebar-title">
                                    <div className="loader-line" />
                                    <h3>Here's the newest fashion. </h3>
                                </div>
                                <p>
                                    With increased awareness about environmental issues, sustainable
                                    fashion has gained traction. Women are embracing eco-friendly
                                    materials, upcycling, and supporting brands with transparent supply
                                    chains. Layering isn't just about staying warm—it's a styling
                                    technique that adds depth and dimension to outfits. Lightweight
                                    cardigans, duster coats, and scarves are essential layering pieces
                                    that can easily transition from day to night.
                                </p>
                                <ul>
                                    {" "}
                                    <li>
                                        <i className="iconsax" data-icon="cloud">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.27004 13.01C6.74004 12.74 6.15004 12.6 5.55004 12.6C0.870039 12.93 0.870039 19.74 5.55004 20.07H16.64C17.99 20.08 19.29 19.58 20.28 18.67C23.57 15.8 21.81 10.03 17.48 9.48C15.92 0.110001 2.39004 3.67 5.60004 12.6"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15.8501 9.92001C16.3701 9.66001 16.9401 9.52001 17.5201 9.51001"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </i>
                                        <div>
                                            {" "}
                                            <h6>Soft Fabric</h6>
                                            <p>
                                                Get complimentary ground shipping on every order.Don’t love
                                                it? Send it back, on us.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="iconsax" data-icon="clock">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </i>
                                        <div>
                                            <h6>All Day Comfort</h6>
                                            <p>
                                                We believe getting dressed should be the easiest part of your
                                                day.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 order-4 order-lg-3">
                            <div className="about-content about-content-1">
                                {" "}
                                <div className="sidebar-title">
                                    <div className="loader-line" />
                                    <h3>Mastering Men's Fashion</h3>
                                </div>
                                <p>
                                    Start with foundational pieces like well-fitted jeans, classic white
                                    shirts, and versatile jackets. These basics form the backbone of
                                    your wardrobe, allowing for endless mix-and-match
                                    possibilities.Whether it's a suit or a simple button-down shirt,
                                    proper tailoring can elevate your look from average to exceptional.
                                    Invest in alterations to ensure your clothes fit impeccably,
                                    enhancing your silhouette and boosting your confidence.
                                </p>
                                <ul>
                                    {" "}
                                    <li>
                                        <i className="iconsax" data-icon="cloud">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.27004 13.01C6.74004 12.74 6.15004 12.6 5.55004 12.6C0.870039 12.93 0.870039 19.74 5.55004 20.07H16.64C17.99 20.08 19.29 19.58 20.28 18.67C23.57 15.8 21.81 10.03 17.48 9.48C15.92 0.110001 2.39004 3.67 5.60004 12.6"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15.8501 9.92001C16.3701 9.66001 16.9401 9.52001 17.5201 9.51001"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </i>
                                        <div>
                                            {" "}
                                            <h6>Soft Fabric</h6>
                                            <p>
                                                Get complimentary ground shipping on every order.Don’t love
                                                it? Send it back, on us.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        {" "}
                                        <i className="iconsax" data-icon="clock">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
                                                    stroke="#292D32"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </i>
                                        <div>
                                            <h6>All Day Comfort</h6>
                                            <p>
                                                We believe getting dressed should be the easiest part of your
                                                day.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 order-3 order-lg-4 ratio_55">
                            <div
                                className="about-img about-img-1 bg-size"
                                style={{
                                    backgroundImage: "",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    display: "block"
                                }}
                            >
                                {" "}
                                <img
                                    className="bg-img img-fluid"
                                    src="../assets/images/about/8.jpg"
                                    alt=""
                                    style={{ display: "none" }}
                                />
                                <div className="about-tag">
                                    {" "}
                                    <a href="collection-left-sidebar.html">
                                        {" "}
                                        <h5>Men</h5>
                                        <i className="fa-solid fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}