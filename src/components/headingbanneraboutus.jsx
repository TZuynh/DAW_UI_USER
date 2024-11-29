
export default function HeadingBannerAboutUs() {
    return (
        <>
            <div className="heading-banner">
                <div className="custom-container container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <h4>Về chúng tôi </h4>
                        </div>
                        <div className="col-sm-6">
                            <ul className="breadcrumb float-end">
                                <li className="breadcrumb-item">
                                    {" "}
                                    <a href="/">Trang chủ </a>
                                </li>
                                /
                                <a href="/view-about-us">Về chúng tôi </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}