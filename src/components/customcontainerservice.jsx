
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TfiGift } from "react-icons/tfi";



export default function CustomContainerService() {
    const iconStyle = {
        fontSize: '3rem', // Kích thước biểu tượng

    };
    return (
        <>
            <section className="section-t-space">
                <div className="custom-container container service">
                    <ul>
                        <li>
                            <div className="service-block">
                                <LiaShippingFastSolid style={iconStyle} />
                                <div>
                                    <h6>Free Shipping Worldwide</h6>
                                    <p>Apply to all orders over $800</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="service-block">
                                <PiKeyReturn style={iconStyle} />
                                <div>
                                    <h6>Return &amp; Exchanges</h6>
                                    <p>Complete warranty</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="service-block">
                                <MdOutlineSupportAgent style={iconStyle} />
                                <div>
                                    <h6>Technical Support</h6>
                                    <p>Service support 24/7</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="service-block border-0">
                                <TfiGift style={iconStyle} />
                                <div>
                                    <h6>Daily Gift Vouchers</h6>
                                    <p>Shopping now is more fun</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
