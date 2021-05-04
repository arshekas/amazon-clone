import React from 'react'
import { useStateValue } from '../../../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({id, title, image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () =>
    {
        dispatch(
            {
                type: "REMOVE_FROM_BASKET",
                id: id
            }
        );
    };
    
    return (
        <div className="checkoutProduct">
            <img 
            className="checkoutProduct__image"
            src={image}
            alt="product" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_) => 
                        (<p>⭐</p>)
                        )
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
