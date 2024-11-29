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
import logo7 from "../images/logos/7.png";
import logo1 from "../images/logos/1.png";
import logo2 from "../images/logos/2.png";
import logo3 from "../images/logos/3.png";
import logo4 from "../images/logos/4.png";



export default function LogoSwiper() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            // navigation
            // pagination={{ clickable: true }}
            loop={true} // Thêm loop vào đây
            autoplay={{
                delay: 2000, // Thời gian chuyển slide (tính bằng ms)
                disableOnInteraction: false, // Không dừng autoplay khi người dùng tương tác
            }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
        // onSlideChange={(swiper) => console.log('Slide changed to:', swiper.activeIndex)}
        >
            <SwiperSlide>
                <div
                    style={{ width: "203.8px", marginRight: 30 }}
                >
                    <a href="collection-left-sidebar.html">
                        {" "}
                        <img src={logo7} alt="logo" />
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    style={{ width: "203.8px", marginRight: 30 }}
                >
                    <a href="collection-left-sidebar.html">
                        {" "}
                        <img src={logo1} alt="logo" />
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    style={{ width: "203.8px", marginRight: 30 }}
                >
                    <a href="collection-left-sidebar.html">
                        {" "}
                        <img src={logo2} alt="logo" />
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    style={{ width: "203.8px", marginRight: 30 }}
                >
                    <a href="collection-left-sidebar.html">
                        {" "}
                        <img src={logo3} alt="logo" />
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                    style={{ width: "203.8px", marginRight: 30 }}
                >
                    <a href="collection-left-sidebar.html">
                        {" "}
                        <img src={logo4} alt="logo" />
                    </a>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
