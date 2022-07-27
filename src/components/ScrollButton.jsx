import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;

            if (scrolled > 400) {
                setVisible(true);
            } else if (scrolled <= 400) {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, [visible]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`button_scroll ${visible ? 'active' : ''}`}>
            <button onClick={scrollToTop}>
                <i className="bx bxs-chevron-up"></i>
            </button>
        </div>
    );
};

export default ScrollButton;
