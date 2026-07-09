import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container text-center">
        <h1>Pure & Fresh Dairy Products</h1>

        <p>
          Fresh milk and dairy products delivered directly from our farm to
          your doorstep.
        </p>

        <button className="btn btn-success me-3">
          Shop Now
        </button>

        <button className="btn btn-outline-success">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default Hero;