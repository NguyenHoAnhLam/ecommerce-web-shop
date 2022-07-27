import React from 'react';

import { Link } from 'react-router-dom';

import Grid from './Grid';

import logo from '../assets/images/logo.webp';

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: '/about',
    },
    {
        display: 'Liên hệ',
        path: '/about',
    },
    {
        display: 'Tuyển dụng',
        path: '/about',
    },
    {
        display: 'Tin tức',
        path: '/about',
    },
    {
        display: 'Thông tin cửa hàng',
        path: '/about',
    },
];

const footerCustomerLinks = [
    {
        display: 'Chính sách đổi trả',
        path: '/about',
    },
    {
        display: 'Chính sách  bảo hành',
        path: '/about',
    },
    {
        display: 'Chính sách hoàn tiền',
        path: '/about',
    },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <Grid col={4} mdCol={2} smCol={1} gap={10}>
                    <div>
                        <div className="footer_title">Tổng đài hỗ trợ</div>
                        <div className="footer_content">
                            <p>
                                Liên hệ đặt hàng <strong>0848844223</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>0848844223</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>0848844223</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer_title">Về Yody</div>
                        <div className="footer_content">
                            {footerAboutLinks.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="footer_title">Chăm sóc khách hàng</div>
                        <div className="footer_content">
                            {footerCustomerLinks.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>{item.display}</Link>
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="footer_about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer_logo" alt="" />
                            </Link>
                        </p>
                        <p>
                            Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ
                            mệnh, là triết lý, chiến lược.. luôn cùng YODY tiến bước
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;
