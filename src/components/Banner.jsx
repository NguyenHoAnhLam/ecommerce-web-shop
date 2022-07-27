import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function Banner(props) {
    const data = props.data;

    const timeOut = props.timeOut ? props.timeOut : 3000;

    const [activeBanner, setActiveBanner] = useState(0);

    const [clickLeft, setClickLeft] = useState(true);

    const [clickRight, setClickRight] = useState(true);

    const nextBanner = useCallback(() => {
        const index = activeBanner + 1 === data.length ? data.length - 1 : activeBanner + 1;
        setActiveBanner(index);
    }, [data, activeBanner]);

    const prevBanner = () => {
        const index = activeBanner - 1 < 0 ? 0 : activeBanner - 1;
        setActiveBanner(index);
    };

    useEffect(() => {
        if (activeBanner - 1 < 0) {
            setClickLeft(false);
        } else {
            setClickLeft(true);
        }
        if (activeBanner + 1 === data.length) {
            setClickRight(false);
        } else {
            setClickRight(true);
        }
        if (props.auto) {
            const slideAuto = setInterval(() => {
                nextBanner();
            }, timeOut);
            return () => clearInterval(slideAuto);
        }
    }, [nextBanner, props, timeOut, activeBanner, data.length]);

    return (
        <div className="banner">
            <div className="banner_list">
                {data.map((item, index) => (
                    <Link key={item.id} to="/catalog">
                        <img
                            className={`banner_list_item ${index === activeBanner ? 'active' : ''}`}
                            src={item.img}
                            alt=""
                        />
                    </Link>
                ))}
                <button className={`banner_list_btn_left ${clickLeft ? '' : 'no_click'}`} onClick={prevBanner}>
                    <i className="bx bxs-chevron-left"></i>
                </button>
                <button className={`banner_list_btn_right ${clickRight ? '' : 'no_click'}`} onClick={nextBanner}>
                    <i className="bx bxs-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}

Banner.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool,
    auto: PropTypes.bool,
    timeOut: PropTypes.number,
};

export default Banner;
