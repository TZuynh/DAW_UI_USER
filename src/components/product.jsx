

export default function Product() {
    return (
        <>
            <section className="section-b-space pt-0">
                <div className="custom-container container">
                    <div className="row">
                        <div className="col-3">
                            <div className="custom-accordion theme-scrollbar left-box">
                                <div className="left-accordion">
                                    <h5>Back </h5><i className="back-button fa-solid fa-xmark" />
                                </div>
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="search-box">
                                        <input type="search" name="text" placeholder="Search here..." /><i className="iconsax" data-icon="search-normal-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#292D32" />
                                            <path d="M21.9995 22.7514C21.8095 22.7514 21.6195 22.6814 21.4695 22.5314L19.4695 20.5314C19.1795 20.2414 19.1795 19.7614 19.4695 19.4714C19.7595 19.1814 20.2395 19.1814 20.5295 19.4714L22.5295 21.4714C22.8195 21.7614 22.8195 22.2414 22.5295 22.5314C22.3795 22.6814 22.1895 22.7514 21.9995 22.7514Z" fill="#292D32" />
                                        </svg>
                                        </i>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header tags-header">
                                            <button className="accordion-button"><span>Applied Filters</span><span>view all</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse show" id="panelsStayOpen-collapse">
                                            <div className="accordion-body">
                                                <ul className="tags">
                                                    <li> <a href="#">T-Shirt <i className="iconsax" data-icon="add"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 18V6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></li>
                                                    <li> <a href="#">Handbags<i className="iconsax" data-icon="add"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 18V6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></li>
                                                    <li> <a href="#">Trends<i className="iconsax" data-icon="add"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 18V6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></li>
                                                    <li> <a href="#">Minimog<i className="iconsax" data-icon="add"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 18V6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></li>
                                                    <li> <a href="#">Denim<i className="iconsax" data-icon="add"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 12H18" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 18V6" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight"><span>Collections</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseEight">
                                            <div className="accordion-body">
                                                <ul className="collection-list">
                                                    <li>
                                                        <input className="custom-checkbox" id="category10" type="checkbox" name="text" />
                                                        <label htmlFor="category10">All products</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category11" type="checkbox" name="text" />
                                                        <label htmlFor="category11">Best sellers</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category12" type="checkbox" name="text" />
                                                        <label htmlFor="category12">New arrivals</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category13" type="checkbox" name="text" />
                                                        <label htmlFor="category13">Accessories</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"><span>Categories</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseTwo">
                                            <div className="accordion-body">
                                                <ul className="catagories-side theme-scrollbar">
                                                    <li>
                                                        <input className="custom-checkbox" id="category1" type="checkbox" name="text" />
                                                        <label htmlFor="category1">Fashion (30)</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category2" type="checkbox" name="text" />
                                                        <label htmlFor="category2">Trends</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category3" type="checkbox" name="text" />
                                                        <label htmlFor="category3">Women’s Shirts</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category4" type="checkbox" name="text" />
                                                        <label htmlFor="category4">Top T-shirt</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category5" type="checkbox" name="text" />
                                                        <label htmlFor="category5">Denim (8)</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category6" type="checkbox" name="text" />
                                                        <label htmlFor="category6">Grains &amp; Beans (8)</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category7" type="checkbox" name="text" />
                                                        <label htmlFor="category7">Cosmopolis</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-checkbox" id="category8" type="checkbox" name="text" />
                                                        <label htmlFor="category8">Metropolis</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour"><span>Filter</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseFour">
                                            <div className="accordion-body">
                                                <div className="range-slider">
                                                    <input className="range-slider-input" type="range" min={0} max={120000} step={1} defaultValue={20000} />
                                                    <input className="range-slider-input" type="range" min={0} max={120000} step={1} defaultValue={100000} />
                                                    <div className="range-slider-display" data-low={20000} data-high={100000} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne"><span>Color</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseOne">
                                            <div className="accordion-body">
                                                <div className="color-box">
                                                    <ul className="color-variant">
                                                        <li className="bg-color-purple" />
                                                        <li className="bg-color-blue" />
                                                        <li className="bg-color-red" />
                                                        <li className="bg-color-yellow" />
                                                        <li className="bg-color-coffee" />
                                                        <li className="bg-color-chocolate" />
                                                        <li className="bg-color-brown" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix"><span>Availability</span></button>
                                        </h2>
                                        <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseSix">
                                            <div className="accordion-body">
                                                <ul className="catagories-side">
                                                    <li>
                                                        <input className="custom-radio" id="category9" type="radio" defaultChecked="checked" name="radio" />
                                                        <label htmlFor="category9">In Stock(3)</label>
                                                    </li>
                                                    <li>
                                                        <input className="custom-radio" id="category14" type="radio" name="radio" />
                                                        <label htmlFor="category14">Out Of Stock(1)</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header tags-header">
                                            <button className="accordion-button"><span>Shipping &amp; Delivery</span><span /></button>
                                        </h2>
                                        <div className="accordion-collapse collapse show" id="panelsStayOpen-collapseSeven">
                                            <div className="accordion-body">
                                                <ul className="widget-card">
                                                    <li><i className="iconsax" data-icon="truck-fast"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.9998 14.75H11.9998C11.5898 14.75 11.2498 14.41 11.2498 14C11.2498 13.59 11.5898 13.25 11.9998 13.25H12.9998C13.6898 13.25 14.2498 12.69 14.2498 12V2.75H5.99978C4.81978 2.75 3.73975 3.38998 3.15975 4.41998C2.95975 4.77998 2.49979 4.91002 2.13979 4.71002C1.77979 4.51002 1.64975 4.05 1.84975 3.69C2.68975 2.19 4.27978 1.25 5.99978 1.25H14.9998C15.4098 1.25 15.7498 1.59 15.7498 2V12C15.7498 13.52 14.5198 14.75 12.9998 14.75Z" fill="#292D32" />
                                                        <path d="M19 20.75H18C17.59 20.75 17.25 20.41 17.25 20C17.25 19.31 16.69 18.75 16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.41 14.41 20.75 14 20.75H10C9.59 20.75 9.25 20.41 9.25 20C9.25 19.31 8.69 18.75 8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.41 6.41 20.75 6 20.75H5C2.93 20.75 1.25 19.07 1.25 17C1.25 16.59 1.59 16.25 2 16.25C2.41 16.25 2.75 16.59 2.75 17C2.75 18.24 3.76 19.25 5 19.25H5.34998C5.67998 18.1 6.74 17.25 8 17.25C9.26 17.25 10.32 18.1 10.65 19.25H13.36C13.69 18.1 14.75 17.25 16.01 17.25C17.27 17.25 18.33 18.1 18.66 19.25H19C20.24 19.25 21.25 18.24 21.25 17V14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.03 8.25 19 8.25L17.93 6.38C17.71 5.99 17.29 5.75 16.84 5.75H15.75V12C15.75 13.52 14.52 14.75 13 14.75H12C11.59 14.75 11.25 14.41 11.25 14C11.25 13.59 11.59 13.25 12 13.25H13C13.69 13.25 14.25 12.69 14.25 12V5C14.25 4.59 14.59 4.25 15 4.25H16.84C17.83 4.25 18.74 4.78001 19.23 5.64001L20.94 8.63C21.07 8.86 21.07 9.15 20.94 9.38C20.81 9.61 20.56 9.75 20.29 9.75H19C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H22C22.41 13.25 22.75 13.59 22.75 14V17C22.75 19.07 21.07 20.75 19 20.75Z" fill="#292D32" />
                                                        <path d="M8 22.75C6.48 22.75 5.25 21.52 5.25 20C5.25 18.48 6.48 17.25 8 17.25C9.52 17.25 10.75 18.48 10.75 20C10.75 21.52 9.52 22.75 8 22.75ZM8 18.75C7.31 18.75 6.75 19.31 6.75 20C6.75 20.69 7.31 21.25 8 21.25C8.69 21.25 9.25 20.69 9.25 20C9.25 19.31 8.69 18.75 8 18.75Z" fill="#292D32" />
                                                        <path d="M16 22.75C14.48 22.75 13.25 21.52 13.25 20C13.25 18.48 14.48 17.25 16 17.25C17.52 17.25 18.75 18.48 18.75 20C18.75 21.52 17.52 22.75 16 22.75ZM16 18.75C15.31 18.75 14.75 19.31 14.75 20C14.75 20.69 15.31 21.25 16 21.25C16.69 21.25 17.25 20.69 17.25 20C17.25 19.31 16.69 18.75 16 18.75Z" fill="#292D32" />
                                                        <path d="M22 14.75H19C18.04 14.75 17.25 13.96 17.25 13V10C17.25 9.04 18.04 8.25 19 8.25H20.29C20.56 8.25 20.81 8.39 20.94 8.63L22.65 11.63C22.71 11.74 22.75 11.87 22.75 12V14C22.75 14.41 22.41 14.75 22 14.75ZM19 9.75C18.86 9.75 18.75 9.86 18.75 10V13C18.75 13.14 18.86 13.25 19 13.25H21.25V12.2L19.85 9.75H19Z" fill="#292D32" />
                                                        <path d="M8 8.75H2C1.59 8.75 1.25 8.41 1.25 8C1.25 7.59 1.59 7.25 2 7.25H8C8.41 7.25 8.75 7.59 8.75 8C8.75 8.41 8.41 8.75 8 8.75Z" fill="#292D32" />
                                                        <path d="M6 11.75H2C1.59 11.75 1.25 11.41 1.25 11C1.25 10.59 1.59 10.25 2 10.25H6C6.41 10.25 6.75 10.59 6.75 11C6.75 11.41 6.41 11.75 6 11.75Z" fill="#292D32" />
                                                        <path d="M4 14.75H2C1.59 14.75 1.25 14.41 1.25 14C1.25 13.59 1.59 13.25 2 13.25H4C4.41 13.25 4.75 13.59 4.75 14C4.75 14.41 4.41 14.75 4 14.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i>
                                                        <div>
                                                            <h6>Free Shipping</h6>
                                                            <p>Free shipping for all US order</p>
                                                        </div>
                                                    </li>
                                                    <li><i className="iconsax" data-icon="headphones"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.46005 18.49V15.57C5.46005 14.6 6.22005 13.73 7.30005 13.73C8.27005 13.73 9.14005 14.49 9.14005 15.57V18.38C9.14005 20.33 7.52005 21.9501 5.57005 21.9501C3.62005 21.9501 2.00005 20.32 2.00005 18.38V12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i>
                                                        <div>
                                                            <h6>Support 24/7</h6>
                                                            <p>Free shipping for all US order</p>
                                                        </div>
                                                    </li>
                                                    <li><i className="iconsax" data-icon="exchange"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.2788 11.1993C17.0888 11.1993 16.8988 11.1292 16.7488 10.9792C16.4588 10.6892 16.4588 10.2092 16.7488 9.91922L19.9388 6.72922L16.7488 3.53922C16.4588 3.24922 16.4588 2.76922 16.7488 2.47922C17.0387 2.18922 17.5187 2.18922 17.8087 2.47922L21.5288 6.19925C21.6688 6.33925 21.7488 6.52922 21.7488 6.72922C21.7488 6.92922 21.6688 7.11925 21.5288 7.25925L17.8087 10.9792C17.6587 11.1192 17.4688 11.1993 17.2788 11.1993Z" fill="#292D32" />
                                                        <path d="M21 7.48047H3C2.59 7.48047 2.25 7.14047 2.25 6.73047C2.25 6.32047 2.59 5.98047 3 5.98047H21C21.41 5.98047 21.75 6.32047 21.75 6.73047C21.75 7.14047 21.41 7.48047 21 7.48047Z" fill="#292D32" />
                                                        <path d="M6.71997 21.75C6.52997 21.75 6.34 21.68 6.19 21.53L2.46997 17.81C2.32997 17.67 2.25 17.48 2.25 17.28C2.25 17.08 2.32997 16.89 2.46997 16.75L6.19 13.03C6.48 12.74 6.96 12.74 7.25 13.03C7.54 13.32 7.54 13.8 7.25 14.09L4.06 17.28L7.25 20.4699C7.54 20.7599 7.54 21.24 7.25 21.53C7.11 21.68 6.91997 21.75 6.71997 21.75Z" fill="#292D32" />
                                                        <path d="M21 18.0195H3C2.59 18.0195 2.25 17.6795 2.25 17.2695C2.25 16.8595 2.59 16.5195 3 16.5195H21C21.41 16.5195 21.75 16.8595 21.75 17.2695C21.75 17.6795 21.41 18.0195 21 18.0195Z" fill="#292D32" />
                                                    </svg>
                                                    </i>
                                                        <div>
                                                            <h6>30 Days Return</h6>
                                                            <p>Free shipping for all US order</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="sticky">
                                <div className="top-filter-menu">
                                    <div> <a className="filter-button btn">
                                        <h6> <i className="iconsax" data-icon="filter"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.40002 2.09998H18.6C19.7 2.09998 20.6 2.99998 20.6 4.09998V6.29998C20.6 7.09998 20.1 8.09998 19.6 8.59998L15.3 12.4C14.7 12.9 14.3 13.9 14.3 14.7V19C14.3 19.6 13.9 20.4 13.4 20.7L12 21.6C10.7 22.4 8.90002 21.5 8.90002 19.9V14.6C8.90002 13.9 8.50002 13 8.10002 12.5L4.30002 8.49998C3.80002 7.99998 3.40002 7.09998 3.40002 6.49998V4.19998C3.40002 2.99998 4.30002 2.09998 5.40002 2.09998Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.93 2.09998L6 9.99998" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        </i>Filter Menu </h6></a>
                                        <div className="category-dropdown">
                                            <label htmlFor="cars">Sort By :</label>
                                            <select className="form-select" id="cars" name="carlist">
                                                <option value>Best selling</option>
                                                <option value>Popularity</option>
                                                <option value>Featured</option>
                                                <option value>Alphabetically, Z-A</option>
                                                <option value>High - Low Price</option>
                                                <option value>% Off - Hight To Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <ul className="filter-option-grid">
                                        <li className="nav-item d-none d-md-flex">
                                            <button className="nav-link" data-grid={2}>
                                                <svg>
                                                    <use href="../assets/svg/icon-sprite.svg#grid-2" />
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="nav-item d-none d-md-flex">
                                            <button className="nav-link" data-grid={3}>
                                                <svg>
                                                    <use href="../assets/svg/icon-sprite.svg#grid-3" />
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="nav-item d-none d-lg-flex">
                                            <button className="nav-link active" data-grid={4}>
                                                <svg>
                                                    <use href="../assets/svg/icon-sprite.svg#grid-4" />
                                                </svg>
                                            </button>
                                        </li>
                                        <li className="nav-item d-none d-md-flex">
                                            <button className="nav-link" data-grid="list">
                                                <svg>
                                                    <use href="../assets/svg/icon-sprite.svg#grid-list" />
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-tab-content ratio1_3">
                                    <div className="row-cols-lg-4 row-cols-md-3 row-cols-2 grid-section view-option row g-3 g-xl-4">
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/1.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/20.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/20.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv1">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div><span className="title">Days</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">23</div>
                                                                </div><span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">57</div>
                                                                </div><span className="title">Min</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">31</div>
                                                                </div><span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star-half-stroke" /></li>
                                                        <li><i className="fa-regular fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Greciilooks Women's Stylish Top</h6></a>
                                                    <p className="list-per">Fashion is to please your eye. Shapes and proportions are for your intellect. It is important to be chic. Vanity is the healthiest thing in life. Elegance isn't solely defined by what you wear. It's how you carry yourself, how you speak, what you read. Fashion is made to become unfashionable.</p>
                                                    <p>$100.00
                                                        <del>$140.00</del><span>-20%</span>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/2.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/19.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/19.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-regular fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Wide Linen-Blend Trousers</h6></a>
                                                    <p className="list-per">I was the first person to have a punk rock hairstyle. It is not easy to dress well. I have my permanent muses and my muses of the moment. We live in an era of globalization and the era of the woman. Never in the history of the world have women been more in control of their destiny. You have a more interesting life if you wear impressive clothes.</p>
                                                    <p>$100.00
                                                        <del>$18.00 </del>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><span className="lable-1">NEW</span><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/3.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/18.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/18.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv2">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div><span className="title">Days</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">23</div>
                                                                </div><span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">57</div>
                                                                </div><span className="title">Min</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">31</div>
                                                                </div><span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Long Sleeve Rounded T-Shirt</h6></a>
                                                    <p className="list-per">I don't like trends. They tend to make everybody look the same. Clothes can transform your mood and confidence. I like the body. I like to design everything to do with the body. Fashion is made to become unfashionable. I adore the challenge of creating truly modern clothes, where a woman's personality and sense of self are revealed. I want people to see the dress, but focus on the woman.</p>
                                                    <p>$120.30
                                                        <del>$140.00</del><span>-20%</span>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/4.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/17.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/17.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star-half-stroke" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Blue lined White T-Shirt</h6></a>
                                                    <p className="list-per">If you wear clothes that don't suit you, you're a fashion victim. You have to wear clothes that make you look better. I think I'd go mad if I didn't have a place to escape to. In order to be irreplaceable one must always be different. Clothes mean nothing until someone lives in them. It's really easy to get colors right. It's really hard to get black - and neutrals - right. Black is certainly a color but it's also an illusion.</p>
                                                    <p>$190.00
                                                        <del>$210.00</del>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/9.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/9.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/16.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/16.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star-half-stroke" /></li>
                                                        <li><i className="fa-regular fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Greciilooks Women's Stylish Top</h6></a>
                                                    <p className="list-per">I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing. I believe that my clothes can give people a better image of themselves - that it can increase their feelings of confidence and happiness. Every day I'm thinking about change. Luxury will be always around, no matter what happens in the world. I am like a freight train. Working on the details, twisting them and playing with them over the years, but always staying on the same track.</p>
                                                    <p>$100.00
                                                        <del>$140.00</del><span>-20%</span>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><span className="lable-1">NEW</span><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/10.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/10.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/15.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/15.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv4">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div><span className="title">Days</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">23</div>
                                                                </div><span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">57</div>
                                                                </div><span className="title">Min</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">31</div>
                                                                </div><span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-regular fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Wide Linen-Blend Trousers</h6></a>
                                                    <p className="list-per">Fashion fades, only style remains the same. I like the body. I like to design everything to do with the body. Men don't want another man to look at their woman because they don't know how to handle it. The key to my collections is sensuality. I wanted to dress the woman who lives and works, not the woman in a painting.</p>
                                                    <p>$100.00
                                                        <del>$18.00 </del>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/11.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/11.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/14.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/14.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Long Sleeve Rounded T-Shirt</h6></a>
                                                    <p className="list-per">Clothes mean nothing until someone lives in them. I was the first person to have a punk rock hairstyle. You have to stay true to your heritage; that's what your brand is about. What I hate is nasty, ugly people. I never like to think that I design for a particular person. I design for the woman I wanted to be, the woman I used to be, and - to some degree - the woman I'm still a little piece of.</p>
                                                    <p>$120.30
                                                        <del>$140.00</del><span>-20%</span>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/12.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/12.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/13.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/13.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star-half-stroke" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Blue lined White T-Shirt</h6></a>
                                                    <p className="list-per">Every day I'm thinking about change. Fashion to me has become very disposable; I wanted to get back to craft, to clothes that could last. I want people to be afraid of the women I dress. I didn't want to be a fashion designer, and for a good half of my career I didn't like it. I always wanted to do other things. When I was young, I lived like an old woman, and when I got old, I had to live like a young person.</p>
                                                    <p>$190.00
                                                        <del>$210.00</del>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/13.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/13.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/12.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/12.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv5">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div><span className="title">Days</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">23</div>
                                                                </div><span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">57</div>
                                                                </div><span className="title">Min</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">31</div>
                                                                </div><span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star-half-stroke" /></li>
                                                        <li><i className="fa-regular fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Greciilooks Women's Stylish Top</h6></a>
                                                    <p className="list-per">Luxury will be always around, no matter what happens in the world. For me, the summer will be pure gray - mother-of-pearl gray, very pale gray. To me, this is the big statement for summer. Then we have light blue, light turquoise, lots of pink. It is difficult to talk about fashion in the abstract, without a human body before my eyes, without drawings, without a choice of fabric - without a practical or visual reality. The great thing about fashion is that it always looks forward. You have a more interesting life if you wear impressive clothes.</p>
                                                    <p>$100.00
                                                        <del>$140.00</del><span>-20%</span>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/14.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/14.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/11.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/11.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-regular fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Wide Linen-Blend Trousers</h6></a>
                                                    <p className="list-per">I don't like trends. They tend to make everybody look the same. Men have got more of a discerning eye. They appreciate cut and details, things that aren't so obvious. They like things that have cachet and gentlemanliness. I like the things around me to be beautiful and slightly dreamy, with a feeling of worldliness. I think there is something about luxury - it's not something people need, but it's what they want. It really pulls at their heart. Money doesn't buy elegance. You can take an inexpensive sheath, add a pretty scarf, gray shoes, and a wonderful bag, and it will always be elegant.</p>
                                                    <p>$100.00
                                                        <del>$18.00 </del>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/15.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/15.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/4.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Long Sleeve Rounded T-Shirt</h6></a>
                                                    <p className="list-per">Online media is increasingly influential in fashion. Everything I do is a matter of heart, body and soul. A girl should be two things: classy and fabulous. I am not interested in the past, except as the road to the future. Even Michelangelo got paid for doing the Sistine Chapel. To those artists who say they're doing it for the love of art, I say: Get real.</p>
                                                    <p>$120.30
                                                        <del>$140.00</del><span>-20%</span>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/16.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/16.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/3.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star-half-stroke" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Blue lined White T-Shirt</h6></a>
                                                    <p className="list-per">Don't dress to kill, dress to survive. I believe that my clothes can give people a better image of themselves - that it can increase their feelings of confidence and happiness. The only way to do something in depth is to work hard. The key to my collections is sensuality. Delete the negative; accentuate the positive!</p>
                                                    <p>$190.00
                                                        <del>$210.00</del>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/17.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/17.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/2.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv7">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div><span className="title">Days</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">23</div>
                                                                </div><span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">57</div>
                                                                </div><span className="title">Min</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">31</div>
                                                                </div><span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star-half-stroke" /></li>
                                                        <li><i className="fa-regular fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Greciilooks Women's Stylish Top</h6></a>
                                                    <p className="list-per">Clothes mean nothing until someone lives in them. I was the first person to have a punk rock hairstyle. You have to stay true to your heritage; that's what your brand is about. What I hate is nasty, ugly people. I never like to think that I design for a particular person. I design for the woman I wanted to be, the woman I used to be, and - to some degree - the woman I'm still a little piece of.</p>
                                                    <p>$100.00
                                                        <del>$140.00</del><span>-20%</span>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop </a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><span className="lable-1">NEW</span><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/18.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/18.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/1.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-regular fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Wide Linen-Blend Trousers</h6></a>
                                                    <p className="list-per">I try as much as possible to give you a great basic product and what comes out, I feel, is really amazing. I believe that my clothes can give people a better image of themselves - that it can increase their feelings of confidence and happiness. Every day I'm thinking about change. Luxury will be always around, no matter what happens in the world. I am like a freight train. Working on the details, twisting them and playing with them over the years, but always staying on the same track.</p>
                                                    <p>$100.00
                                                        <del>$18.00 </del>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/19.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/19.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/11.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/11.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="countdown">
                                                        <ul className="clockdiv8">
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="days">9</div>
                                                                </div><span className="title">Days</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="hours">23</div>
                                                                </div><span className="title">Hours</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="minutes">57</div>
                                                                </div><span className="title">Min</span>
                                                            </li>
                                                            <li className="dot"> <span>:</span></li>
                                                            <li>
                                                                <div className="timer">
                                                                    <div className="seconds">31</div>
                                                                </div><span className="title">Sec</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Long Sleeve Rounded T-Shirt</h6></a>
                                                    <p className="list-per">A girl should be two things: classy and fabulous. I want people to be afraid of the women I dress. Every day I'm thinking about change. I remember walking the dog one day, I saw a car full of teenage girls, and one of them rolled down the window and yelled, 'Marc Jacobs!' in a French accent. I have a fantastic relationship with money. I use it to buy my freedom.</p>
                                                    <p>$120.30
                                                        <del>$140.00</del><span>-20%</span>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="product-box-3">
                                                <div className="img-wrapper">
                                                    <div className="label-block"><a className="label-2 wishlist-icon" href="javascript:void(0)" tabIndex={0}><i className="iconsax" data-icon="heart" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to Wishlist"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 21.6516C11.69 21.6516 11.39 21.6116 11.14 21.5216C7.32 20.2116 1.25 15.5616 1.25 8.69156C1.25 5.19156 4.08 2.35156 7.56 2.35156C9.25 2.35156 10.83 3.01156 12 4.19156C13.17 3.01156 14.75 2.35156 16.44 2.35156C19.92 2.35156 22.75 5.20156 22.75 8.69156C22.75 15.5716 16.68 20.2116 12.86 21.5216C12.61 21.6116 12.31 21.6516 12 21.6516ZM7.56 3.85156C4.91 3.85156 2.75 6.02156 2.75 8.69156C2.75 15.5216 9.32 19.3216 11.63 20.1116C11.81 20.1716 12.2 20.1716 12.38 20.1116C14.68 19.3216 21.26 15.5316 21.26 8.69156C21.26 6.02156 19.1 3.85156 16.45 3.85156C14.93 3.85156 13.52 4.56156 12.61 5.79156C12.33 6.17156 11.69 6.17156 11.41 5.79156C10.48 4.55156 9.08 3.85156 7.56 3.85156Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a></div>
                                                    <div className="product-image"><a className="pro-first bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/20.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/20.jpg" alt="product" style={{ display: 'none' }} /></a><a className="pro-sec bg-size" href="product.html" style={{ backgroundImage: 'url(https://themes.pixelstrap.net/katie/assets/images/product/product-3/3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}> <img className="bg-img" src="../assets/images/product/product-3/3.jpg" alt="product" style={{ display: 'none' }} /></a></div>
                                                    <div className="cart-info-icon"> <a href="#" data-bs-toggle="modal" data-bs-target="#addtocart" tabIndex={0}><i className="iconsax" data-icon="basket-2" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Add to card"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.99999 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H7.99999C3.72999 8 3.02999 9.99 3.29999 12.43L4.04999 18.43C4.25999 20.39 4.97999 22 8.99999 22Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.4955 12H15.5045" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.49451 12H8.50349" stroke="#292D32" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a><a href="compare.html" tabIndex={0}><i className="iconsax" data-icon="arrow-up-down" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Compare"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.4493 7.46997C10.2593 7.46997 10.0692 7.4 9.91922 7.25L6.72922 4.06L3.53922 7.25C3.24922 7.54 2.76922 7.54 2.47922 7.25C2.18922 6.96 2.18922 6.48 2.47922 6.19L6.19925 2.46997C6.33925 2.32997 6.52922 2.25 6.72922 2.25C6.92922 2.25 7.11925 2.32997 7.25925 2.46997L10.9792 6.19C11.2692 6.48 11.2692 6.96 10.9792 7.25C10.8292 7.4 10.6392 7.46997 10.4493 7.46997Z" fill="#292D32" />
                                                        <path d="M6.73047 21.75C6.32047 21.75 5.98047 21.41 5.98047 21V3C5.98047 2.59 6.32047 2.25 6.73047 2.25C7.14047 2.25 7.48047 2.59 7.48047 3V21C7.48047 21.41 7.14047 21.75 6.73047 21.75Z" fill="#292D32" />
                                                        <path d="M17.28 21.7488C17.08 21.7488 16.89 21.6688 16.75 21.5288L13.03 17.8087C12.74 17.5187 12.74 17.0387 13.03 16.7488C13.32 16.4588 13.8 16.4588 14.09 16.7488L17.28 19.9388L20.4699 16.7488C20.7599 16.4588 21.24 16.4588 21.53 16.7488C21.82 17.0387 21.82 17.5187 21.53 17.8087L17.81 21.5288C17.67 21.6688 17.47 21.7488 17.28 21.7488Z" fill="#292D32" />
                                                        <path d="M17.2695 21.75C16.8595 21.75 16.5195 21.41 16.5195 21V3C16.5195 2.59 16.8595 2.25 17.2695 2.25C17.6795 2.25 18.0195 2.59 18.0195 3V21C18.0195 21.41 17.6895 21.75 17.2695 21.75Z" fill="#292D32" />
                                                    </svg>
                                                    </i></a><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view" tabIndex={0}><i className="iconsax" data-icon="eye" aria-hidden="true" data-bs-toggle="tooltip" data-bs-title="Quick View"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    </i></a></div>
                                                </div>
                                                <div className="product-detail">
                                                    <ul className="rating">
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star" /></li>
                                                        <li><i className="fa-solid fa-star-half-stroke" /></li>
                                                        <li>4.3</li>
                                                    </ul><a href="product.html">
                                                        <h6>Blue lined White T-Shirt</h6></a>
                                                    <p className="list-per">Luxury will be always around, no matter what happens in the world. For me, the summer will be pure gray - mother-of-pearl gray, very pale gray. To me, this is the big statement for summer. Then we have light blue, light turquoise, lots of pink. It is difficult to talk about fashion in the abstract, without a human body before my eyes, without drawings, without a choice of fabric - without a practical or visual reality. The great thing about fashion is that it always looks forward. You have a more interesting life if you wear impressive clothes.</p>
                                                    <p>$190.00
                                                        <del>$210.00</del>
                                                    </p>
                                                    <div className="listing-button"> <a className="btn" href="cart.html">Quick Shop</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination-wrap">
                                    <ul className="pagination">
                                        <li> <a className="prev" href="#"><i className="iconsax" data-icon="chevron-left"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.0013 20.6695C14.8113 20.6695 14.6213 20.5995 14.4713 20.4495L7.95125 13.9295C6.89125 12.8695 6.89125 11.1295 7.95125 10.0695L14.4713 3.54953C14.7613 3.25953 15.2413 3.25953 15.5312 3.54953C15.8212 3.83953 15.8212 4.31953 15.5312 4.60953L9.01125 11.1295C8.53125 11.6095 8.53125 12.3895 9.01125 12.8695L15.5312 19.3895C15.8212 19.6795 15.8212 20.1595 15.5312 20.4495C15.3813 20.5895 15.1912 20.6695 15.0013 20.6695Z" fill="#292D32" />
                                        </svg>
                                        </i></a></li>
                                        <li> <a href="#">1</a></li>
                                        <li> <a className="active" href="#">2</a></li>
                                        <li> <a href="#">3 </a></li>
                                        <li> <a className="next" href="#"> <i className="iconsax" data-icon="chevron-right"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.91156 20.6695C8.72156 20.6695 8.53156 20.5995 8.38156 20.4495C8.09156 20.1595 8.09156 19.6795 8.38156 19.3895L14.9016 12.8695C15.3816 12.3895 15.3816 11.6095 14.9016 11.1295L8.38156 4.60953C8.09156 4.31953 8.09156 3.83953 8.38156 3.54953C8.67156 3.25953 9.15156 3.25953 9.44156 3.54953L15.9616 10.0695C16.4716 10.5795 16.7616 11.2695 16.7616 11.9995C16.7616 12.7295 16.4816 13.4195 15.9616 13.9295L9.44156 20.4495C9.29156 20.5895 9.10156 20.6695 8.91156 20.6695Z" fill="#292D32" />
                                        </svg>
                                        </i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}