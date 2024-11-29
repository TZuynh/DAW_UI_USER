import React, { useState } from "react";
import ContactApi from '../services/contactApi';

export default function Contact() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState({
        success: false,
        error: false,
        message: ""
    });

    // Handle changes to input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({
            ...contact,
            [name]: value
        });
    };

    // Validate the form before submission
    const validateForm = () => {
        if (!contact.name || !contact.email || !contact.phone || !contact.subject || !contact.message) {
            setStatus({
                success: false,
                error: true,
                message: "Vui lòng điền đầy đủ tất cả các trường!"
            });
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Validate the form
        if (!validateForm()) {
            return; // Stop if validation fails
        }

        try {
            // Send the contact data to the backend API
            const response = await ContactApi.store(contact);

            // Set success message
            setStatus({
                success: true,
                error: false,
                message: "Thông tin liên hệ đã được gửi thành công!"
            });

            // Optionally, reset the form after successful submission
            setContact({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.log('Failed to save contact', error);

            // Set error message
            setStatus({
                success: false,
                error: true,
                message: "Đã xảy ra lỗi, vui lòng thử lại!"
            });
        }
    };

    return (
        <section className="section-b-space pt-0">
            <div className="custom-container container">
                <div className="contact-main">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="contact-box">
                                <h4>Liên hệ với chúng tôi</h4>
                                <p>
                                    Nếu bạn có những sản phẩm tuyệt vời hoặc muốn cộng tác, hãy liên hệ
                                    cho chúng tôi.
                                </p>
                                <div className="contact-form">
                                    {/* Display success or error message */}
                                    {status.message && (
                                        <div
                                            className={`alert ${status.success ? "alert-success" : "alert-danger"
                                                }`}
                                            role="alert"
                                        >
                                            {status.message}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="row gy-4">
                                            <div className="col-12">
                                                <label className="form-label" htmlFor="name">
                                                    Họ Tên
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    value={contact.name}
                                                    onChange={handleChange}
                                                    placeholder="Nhập họ tên"
                                                />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label" htmlFor="email">
                                                    Địa chỉ email
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={contact.email}
                                                    onChange={handleChange}
                                                    placeholder="Nhập địa chỉ email"
                                                />
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label" htmlFor="phone">
                                                    Số điện thoại
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="phone"
                                                    type="number"
                                                    name="phone"
                                                    value={contact.phone}
                                                    onChange={handleChange}
                                                    placeholder="Nhập số điện thoại"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label" htmlFor="subject">
                                                    Chủ đề
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="subject"
                                                    type="text"
                                                    name="subject"
                                                    value={contact.subject}
                                                    onChange={handleChange}
                                                    placeholder="Chủ đề"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label className="form-label">Tin nhắn</label>
                                                <textarea
                                                    className="form-control"
                                                    id="message"
                                                    name="message"
                                                    rows={6}
                                                    value={contact.message}
                                                    onChange={handleChange}
                                                    placeholder="Nhập tin nhắn"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn_black rounded sm" type="submit">
                                                    Gửi tin nhắn
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {" "}
                        <img
                            className="img-fluid for-dark"
                            src="../assets/images/logo/logo-white-1.png"
                            alt="logo"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
