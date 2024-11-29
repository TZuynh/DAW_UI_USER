
export default function HeadingBannerProduct() {
    return (
        <>
            <section className="section-b-space pt-0">
                {" "}
                <div className="heading-banner">
                    <div className="custom-container container">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <h4>Sản phẩm</h4>
                            </div>
                            <div className="col-sm-6">
                                <ul className="breadcrumb float-end">
                                    <li className="breadcrumb-item">
                                        {" "}
                                        <a href="/">Trang chủ </a>
                                    </li>/
                                    <a href="/view-product">Sản phẩm</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}