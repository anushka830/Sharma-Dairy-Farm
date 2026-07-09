import "./About.css";
import aboutImage from "../../assets/images/cow.jpg";
function About() {
  return (
    <section id="about" className="about container py-5">

      <div className="row align-items-center">

        <div className="col-md-6">
          <img
  src={aboutImage}
  className="img-fluid rounded shadow"
  alt="Sharma Dairy Farm"
/>
        </div>

        <div className="col-md-6">

          <h2>About Sharma Dairy Farm</h2>

          <p>
            Sharma Dairy Farm provides fresh, hygienic, and high-quality dairy
            products directly from our farm to your home. Our mission is to
            deliver healthy milk and dairy products while maintaining the
            highest standards of quality and freshness.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;