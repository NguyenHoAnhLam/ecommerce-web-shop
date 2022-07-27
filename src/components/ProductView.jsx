import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { addItem } from '../redux/shopping-cart/cartItemSilde';

import { useNavigate } from 'react-router-dom';

import Button from './Button';
import numberWithCommas from '../utils/numberWithCommas';

function ProductView(props) {
    const dispatch = useDispatch();

    let product = props.product;

    if (product === undefined) {
        product = {
            price: 0,
            title: '',
            colors: [],
            size: [],
        };
    }

    let navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState(product.image01);

    const [descExpand, setDescExpand] = useState(false);

    const [color, setColor] = useState(undefined);

    const [size, setSize] = useState(undefined);

    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1);
        } else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
        }
    };

    useEffect(() => {
        setPreviewImage(product.image01);
        setQuantity(1);
        setColor(undefined);
        setSize(undefined);
    }, [product]);

    const check = () => {
        if (color === undefined) {
            alert('Vui lòng chọn màu sắc !');
            return false;
        }

        if (size === undefined) {
            alert('Vui lòng chọn size !');
            return false;
        }
        return true;
    };

    const addToCart = () => {
        if (check()) {
            dispatch(
                addItem({
                    slug: product.slug,
                    color: color,
                    size: size,
                    quantity: quantity,
                    price: product.price,
                }),
            );
            alert('Thêm vào giỏ hàng thành công !');
        }
    };

    const gotoCart = () => {
        if (check()) {
            dispatch(
                addItem({
                    slug: product.slug,
                    color: color,
                    size: size,
                    quantity: quantity,
                    price: product.price,
                }),
            );
            navigate('/cart');
        }
    };

    return (
        <div className="product">
            <div className="product_img">
                <div className="product_img_list">
                    <div className="product_img_list_item">
                        <img src={product.image01} alt="" onClick={() => setPreviewImage(product.image01)} />
                    </div>
                    <div className="product_img_list_item">
                        <img src={product.image02} alt="" onClick={() => setPreviewImage(product.image02)} />
                    </div>
                </div>
                <div className="product_img_main">
                    <img src={previewImage} alt="" />
                </div>
                <div className={`product-desc ${descExpand ? 'expand' : ''}`}>
                    <div className="product-desc_title">Chi tiết sản phẩm</div>
                    <div
                        className="product-desc_content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                    <div className="product-desc_toggle">
                        <Button size="sm" onClick={() => setDescExpand(!descExpand)}>
                            {descExpand ? 'Thu gọn ' : 'Xem Thêm'}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product_info">
                <h1 className="product_info_title">{product.title}</h1>
                <div className="product_info_item">
                    <span className="product_info_item_price">{numberWithCommas(product.price)}</span>
                </div>
                <div className="product_info_item">
                    <div className="product_info_item_title">Màu sắc</div>
                    <div className="product_info_item_list">
                        {product.colors.map((item, index) => (
                            <div
                                key={index}
                                className={`product_info_item_list_child ${color === item ? 'active' : ''}`}
                                onClick={() => setColor(item)}
                            >
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product_info_item">
                    <div className="product_info_item_title">Kích cỡ</div>
                    <div className="product_info_item_list">
                        {product.size.map((item, index) => (
                            <div
                                key={index}
                                className={`product_info_item_list_child ${size === item ? 'active' : ''}`}
                                onClick={() => setSize(item)}
                            >
                                <span className="product_info_item_list_child_size">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product_info_item">
                    <div className="product_info_item_title">Số lượng</div>
                    <div className="product_info_item_quantity">
                        <div className="product_info_item_quantity_btn" onClick={() => updateQuantity('minus')}>
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product_info_item_quantity_input">{quantity}</div>
                        <div className="product_info_item_quantity_btn" onClick={() => updateQuantity('plus')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product_info_item">
                    <Button size="sm" onClick={addToCart}>
                        Thêm vào giỏ hàng
                    </Button>
                    <Button size="sm" onClick={gotoCart}>
                        Mua ngay
                    </Button>
                </div>
            </div>
        </div>
    );
}

ProductView.propTypes = {
    product: PropTypes.object,
};

export default ProductView;
