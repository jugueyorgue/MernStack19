import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItemComponent from "./CartItemComponent";
import CartSummary from "./CartSummary";

const CheckoutComponent = () => {
    const [paymentMade, setPaymentMade] = useState(false);

    // Reading data from the Redux store
    const user = useSelector((state) => state.userReducer.user);
    const cartList = useSelector((state) => state.cartReducer);

    // Calculate the summary data
    const calculateSummaryData = (cartItems) => {
        let amount = 0,
            count = 0;

        for (let item of cartItems) {
            amount += parseInt(item.qty) * parseInt(item.price);
            count += parseInt(item.qty);
        }

        return {
            amount,
            count,
        };
    };

    const handlePayment = () => {
        setPaymentMade(true);
    };

    return (
        <div className="col-md-12">
            {!paymentMade ? (
                <>
                    <h2>Checkout Page</h2>
                    <div>
                        <h5>We will deliver the products to the address below:</h5>
                        <p><strong>Name:</strong> {user.userName}</p>
                        <p><strong>street:</strong> {user.street}</p>
                    </div>

                    {cartList && cartList.length > 0 ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Rating</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.map((item) => (
                                        <CartItemComponent item={item} key={item._id} readOnly={true} />
                                    ))}
                                </tbody>
                            </table>
                            <CartSummary data={calculateSummaryData(cartList)} readOnly={true} />

                            <button onClick={handlePayment}>
                                Make Payment
                            </button>
                        </>
                    ) : (
                        <h4>Your cart is empty. Please add items to the cart.</h4>
                    )}
                </>
            ) : (
                <>
                    <h2>Payment Page</h2>
                    <h4>Thank you for the payment, your items are under process!</h4>
                </>
            )}
        </div>
    );
};

export default CheckoutComponent;
