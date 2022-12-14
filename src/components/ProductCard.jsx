import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { set } from '../redux/product-modal/productModalSlice';

import Button from './Button';

import numberWithCommas from '../utils/numberWithCommas';

const ProductCard = (props) => {
    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}>
                <div className="product-card_img">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className="product-card_name">{props.name}</h3>
                <div className="product-card_price">
                    {numberWithCommas(props.price)}
                    <span className="product-card_price_old">
                        <del>{numberWithCommas(499000)}</del>
                    </span>
                </div>
            </Link>
            <div className="product-card_btn">
                <Button size="sm" icon="bx bx-cart" animate onClick={() => dispatch(set(props.slug))}>
                    Chọn mua
                </Button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default ProductCard;
