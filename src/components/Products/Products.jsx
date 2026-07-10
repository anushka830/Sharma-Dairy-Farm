import "./Products.css";
import { Link } from "react-router-dom";
import products from "../../data/products";
import { useState } from "react";

function Products() {

  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
  return (
    <section id="products" className="products-section">
      <div className="container">

        <h2 className="text-center mb-5">
          Our Products
        </h2>

        {/* Search Bar */}

        <div className="row justify-content-center mb-5">

          <div className="col-lg-6">

            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>
        <div className="text-center mb-4">

  <button
    className={`btn me-2 ${
      category === "All"
        ? "btn-success"
        : "btn-outline-success"
    }`}
    onClick={() => setCategory("All")}
  >
    All
  </button>

  <button
    className={`btn me-2 ${
      category === "Milk"
        ? "btn-success"
        : "btn-outline-success"
    }`}
    onClick={() => setCategory("Milk")}
  >
    Milk
  </button>

  <button
    className={`btn me-2 ${
      category === "Buffalo Milk"
        ? "btn-success"
        : "btn-outline-success"
    }`}
    onClick={() => setCategory("Buffalo Milk")}
  >
    Buffalo Milk
  </button>

  <button
    className={`btn me-2 ${
      category === "Ghee"
        ? "btn-success"
        : "btn-outline-success"
    }`}
    onClick={() => setCategory("Ghee")}
  >
    Ghee
  </button>

  <button
    className={`btn me-2 ${
      category === "Paneer"
        ? "btn-success"
        : "btn-outline-success"
    }`}
    onClick={() => setCategory("Paneer")}
  >
    Paneer
  </button>

  <button
    className={`btn me-2 ${
      category === "Butter"
        ? "btn-success"
        : "btn-outline-success"
    }`}
    onClick={() => setCategory("Butter")}
  >
    Butter
  </button>

  <button
    className={`btn ${
      category === "Curd"
        ? "btn-success"
        : "btn-outline-success"
    }`}
    onClick={() => setCategory("Curd")}
  >
    Curd
  </button>

</div>

        <div className="row">

          {products
  .filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )
  .filter((product) =>
    category === "All"
      ? true
      : product.category === category
  )
            .map((product) => (

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