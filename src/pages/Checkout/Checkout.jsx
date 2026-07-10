import "./Checkout.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^\d]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const handlePlaceOrder = () => {
    if (
      !customer.name ||
      !customer.phone ||
      !customer.address ||
      !customer.city ||
      !customer.pincode
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Order Placed Successfully!");
    navigate("/order-success");
  };

  return (
    <div className="container py-5">

      <div className="row">

        {/* Delivery Form */}

        <div className="col-lg-7">

          <div className="card shadow p-4">

            <h2 className="mb-4">Delivery Details</h2>

            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              className="form-control mb-3"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <textarea
              name="address"
              className="form-control mb-3"
              rows="4"
              placeholder="Delivery Address"
              onChange={handleChange}
            ></textarea>

            <input
              type="text"
              name="city"
              className="form-control mb-3"
              placeholder="City"
              onChange={handleChange}
            />

            <input
              type="text"
              name="pincode"
              className="form-control mb-3"
              placeholder="Pincode"
              onChange={handleChange}
            />

            <h5 className="mt-3">Payment Method</h5>

            <select
              className="form-select"
              name="payment"
              onChange={handleChange}
            >
              <option>Cash on Delivery</option>
              <option>UPI</option>
              <option>Debit Card</option>
              <option>Credit Card</option>
            </select>

          </div>

        </div>

        {/* Order Summary */}

        <div className="col-lg-5">

          <div className="card shadow p-4">

            <h2>Order Summary</h2>

            <hr />

            {cart.map((item) => (

              <div
                className="d-flex justify-content-between mb-3"
                key={item.id}
              >

                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>{item.price}</span>

              </div>

            ))}

            <hr />

            <h4>
              Total
              <span className="float-end">
                ₹{total}
              </span>
            </h4>

            <button
              className="btn btn-success w-100 mt-4"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;