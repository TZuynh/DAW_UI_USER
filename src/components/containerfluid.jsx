import LogoSwiper from "./logoswiper"

export default function ContainerFluid() {
    return (
        <>
            <section className="section-t-space">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-sm-3 col-6">
                            <div className="brand-logo-txt">
                                <div>
                                    <h3>Top Brands </h3>
                                    <h4>Up to 40% off</h4>
                                    <div className="link-hover-anim underline">
                                        <a
                                            className="btn btn_underline link-strong link-strong-unhovered"
                                            href="index.html"
                                        >
                                            Shop Now
                                            <svg>
                                                <use href="../assets/svg/icon-sprite.svg#arrow" />
                                            </svg>
                                        </a>
                                        <a
                                            className="btn btn_underline link-strong link-strong-hovered"
                                            href="index.html"
                                        >
                                            Shop Now
                                            <svg>
                                                <use href="../assets/svg/icon-sprite.svg#arrow" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 col-6 p-0">
                            <div className="swiper slide-2 swiper-initialized swiper-horizontal swiper-backface-hidden">
                                <LogoSwiper />
                                <span
                                    className="swiper-notification"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>ưq
        </>
    )
}