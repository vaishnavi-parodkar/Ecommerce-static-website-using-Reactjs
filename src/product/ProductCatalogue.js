import React, { useState } from "react";
import "./ProductCatalogue.css";
import Navbar from "../navbar/Navbar";

const ProductCatalogue = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentOption, setPaymentOption] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const products = [
    {
      id: 1,
      name: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      url: "https://tse1.mm.bing.net/th?id=OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21 Ultra",
      description: "Samsung's flagship smartphone with a stunning display",
      price: 1149,
      url: "https://tse1.mm.bing.net/th?id=OIP.3iRYOSf6W5lk-EcweYMnAwHaHY&pid=Api&rs=1&c=1&qlt=95&w=119&h=118",
    },
    {
      id: 3,
      name: "Sony Xperia 5 III",
      description: "Sony Xperia 5 III offers a compact form factor",
      price: 1234,
      url: "https://tse1.mm.bing.net/th?id=OIP.Z2TP6dRaVSDkIW9-K8VJPgHaE7&pid=Api&rs=1&c=1&qlt=95&w=179&h=119",
    },
    {
      id: 4,
      name: "LG Velvet 5G",
      description: "LG Velvet 5G features a unique design.",
      price: 4563,
      url: "https://tse1.mm.bing.net/th?id=OIP.6BmjzAUIAlXN_sCJ0PbJkgHaHa&pid=Api&rs=1&c=1&qlt=95&w=99&h=99",
    },
    {
      id: 5,
      name: "Xiaomi Mi 11",
      description:"Xiaomi Mi 11 offers high-end specs and a vibrant AMOLED display.",
      price: 6785,
      url: "https://tse1.mm.bing.net/th?id=OIP.JE26VTPKF-E4rYaYjZXOrgHaHa&pid=Api&rs=1&c=1&qlt=95&w=121&h=121",
    },
  ];

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (!paymentOption) {
      setModalMessage("Please select a payment option.");
    } else if (cartItems.length === 0) {
      setModalMessage("Cart is empty.");
    } else {
      setModalMessage("Checkout Successful!");
      setCartItems([]);
    }
    setShowModal(true);
  };

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="product-catalogue">
        {/* Product list */}
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.url} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="cart-column">
          <div className="cart">
            <h2>Cart</h2>
            <hr />
            <br />
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price per item: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total Price: ${item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total Price: ${calculateTotalPrice()}</h3>
            </div>
            <hr />

            {/* Payment options */}
            <div className="payment-options">
              <h3>Payment Options</h3>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentOption === "card"}
                  onChange={() => handlePaymentOptionChange("card")}
                />
                Pay with Card
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="crypto"
                  checked={paymentOption === "crypto"}
                  onChange={() => handlePaymentOptionChange("crypto")}
                />
                Pay with Crypto
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentOption === "cash"}
                  onChange={() => handlePaymentOptionChange("cash")}
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* Checkout button */}
          <div className="checkout-section">
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCatalogue;
