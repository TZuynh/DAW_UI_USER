import React from 'react'
import bl1 from '../images/blog/blog-page/1.jpg'
import bl2 from '../images/blog/blog-page/2.jpg'
import bl3 from '../images/blog/blog-page/3.jpg'
import bl4 from '../images/blog/blog-page/4.jpg'
import bl5 from '../images/blog/blog-page/5.jpg'
import bl6 from '../images/blog/blog-page/6.jpg'
import u1 from '../images/user/1.jpg'
import u2 from '../images/user/2.jpg'
import u3 from '../images/user/3.jpg'
import u4 from '../images/user/4.jpg'
import u5 from '../images/user/5.jpg'
import u6 from '../images/user/6.jpg'
import blo1 from '../images/other-img/blog-1.jpg'
import blo2 from '../images/other-img/blog-2.jpg'
import blo3 from '../images/other-img/blog-3.jpg'
import blo4 from '../images/other-img/blog-4.jpg'
import blof from '../images/other-img/blog-offer.jpg'

const blogshow = () => {
  return (
    
    <div>
    <section className="section-b-space pt-0">
        <div className="heading-banner">
        <div className="custom-container container">
            <div className="row align-items-center">
            <div className="col-sm-6"><h4>Blog List</h4></div>
            <div className="col-sm-6">
                <ul className="breadcrumb float-end">
                <li className="breadcrumb-item"><a href="index.html">Home </a></li>
                <li className="breadcrumb-item active">
                    <a href="#">Blog List</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </section>
    <section className="section-b-space pt-0">
    <div className="custom-container container blog-page">
      <div className="row gy-4">
        <div className="col-xl-9 col-lg-8 ratio2_3">
          <div className="row sticky gy-4">
            <div className="col-12">    
              <div className="blog-main-box blog-list">
                <div className="list-img">
                  <div className="blog-img">
                    <img className="img-fluid bg-img" 
                         src={bl1} />
                        
                        
                  </div>
                </div>
                <div className="blog-content">
                  <span>May 9, 2024 Stylish</span><a href="blog-details.html">
                    <h4>
                    Cách mà phụ nữ chuyển giới đen đang tái định nghĩa tiêu chuẩn về sắc đẹp
                    </h4></a>
                  <p>
                  Mặc dù sắc đẹp luôn là một yếu tố quan trọng trong xã hội, nhưng tiêu chuẩn sắc đẹp 
                  ngày nay đang ngày càng được mở rộng và đa dạng hơn. Phụ nữ chuyển giới đen là một
                  trong những nhóm người tiên phong trong việc thay đổi quan niệm về sắc đẹp trong 
                  ngành thời trang hiện đại.
                  </p>
                  <div className="share-box">
                    <div className="d-flex align-items-center gap-2">
                      <img className="img-fluid" src={u1} />
                      <h6>by John wiki on</h6>
                    </div>
                    <a href="#"> Đọc thêm..</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="blog-main-box blog-list">
                <div className="list-img">
                  <div className="blog-img">
                    <img className="img-fluid bg-img" src={bl2} />
                  </div>
                </div>
                <div className="blog-content">
                  <span>MAY 9, 2024 STYLISH </span><a href="blog-details.html">
                    <h4>
                    Những xu hướng thời trang mùa hè 2023 mà bạn không thể bỏ qua
                    </h4></a>
                  <p>
                    Mùa hè năm nay mang đến những xu hướng thời trang độc đáo và đầy màu sắc. 
                    Những bộ trang phục thoải mái nhưng vẫn tinh tế đang trở thành lựa chọn ưu 
                    tiên cho các tín đồ thời trang, đặc biệt là với sự lên ngôi của các item như 
                    áo crop top và quần short dáng rộng.
                  </p>
                  <div className="share-box">
                    <div className="d-flex align-items-center gap-2">
                      <img className="img-fluid" src={u2} />
                      <h6>by John wiki on</h6>
                    </div>
                    <a href="#"> Đọc thêm..</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="blog-main-box blog-list">
                <div className="list-img">
                  <div className="blog-img">
                    <img className="img-fluid bg-img" src={bl3} />
                  </div>
                </div>
                <div className="blog-content">
                  <span>MAY 9, 2024 STYLISH</span><a href="blog-details.html">
                    <h4>
                    Cách phối đồ tối giản nhưng vẫn nổi bật
                    </h4></a>
                  <p>
                    Thời trang tối giản không chỉ là việc lựa chọn những món đồ đơn giản,
                    mà còn là cách phối hợp sao cho phù hợp và nổi bật. Mỗi món đồ đều có 
                    thể tạo nên một tổng thể hoàn hảo nếu bạn biết cách mix & match với những phụ kiện tinh tế.
                  </p>
                  <div className="share-box">
                    <div className="d-flex align-items-center gap-2">
                      <img className="img-fluid" src={u3} />
                      <h6>by John wiki on</h6>
                    </div>
                    <a href="#"> Đọc thêm..</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="blog-main-box blog-list">
                <div className="list-img">
                  <div className="blog-img">
                    <img className="img-fluid bg-img" src={bl4} />
                  </div>
                </div>
                <div className="blog-content">
                  <span>MAY 9, 2023 STYLISH</span><a href="blog-details.html">
                    <h4>
                    Thương hiệu thời trang Việt Nam nổi bật năm 2023
                    </h4></a>
                  <p>
                  Năm 2023 đánh dấu sự phát triển mạnh mẽ của nhiều thương hiệu thời trang Việt Nam, 
                  với những bộ sưu tập mang đậm dấu ấn văn hóa dân tộc. Các thương hiệu này không chỉ
                   chú trọng đến chất lượng mà còn tạo ra những thiết kế sáng tạo, phù hợp với xu hướng toàn cầu.
                  </p>
                  <div className="share-box">
                    <div className="d-flex align-items-center gap-2">
                      <img className="img-fluid" src={u4}/>
                      <h6>by John wiki on</h6>
                    </div>
                    <a href="#"> Đọc thêm..</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="blog-main-box blog-list">
                <div className="list-img">
                  <div className="blog-img">
                    <img className="img-fluid bg-img" src= {bl5} />
                  </div>
                </div>
                <div className="blog-content">
                  <span>MAY 9, 2024 STYLISH </span><a href="blog-details.html">
                    <h4>
                        Xu hướng thời trang công sở năm 2023
                    </h4></a>
                  <p>
                  Thời trang công sở ngày nay không còn chỉ đơn giản là những bộ
                   đồ âu phục cứng nhắc. Các nhà thiết kế đang mang đến cho người làm 
                   việc một phong cách thoải mái và sang trọng, với các bộ trang phục phù hợp 
                   với mọi môi trường làm việc.
                  </p>
                  <div className="share-box">
                    <div className="d-flex align-items-center gap-2">
                      <img className="img-fluid" src={u5} />
                      <h6>by John wiki on</h6>
                    </div>
                    <a href="#"> Đọc thêm..</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="blog-main-box blog-list">
                <div className="list-img">
                  <div className="blog-img">
                    <img className="img-fluid bg-img" src= {bl6} />
                  </div>
                </div>
                <div className="blog-content">
                  <span>MAY 9, 2024 STYLISH</span><a href="blog-details.html">
                    <h4>
                    Những bộ sưu tập thời trang mùa thu nổi bật
                    </h4></a>
                  <p>
                  Mùa thu luôn là dịp để các nhà thiết kế thời 
                  trang tung ra những bộ sưu tập độc đáo. Từ áo khoác dáng dài đến 
                  những chiếc khăn choàng ấm áp, thời trang mùa thu luôn mang lại cảm 
                  giác vừa ấm áp lại vừa sang trọng.
                  </p>
                  <div className="share-box">
                    <div className="d-flex align-items-center gap-2">
                      <img className="img-fluid" src={u6} />
                      <h6>by John wiki on</h6>
                    </div>
                    <a href="#"> Đọc thêm..</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-wrap mt-0">
              <ul className="pagination">
                <li>
                  <a className="prev" href="#"><i className="iconsax" data-icon="chevron-left" /></a>
                </li>
                <li><a href="#">1</a></li>
                <li><a className="active" href="#">2</a></li>
                <li><a href="#">3 </a></li>
                <li>
                  <a className="next" href="#">
                    <i className="iconsax" data-icon="chevron-right" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 order-lg-first">
          <div className="blog-sidebar">
            <div className="row gy-4">
              <div className="col-12">
                <div className="blog-search">
                  <input type="search" placeholder="Search Here..." /><i className="iconsax" data-icon="search-normal-2" />
                </div>
              </div>
              <div className="col-12">
                <div className="sidebar-box">
                  <div className="sidebar-title">
                    <div className="loader-line" />
                    <h5>Danh mục</h5>
                  </div>
                  <ul className="categories">
                    <li>
                      <p>Fashion<span>30</span></p>
                    </li>
                    <li>
                      <p>Trends<span>20</span></p>
                    </li>
                    <li>
                      <p>Designer<span>3</span></p>
                    </li>
                    <li>
                      <p>Swimwear<span>15</span></p>
                    </li>
                    <li>
                      <p>Handbags<span>11</span></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="sidebar-box">
                  <div className="sidebar-title">
                    <div className="loader-line" />
                    <h5>Top Bài Báo</h5>
                  </div>
                  <ul className="top-post">
                    <li>
                      <img className="img-fluid" src={blo1}/>
                      <div>
                        <a href="blog-details.html">
                          <h6>
                            Study 2020: Fake Engagement is Only Half the
                            Problem
                          </h6></a>
                        <p>September 28, 2024</p>
                      </div>
                    </li>
                    <li>
                      <img className="img-fluid" src={blo2} />
                      <div>
                        <a href="blog-details.html">
                          <h6>
                            Top 10 Interior Design in 2020 New York Business
                          </h6></a>
                        <p>September 28, 2024</p>
                      </div>
                    </li>
                    <li>
                      <img className="img-fluid" src={blo3} />
                      <div>
                        <a href="blog-details.html">
                          <h6>
                            Ecommerce Brands Tend to Create Strong Communities
                          </h6></a>
                        <p>September 28, 2024</p>
                      </div>
                    </li>
                    <li>
                      <img className="img-fluid" src={blo4} />
                      <div>
                        <a href="blog-details.html">
                          <h6>
                            What Do I Need to Make It in the World of
                            Business?
                          </h6></a>
                        <p>September 28, 2024</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="sidebar-box">
                  <div className="sidebar-title">
                    <div className="loader-line" />
                    <h5>Nhãn</h5>
                  </div>
                  <ul className="popular-tag">
                    <li><p>T-shirt</p></li>
                    <li><p>Handbags</p></li>
                    <li><p>Trends</p></li>
                    <li><p>Fashion</p></li>
                    <li><p>Designer</p></li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="sidebar-box">
                  <div className="sidebar-title">
                    <div className="loader-line" />
                    <h5>Theo dõi chúng tôi</h5>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank"><div className="icon">
                          <i className="fa-brands fa-facebook-f" />
                        </div>
                        <h6>Facebook</h6></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank"><div className="icon">
                          <i className="fa-brands fa-instagram"> </i>
                        </div>
                        <h6>Instagram</h6></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank"><div className="icon">
                          <i className="fa-brands fa-x-twitter" />
                        </div>
                        <h6>Twitter</h6></a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank"><div className="icon">
                          <i className="fa-brands fa-youtube" />
                        </div>
                        <h6>Youtube</h6></a>
                    </li>
                    <li>
                      <a href="https://www.whatsapp.com/" target="_blank"><div className="icon">
                          <i className="fa-brands fa-whatsapp" />
                        </div>
                        <h6>Whatsapp</h6></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 d-none d-lg-block">
                <div className="blog-offer-box">
                  <img className="img-fluid" src={blof} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>


  )
}

export default blogshow
