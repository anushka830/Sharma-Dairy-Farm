import "./Products.css";

import milk from "../../assets/images/products/milk.png";
import ghee from "../../assets/images/products/ghee.png";
import paneer from "../../assets/images/products/paneer.png";
import curd from "../../assets/images/products/curd.png";
import butter from "../../assets/images/products/butter.png";
import buffaloMilk from "../../assets/images/products/buffalo-milk.png";

function Products() {

  const products = [
    {
      image: milk,
      name: "Fresh Cow Milk",
      price: "₹60 / Litre",
      description: "Pure farm-fresh cow milk.",
      rating: "★★★★★",
    },
    {
      image: ghee,
      name: "Desi Ghee",
      price: "₹750 / Kg",
      description: "Traditional handmade desi ghee.",
      rating: "★★★★★",
    },
    {
      image: paneer,
      name: "Fresh Paneer",
      price: "₹350 / Kg",
      description: "Soft and fresh paneer.",
      rating: "★★★★☆",
    },
    {
      image: curd,
      name: "Curd",
      price: "₹90 / Kg",
      description: "Healthy homemade curd.",
      rating: "★★★★★",
    },
    {
      image: butter,
      name: "Butter",
      price: "₹450 / Kg",
      description: "Fresh white butter.",
      rating: "★★★★☆",
    },
    {
      image: buffaloMilk,
      name: "Buffalo Milk",
      price: "₹75 / Litre",
      description: "Rich and creamy buffalo milk.",
      rating: "★★★★★",
    },
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">

        <h2 className="text-center mb-5">
          Our Products
        </h2>

        <div className="row">

          {products.map((product, index) => (

            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>

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

                <button className="btn btn-success mt-3">
                  Buy Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;