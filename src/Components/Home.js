import React from "react";
import "../css/Home.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MandapamImg from "../assets/Mandapam/IMG-20210318-WA0021.jpg";
import BirthdayImg from "../assets/BALOON DECORATION/IMG-20221219-WA0038.jpg";
import HaldiImg from "../assets/Haldi/20.jpg";
import ReceptionImg from "../assets/Reception/IMG_20180412_070333.jpg";
import KidsImg from "../assets/SmallKids/IMG-20221222-WA0026.jpg";
import GateImgs from "../assets/ENTRY/FB_IMG_1542036778652.jpg";

function Home() {
  return (
    <div className="container-fluid w-100 h-100">
      <div className="row justify-content-center d-flex align-items-center">
        <h2 className="text-center mt-5">
          Transform Your Wedding Venue into a Dream Come True
        </h2>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body p-3">
                <h4 className="text-primary fw-bold mb-2 main-text">
                  Mandapam
                </h4>
                <p>
                  Elegant mandapam adorned with vibrant flowers, golden drapes,
                  sparkling lights, intricate patterns, creating a stunning and
                  enchanting atmosphere.
                </p>
                <img src={MandapamImg} className="img-fluid" alt="Not Found" />
              </div>
              <a href="/mandapam">
                <button className="btn text-white w-100">
                  Click Here
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body p-3">
                <h4 className="text-primary fw-bold mb-2 main-text">Bithday</h4>
                <p>
                  The birthday mandapam glows with colorful balloons, twinkling
                  fairy lights, floral arrangements, and a grand cake, creating
                  a magical ambiance.
                </p>
                <img src={BirthdayImg} className="img-fluid" alt="Not Found" />
              </div>
              <a href="/birthday">
                <button className="btn text-white w-100">
                  Click Here
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body p-3">
                <h4 className="text-primary fw-bold mb-2 main-text">Haldi</h4>
                <p>
                  The Haldi decoration features marigold garlands, colorful
                  drapes, brass pots, fairy lights, and traditional motifs,
                  creating a vibrant atmosphere.
                </p>
                <img src={HaldiImg} className="img-fluid" alt="Not Found" />
              </div>
              <a href="/mangalashnanam">
                <button className="btn text-white w-100">
                  Click Here
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body p-3">
                <h4 className="text-primary fw-bold mb-2 main-text">
                  Reception
                </h4>
                <p>
                  The reception decor features elegant drapes, floral
                  arrangements, sparkling chandeliers, ambient lighting, and a
                  beautifully adorned stage, creating a magical atmosphere.
                </p>
                <img src={ReceptionImg} className="img-fluid" alt="Not Found" />
              </div>
              <a href="/reception">
                <button className="btn text-white w-100">
                  Click Here
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body p-3">
                <h4 className="text-primary fw-bold mb-2 main-text">
                  21St Day
                </h4>
                <p>
                  The 21st day celebration decor includes soft pastel drapes,
                  delicate flowers, twinkling fairy lights, elegant lanterns,
                  and a charming cake.
                </p>
                <img src={KidsImg} className="img-fluid" alt="Not Found" />
              </div>
              <a href="/smallkids">
                <button className="btn text-white w-100">
                  Click Here
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body p-3">
                <h4 className="text-primary fw-bold mb-2 main-text">
                  Entry Gate
                </h4>
                <p>
                  The gateway decoration boasts vibrant flowers, twinkling fairy
                  lights, lush greenery, elegant drapes, and ornate arches,
                  offering a grand welcome.
                </p>
                <img src={GateImgs} className="img-fluid" alt="Not Found" />
              </div>
              <a href="/gates">
                <button className="btn text-white w-100">
                  Click Here
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
