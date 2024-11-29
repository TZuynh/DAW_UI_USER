import React, { useState, useEffect } from "react";

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Concrete Jungle Pack",
            price: 20.000,
            quantity: 1,
            total: 20.000,
            size: "Small",
            seller: "Roger Group",
            imgSrc: "../assets/images/cart/category/1.jpg",
        },
    ]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
            minimumFractionDigits: 3,
        }).format(amount);
    };

    const [discount, setDiscount] = useState(50);

    // Hàm tính tổng
    const calculateTotal = () => {
        const subtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
        const effectiveShippingFee = subtotal > 300.000 ? 0 : 50.000;
        const finalTotal = subtotal + effectiveShippingFee - discount;
        return {
            subtotal,
            shippingFee: effectiveShippingFee,
            finalTotal,
        };
    };

    // Xóa tất cả sản phẩm
    const handleClearAll = () => {
        setCartItems([]);
    };

    // Xử lý tăng số lượng
    const handleIncrease = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity: Math.min(item.quantity + 1, 20),
                    total: Math.min(item.quantity + 1, 20) * item.price,
                }
                : item
        );
        setCartItems(updatedCart);
    };

    // Xử lý giảm số lượng
    const handleDecrease = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity: Math.max(item.quantity - 1, 1),
                    total: Math.max(item.quantity - 1, 1) * item.price,
                }
                : item
        );
        setCartItems(updatedCart);
    };

    // Xử lý xóa sản phẩm
    const handleRemove = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    // Tính tổng giá trị
    const { subtotal, shippingFee, finalTotal } = calculateTotal();

    return (
        <section className="section-b-space pt-0">
            <div className="custom-container container">
                <div className="row g-4">
                    <div className="col-xxl-9 col-xl-8">
                        <div className="cart-table">
                            {/* Table Header */}
                            <div className="table-title">
                                <h5>Cart<span id="cartTitle">({cartItems.length})</span></h5>
                                <button id="clearAllButton" onClick={handleClearAll}>Clear All</button>
                            </div>

                            {/* Table Body */}
                            <div className="table-responsive theme-scrollbar">
                                <table className="table" id="cart-table">
                                    <thead>
                                        <tr>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.length > 0 ? (
                                            cartItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <div className="cart-box">
                                                            <a href="product.html">
                                                                <img src={item.imgSrc} alt={item.name} />
                                                            </a>
                                                            <div>
                                                                <a href="product.html"><h5>{item.name}</h5></a>
                                                                <p>Sold By: <span>{item.seller}</span></p>
                                                                <p>Size: <span>{item.size}</span></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{formatCurrency(item.price)}</td>
                                                    <td>
                                                        <div className="quantity">
                                                            <button
                                                                className="minus"
                                                                type="button"
                                                                onClick={() => handleDecrease(item.id)}
                                                            >-</button>
                                                            <input type="number" value={item.quantity} readOnly />
                                                            <button
                                                                className="plus"
                                                                type="button"
                                                                onClick={() => handleIncrease(item.id)}
                                                            >+</button>
                                                        </div>
                                                    </td>
                                                    <td>{formatCurrency(item.total)}</td>
                                                    <td>
                                                        <button
                                                            className="remove"
                                                            onClick={() => handleRemove(item.id)}
                                                        ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M10.33 16.5H13.66" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                <path d="M9.5 12.5H14.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" style={{ textAlign: "center" }}>Your cart is empty.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Tổng giá trị */}
                    <div className="col-xxl-3 col-xl-4">
                        <div className="total-price">
                            <h2>Tổng tiền</h2>
                            <ul>
                                <li>
                                    <p>Mua trên 300k sẽ được miễn phí vận chuyển</p>
                                    <p>Tạm tính: </p>
                                    <h4>{formatCurrency(subtotal)}</h4>
                                </li>
                                <li>
                                    <p>Tiền vận chuyển: </p>
                                    <h4>{formatCurrency(shippingFee)}</h4>
                                </li>
                            </ul>
                            <li>
                                <p>Giảm giá: </p>
                                <h4>-{formatCurrency(discount)}</h4>
                            </li>
                            <h6>Tổng tiền phải trả: </h6>
                            <h4>{formatCurrency(finalTotal)}</h4>
                        </div>
                        <div className="coupon-box">
                            {" "}
                            <h6>Giảm giá</h6>
                            <ul>
                                {" "}
                                <li>
                                    {" "}
                                    <span>
                                        {" "}
                                        <input type="text" placeholder="Áp dụng mã giảm giá" />
                                        <i className="iconsax me-1" data-icon="tag-2">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.0691 21.9813C10.6591 21.9813 9.23911 21.4413 8.16911 20.3713L3.63911 15.8413C2.53911 14.7413 1.95911 13.2213 2.02911 11.6713L2.26911 6.6613C2.37911 4.2713 4.26911 2.3813 6.66911 2.2613L11.6691 2.0213C13.2291 1.9513 14.7391 2.5313 15.8391 3.6313L20.3691 8.1613C22.5191 10.3113 22.5191 13.8213 20.3691 15.9713L15.9791 20.3613C14.8991 21.4413 13.4891 21.9813 12.0691 21.9813ZM4.69911 14.7713L9.22911 19.3013C10.7991 20.8713 13.3491 20.8713 14.9191 19.3013L19.3091 14.9113C20.8791 13.3413 20.8791 10.7913 19.3091 9.2213L14.7691 4.7013C13.9691 3.9013 12.8791 3.4813 11.7291 3.5313L6.72911 3.7713C5.10911 3.8413 3.83911 5.1113 3.75911 6.7313L3.51911 11.7413C3.46911 12.8613 3.89911 13.9713 4.69911 14.7713Z"
                                                    fill="#292D32"
                                                />
                                                <path
                                                    d="M9.5 12.75C7.71 12.75 6.25 11.29 6.25 9.5C6.25 7.71 7.71 6.25 9.5 6.25C11.29 6.25 12.75 7.71 12.75 9.5C12.75 11.29 11.29 12.75 9.5 12.75ZM9.5 7.75C8.54 7.75 7.75 8.54 7.75 9.5C7.75 10.46 8.54 11.25 9.5 11.25C10.46 11.25 11.25 10.46 11.25 9.5C11.25 8.54 10.46 7.75 9.5 7.75Z"
                                                    fill="#292D32"
                                                />
                                                <path
                                                    d="M13.0014 17.7514C12.8114 17.7514 12.6214 17.6814 12.4714 17.5314C12.1814 17.2414 12.1814 16.7614 12.4714 16.4714L16.4714 12.4714C16.7614 12.1814 17.2414 12.1814 17.5314 12.4714C17.8214 12.7614 17.8214 13.2414 17.5314 13.5314L13.5314 17.5314C13.3814 17.6814 13.1914 17.7514 13.0014 17.7514Z"
                                                    fill="#292D32"
                                                />
                                            </svg>
                                        </i>
                                    </span>
                                    <button className="btn">Apply </button>
                                </li>
                                <li>
                                    {" "}
                                    <span>
                                        {" "}
                                        <a className="theme-color" href="login.html">
                                            Đăng nhập {" "}
                                        </a>
                                        sẽ có nhiều mã giảm giá tốt nhất cho bạn{" "}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <a className="btn btn_black w-100 rounded sm" href="check-out.html">
                            Thanh toán
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
