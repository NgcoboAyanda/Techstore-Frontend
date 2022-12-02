import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Features/Ui/UiSlice';
import ProductCard from '../ProductCard/ProductCard';
import ProductCardSkeletonLoader from '../ProductCardSkeletonLoader/ProductCardSkeletonLoader';

import './ProductGrid.css';

const ProductGrid = ({ products=[], size })=> {

    const dispatch = useDispatch()

    const renderProductGridSkeletons = () => {
        let emptyList = []
        for (let i=1; i <=20; i++){
            emptyList.push(i)
        }
        return emptyList.map((item)=>{
            return (
                <React.Fragment key={item}>
                    <ProductCardSkeletonLoader/>
                </React.Fragment>
            )
        })
    }

    const renderProductGridCards = () => {
        return products.map(product=>{
            return (
                <React.Fragment key={product.id}>
                    <ProductCard
                        name = {product.name}
                        image= {product.image}
                        price = {product.price}
                        id = {product.id}
                        link= {product.link}
                        size={size}
                        addToCart={()=>dispatch(addToCart(product))}
                    />
                </React.Fragment>
            )
        })
    }

    const renderProductGridItems = () => {
        if(products.length === 0){
            //if there are no products
            return (
                <>
                    {renderProductGridSkeletons()}
                </>
            )
        }
        else {
            //there are products
            return (
                <>
                    {renderProductGridCards()}
                </>
            )
        }
    }

    return (
        <div className="product-grid">
            <div className="product-grid__inner">
                {renderProductGridItems()}
            </div>
        </div>
    )
}

export default ProductGrid;