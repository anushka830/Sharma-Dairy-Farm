import { useParams } from "react-router-dom";
import "./ProductDetails.css";
function ProductDetails() {

  const { id } = useParams();

  return (
    <div className="container py-5">

      <h1>Product Details</h1>

      <h3>Product ID : {id}</h3>

    </div>
  );
}

export default ProductDetails;