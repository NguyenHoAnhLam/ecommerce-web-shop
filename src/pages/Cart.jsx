import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Helmet from '../components/Helmet';
import Button from '../components/Button';
import CartItem from '../components/CartItem';

import productData from '../assets/fake-data/products';
import nocart from '../assets/images/nocart.webp';

import numberWithCommas from '../utils/numberWithCommas';

function Cart() {
    const cartItems = useSelector((state) => state.cartItems.value);

    const [cartProducts, setCartProducts] = useState([]);

    const [totalProducts, setTotalProducts] = useState(0);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartProducts(productData.getCartItemsDetail(cartItems));
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
        setTotalPrice(cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0));
    }, [cartItems]);

    return (
        <Helmet title="Giỏ hàng">
            <div className="cart">
                <div className="cart_info">
                    <div className="cart_info_txt">
                        <p>
                            Bạn đang có <span>{totalProducts}</span> sản phẩm
                        </p>
                        <div className="cart_info_txt_price">
                            <span>Thành tiền</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart_info_btn">
                        <Button size="block">Đặt hàng</Button>
                        <Link to="/catalog">
                            <Button size="block">Tiếp tực mua hàng</Button>
                        </Link>
                    </div>
                </div>
                {cartProducts < 1 ? (
                    <div className="cart_list">
                        <div className="cart_list_no-cart">
                            <img src={nocart} alt="" />
                            <p className="cart_list_no-cart_title">Chưa có sản phẩm </p>
                        </div>
                    </div>
                ) : (
                    <div className="cart_list">
                        {cartProducts.map((item, index) => (
                            <CartItem key={index} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </Helmet>
    );
}

export default Cart;
