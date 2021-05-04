import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../../StateProvider';
import { getBasketTotal } from '../../../reducer';


function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();
    
    const  getTotal = () => {
        let total = 0;
        basket.forEach((item) => {
            total += item.price;
        })
        return total;
    }
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket.length} items): <strong>${getTotal()}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Prepare to Checkout</button>
        </div>
    )
}

export default Subtotal
