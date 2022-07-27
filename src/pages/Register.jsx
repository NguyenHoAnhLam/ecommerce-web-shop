import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../components/Button';

function Register() {
    return (
        <div className="login_register">
            <form action="" method="POST" className="form">
                <div className="form_content">
                    <h3 className="form_content_title">
                        <Link to="/login">
                            <i class="bx bx-chevron-left"></i>
                        </Link>
                        ĐĂNG KÝ THÀNH VIÊN MỚI
                    </h3>
                    <div className="form_content_group">
                        <input type="text" className="form-control" placeholder="Tên" />
                        <input type="text" className="form-control" placeholder="Họ" />
                    </div>
                    <div className="form_content_group">
                        <input type="text" className="form-control" placeholder="Số điện thoại" />
                    </div>
                    <div className="form_content_group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form_content_group">
                        <input type="password" className="form-control" placeholder="Mật khẩu" />
                    </div>
                    <Button size="block">ĐĂNG KÝ</Button>
                    <div className="form_content_social">
                        <p>---Hoặc---</p>
                        <div className="form_content_social_item">
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="" />
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;
