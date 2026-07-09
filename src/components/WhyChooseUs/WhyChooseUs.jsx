import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      icon: "🥛",
      title: "100% Fresh Milk",
      desc: "Milk delivered directly from our farm every day.",
    },
    {
      icon: "🚚",
      title: "Fast Home Delivery",
      desc: "Morning and evening doorstep delivery.",
    },
    {
      icon: "🌱",
      title: "Organic Feed",
      desc: "Our cattle are fed with nutritious organic fodder.",
    },
    {
      icon: "🛡️",
      title: "Hygienic Processing",
      desc: "Modern and clean milk processing methods.",
    },
    {
      icon: "🐄",
      title: "Healthy Cattle",
      desc: "Well cared-for cows ensure premium quality milk.",
    },
    {
      icon: "❤️",
      title: "Trusted by Families",
      desc: "Serving happy customers with quality dairy products.",
    },
  ];

  return (
    <section className="why py-5">
      <div className="container">
        <h2 className="text-center mb-5">Why Choose Sharma Dairy Farm?</h2>

        <div className="row">
          {features.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="feature-card">
                <h1>{item.icon}</h1>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;