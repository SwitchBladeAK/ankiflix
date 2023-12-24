import React, { useState, useEffect } from 'react';

function Copyright() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <p className="copyright">Copyright  &copy;Ankiflix {currentYear}</p>
    );
}

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="socialIcons">
                    <p><Copyright /></p></div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
