// Frontend: restaurant.js (React component)
import React, { useState } from "react";
import axios from "axios";

const Restaurant = () => {
    const [order, setOrder] = useState({});
    const [total, setTotal] = useState(0);

    const handleOrder = (item) => {
        setOrder({ ...order, [item]: (order[item] || 0) + 1 });
        setTotal(total + item.price);
    };

    const handlePrint = () => {
        axios.post("/api/print", { order, total }).then((res) => {
            if (res.data.success) {
                alert("Bill printed successfully!");
            } else {
                alert("Error printing bill. Please try again.");
            }
        });
    };

    return (
        <div>
            <h1>Welcome to our restaurant!</h1>
            <div>
                <h2>Menu</h2>
                <ul>
                    <li onClick={() => handleOrder({ name: "Pizza", price: 10 })}>
                        Pizza - $10
                    </li>
                    <li onClick={() => handleOrder({ name: "Soup", price: 5 })}>
                        Soup - $5
                    </li>
                    <li onClick={() => handleOrder({ name: "Salad", price: 7 })}>
                        Salad - $7
                    </li>
                </ul>
            </div>
            <div>
                <h2>Your order</h2>
                <ul>
                    {Object.keys(order).map((item) => (
                        <li key={item}>
                            {item} x {order[item]}
                        </li>
                    ))}
                </ul>
                <p>Total: ${total}</p>
                <button onClick={handlePrint}>Print bill</button>
            </div>
        </div>
    );
};

export default Restaurant;

