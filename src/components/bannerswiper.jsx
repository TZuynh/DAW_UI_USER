// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


// Import hình ảnh
import layout from "../images/layout-3/1.jpg";



export default function BannerSwiper() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            // spaceBetween={50}
            // slidesPerView={3}
            // navigation
            pagination={{ clickable: true }}
            loop={true} // Thêm loop vào đây
            autoplay={{
                delay: 3000, // Thời gian chuyển slide (tính bằng ms)
                disableOnInteraction: false, // Không dừng autoplay khi người dùng tương tác
            }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
        // onSlideChange={(swiper) => console.log('Slide changed to:', swiper.activeIndex)}
        >
            <SwiperSlide>
                <img src={layout} alt="Slide 1" className="img-fluid" />
                <div className="contain-banner">
                    <div>
                        <h4>
                            Hot Offer <span>START TODAY</span>
                        </h4>
                        <h1>Explore Your True Creative Fashion.</h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint.{" "}
                        </p>
                        <div className="link-hover-anim underline">
                            <a
                                className="btn btn_underline link-strong link-strong-unhovered"
                                href="collection-left-sidebar.html"
                            >
                                Show Now
                                <svg>
                                    <use href="https://themes.pixelstrap.net/katie/assets/svg/icon-sprite.svg#arrow" />
                                </svg>
                            </a>
                            <a
                                className="btn btn_underline link-strong link-strong-hovered"
                                href="collection-left-sidebar.html"
                            >
                                Show Now
                                <svg>
                                    <use href="https://themes.pixelstrap.net/katie/assets/svg/icon-sprite.svg#arrow" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={layout} alt="Slide 2" className="img-fluid" />
                <div className="contain-banner">
                    <div>
                        <h4>
                            Hot Offer <span>START TODAY</span>
                        </h4>
                        <h1>Explore Your True Creative Fashion.</h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint.{" "}
                        </p>
                        <div className="link-hover-anim underline">
                            <a
                                className="btn btn_underline link-strong link-strong-unhovered"
                                href="collection-left-sidebar.html"
                            >
                                Show Now
                                <svg>
                                    <use href="https://themes.pixelstrap.net/katie/assets/svg/icon-sprite.svg#arrow" />
                                </svg>
                            </a>
                            <a
                                className="btn btn_underline link-strong link-strong-hovered"
                                href="collection-left-sidebar.html"
                            >
                                Show Now
                                <svg>
                                    <use href="https://themes.pixelstrap.net/katie/assets/svg/icon-sprite.svg#arrow" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={layout} alt="Slide 3" className="img-fluid" />
                <div className="contain-banner">
                    <div>
                        <h4>
                            Hot Offer <span>START TODAY</span>
                        </h4>
                        <h1>Explore Your True Creative Fashion.</h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint.{" "}
                        </p>
                        <div className="link-hover-anim underline">
                            <a
                                className="btn btn_underline link-strong link-strong-unhovered"
                                href="collection-left-sidebar.html"
                            >
                                Show Now
                                <svg>
                                    <use href="https://themes.pixelstrap.net/katie/assets/svg/icon-sprite.svg#arrow" />
                                </svg>
                            </a>
                            <a
                                className="btn btn_underline link-strong link-strong-hovered"
                                href="collection-left-sidebar.html"
                            >
                                Show Now
                                <svg>
                                    <use href="https://themes.pixelstrap.net/katie/assets/svg/icon-sprite.svg#arrow" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="img-fluid" src={layout} alt="Slide 4" />
                <div className="contain-banner">
                    <div>
                        <h4>
                            Hot Offer <span>START TODAY</span>
                        </h4>
                        <h1>Explore Your True Creative Fashion.</h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint.{" "}
                        </p>
                        <div className="link-hover-anim underline">
                            <a
                                className="btn btn_underline link-strong link-strong-unhovered"
                                href="collection-left-sidebar.html"
                            >
                                Show Now
                                <svg>
                                    <use href="https://themes.pixelstrap.net/katie/assets/svg/icon-sprite.svg#arrow" />
                                </svg>
                            </a>
                            <a
                                className="btn btn_underline link-strong link-strong-hovered"
                                href="collection-left-sidebar.html"
                            >
                                Show Now
                                <svg>
                                    <use href="https://themes.pixelstrap.net/katie/assets/svg/icon-sprite.svg#arrow" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
