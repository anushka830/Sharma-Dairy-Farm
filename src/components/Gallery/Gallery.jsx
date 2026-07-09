import "./Gallery.css";

import gallery1 from "../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../assets/images/gallery/gallery5.jpg";
import gallery6 from "../../assets/images/gallery/gallery6.jpg";

function Gallery() {

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6
    ];

    return (

        <section id="gallery" className="gallery-section">

            <div className="container">

                <h2 className="text-center mb-5">
                    Our Gallery
                </h2>

                <div className="row">

                    {
                        images.map((image,index)=>(

                            <div
                                className="col-lg-4 col-md-6 mb-4"
                                key={index}
                            >

                                <div className="gallery-card">

                                    <img
                                        src={image}
                                        alt="Gallery"
                                        className="gallery-image"
                                    />

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    )

}

export default Gallery;