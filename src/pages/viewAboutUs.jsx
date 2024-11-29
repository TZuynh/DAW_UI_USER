import Header from "../components/header";
import HeadingBannerAboutUs from "../components/headingbanneraboutus";
import AboutUs from "../components/aboutus";
import Footer from "../components/footer";
import FooterApi from '../services/footerApi';
import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from "react";

export default function ViewAboutUs() {
    const [title, setTitle] = useState({});

    const fetchFooter = async () => {
        try {
            const response = await FooterApi.getAll();
            setTitle(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized, please log in');
            } else {
                console.log('Failed to fetch footer', error);
            }
        }
    };

    useEffect(() => {
        fetchFooter();
        document.title = title?.content || "Katie";
    }, []);

    useEffect(() => {
        if (title?.title) {
            document.title = title.content;
        }
    }, [title]);
    return (
        <>
            <Helmet>
                {title.content}
            </Helmet>
            <Header />
            <HeadingBannerAboutUs />
            <AboutUs />
            <Footer />
        </>
    )
}