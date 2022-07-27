import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import logo from '../assets/images/logo.webp';

const mainNav = [
    {
        display: 'Trang chủ',
        path: '/',
    },
    {
        display: 'Sản phẩm',
        path: '/catalog',
    },
    {
        display: 'Phụ kiện',
        path: '/accessories',
    },
    {
        display: 'Liên hệ',
        path: '/contact',
    },
];

function Header() {
    const { pathname } = useLocation();
    const activeNav = mainNav.findIndex((e) => e.path === pathname);

    const cartItems = useSelector((state) => state.cartItems.value);

    const [count, setCount] = useState(0);

    const headerRef = useRef(null);

    useEffect(() => {
        setCount(cartItems.length);
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        });
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, [cartItems]);

    const menuLeft = useRef(null);

    const menuToggle = () => menuLeft.current.classList.toggle('active');

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header_logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header_menu">
                    <div className="header_menu_mobile-toggle" onClick={menuToggle}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header_menu_left" ref={menuLeft}>
                        <div className="header_menu_left-close" onClick={menuToggle}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {mainNav.map((item, index) => (
                            <div
                                key={index}
                                className={`header_menu_left-item header_menu-item ${
                                    index === activeNav ? 'active' : ''
                                }`}
                                onClick={menuToggle}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="header_menu_right">
                        <div className="header_menu_right-item header_menu-item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header_menu_right-item header_menu-item">
                            <Link to="/cart">
                                <i className="bx bx-cart"></i>
                                {count > 0 ? <span className="badge_cart">{count}</span> : null}
                            </Link>
                        </div>
                        <div className="header_menu_right-item header_menu-item">
                            <Link to="/login">
                                <i className="bx bx-user"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
