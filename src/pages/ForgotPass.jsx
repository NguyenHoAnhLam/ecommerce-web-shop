import React from 'react';

import { Link } from 'react-router-dom';

import Button from '../components/Button';

function ForgotPass() {
    return (
        <div className="login_register">
            <form action="" method="POST" className="form">
                <div className="form_content">
                    <h3 className="form_content_title">QUÊN MẬT KHẨU</h3>
                    <p className="form_content_desc">
                        Nếu bạn quên mật khẩu, vui lòng nhập địa chỉ email đã đăng ký của bạn. Chúng tôi sẽ gửi cho bạn
                        một liên kết để đặt lại mật khẩu.
                    </p>
                    <div className="form_content_group">
                        <input type="email" className="form-control" placeholder="Nhập Email" />
                    </div>
                    <div className="form_content_btn">
                        <Link to="/login">
                            <Button size="block">HỦY</Button>
                        </Link>
                        <Button size="block">TIẾP TỤC</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ForgotPass;
