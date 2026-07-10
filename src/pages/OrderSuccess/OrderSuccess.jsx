import "./OrderSuccess.css";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="container py-5 text-center">

      <div className="card shadow-lg p-5">

        <h1 className="text-success mb-4">
          🎉 Order Placed Successfully!
        </h1>

        <p className="lead">
          Thank you for shopping with Sharma Dairy Farm.
        </p>

        <p>
          Your order has been received and will be delivered soon.
        </p>

        <Link
          to="/products"
          className="btn btn-success mt-4"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;