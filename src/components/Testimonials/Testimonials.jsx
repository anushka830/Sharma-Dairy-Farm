import "./Testimonials.css";

function Testimonials() {

  const reviews = [
    {
      name: "Priya Sharma",
      rating: "★★★★★",
      review:
        "Fresh milk every morning. Excellent quality and very hygienic."
    },
    {
      name: "Rahul Verma",
      rating: "★★★★★",
      review:
        "The desi ghee tastes amazing. Highly recommended."
    },
    {
      name: "Neha Gupta",
      rating: "★★★★★",
      review:
        "Very good service and always on-time delivery."
    }
  ];

  return (
    <section className="testimonials py-5">
      <div className="container">

        <h2 className="text-center mb-5">
          What Our Customers Say
        </h2>

        <div className="row">

          {reviews.map((review, index) => (

            <div className="col-lg-4 col-md-6 mb-4" key={index}>

              <div className="review-card">

                <h4>{review.name}</h4>

                <div className="stars">
                  {review.rating}
                </div>

                <p>{review.review}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;