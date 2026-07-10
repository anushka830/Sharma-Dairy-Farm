import "./Products.css";
import { Link } from "react-router-dom";
import products from "../../data/products";

function Products() {
  return (
    <section id="products" className="products-section">
      <div className="container">

        <h2 className="text-center mb-5">
          Our Products
        </h2>

        <div className="row">

          {products.map((product) => (

            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-4"
              key={product.id}
            >

              <div className="product-card">

                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                <h4>{product.name}</h4>

                <p>{product.description}</p>

                <h5>{product.price}</h5>

                <div className="rating">
                  {product.rating}
                </div>

                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-success mt-3 w-100"
                >
                  Buy Now
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;