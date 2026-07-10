import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container py-5">
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <section className="product-details">
      <div className="container">

        <div className="row align-items-center product-card">

          <div className="col-lg-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>

          <div className="col-lg-6 product-info">

            <h2>{product.name}</h2>

            <div className="rating fs-4">
              {product.rating}
            </div>

            <h3 className="product-price">
              {product.price}
            </h3>

            <p className="product-description">
              {product.description}
            </p>

            <button
              className="btn btn-success add-cart-btn"
              onClick={() => {
                addToCart(product);
                alert("Product Added to Cart!");
              }}
            >
              Add To Cart
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetails;