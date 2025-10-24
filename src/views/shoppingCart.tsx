import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../controllers/cartController';

const ShoppingCart: React.FC = () => {
    const cartItems = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId: string) => {
        dispatch(removeItemFromCart(itemId));
    };

    const handleCheckout = () => {
        // Logic to navigate to checkout page
    };

    return (
        <div className="shopping-cart">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <span>{item.name} - ${item.price}</span>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={handleCheckout} disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default ShoppingCart;