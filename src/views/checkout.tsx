import React, { useState } from 'react';

const Checkout: React.FC = () => {
    const [paymentMethod, setPaymentMethod] = useState('mpesa');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleCheckout = () => {
        setIsProcessing(true);
        // Logic to initiate checkout and process payment
        // This would typically involve calling an API endpoint
        // For now, we'll simulate a successful payment process
        setTimeout(() => {
            alert('Payment processed successfully via M-Pesa!');
            setIsProcessing(false);
        }, 2000);
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div>
                <label>
                    Payment Method:
                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                        <option value="mpesa">M-Pesa</option>
                        {/* Additional payment methods can be added here */}
                    </select>
                </label>
            </div>
            <button onClick={handleCheckout} disabled={isProcessing}>
                {isProcessing ? 'Processing...' : 'Checkout'}
            </button>
        </div>
    );
};

export default Checkout;