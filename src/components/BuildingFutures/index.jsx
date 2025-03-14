import React , {useEffect} from "react";
import "./index.css";
import createdunderline from "../../Assets/images/createdunderline.png";
import buildfeatureicon1 from "../../Assets/images/buildfeatureicon1.svg";
import buildfeatureicon12 from "../../Assets/images/buildfeatureicon2.svg";
import buildfeatureicon13 from "../../Assets/images/buildfeatureicon3.svg";
import donateicons from "../../Assets/images/donateicons.svg";

import AOS from "aos";

const BuildingFutures = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="BuildingFutures  py-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-6 col-12">
              <h2 className="empowelive"     data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000">
                Empowering Lives Building{" "}
                <span className="position-relative">
                  {" "}
                  Futures{" "}
                  <img src={createdunderline} className="createdunderline" />
                </span>
              </h2>
            </div>

            <div className="col-lg-6 col-12">
              <p
                className="joinuspara"
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Join us in making a difference.
              </p>
              <button className="donateiconbg d-flex justify-content-center align-items-center"     data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000">
                <img src={donateicons} /> Donate Today!
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 mb-4"     data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000">
              <div 
                className="service-card p-3    py-4 h-100"
                style={{
                  backgroundColor: "#FEFBEB",
                  borderRadius: "12px",
                }}
              >
                <img
                  className="img-fluid iconbg mb-4"
                  src={buildfeatureicon1}
                />
                <p className="extension font-weight-bold  mb-0  ">
                  Transitional Housing{" "}
                </p>
                <p className="para   mb-2 text-muted  ">
                  We provide safe, stable housing where families can heal and
                  rebuild their lives.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4"     data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000">
              <div
                className="service-card p-3   h-100  py-4"
                style={{
                  backgroundColor: "#EBFDFF",
                  borderRadius: "12px",
                }}
              >
                <img
                  className="img-fluid iconbg mb-4"
                  src={buildfeatureicon12}
                />
                {/* <FaPhoneAlt size={30} color="#EBFEEE" /> */}
                <p className="extension font-weight-bold  mb-0  ">
                  Advocacy & Community Support
                </p>
                <p className="para   mb-2 text-muted  ">
                  By engaging volunteers and donors, we create a united front
                  against homelessness, fostering hope and connection.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4"     data-aos="fade-left"
                        data-aos-offset="0"
                        data-aos-duration="1000">
              <div
                className="service-card p-3    py-4 h-100"
                style={{
                  backgroundColor: "#F3EFFF",
                  borderRadius: "12px",
                }}
              >
                <img
                  className="img-fluid iconbg mb-4"
                  src={buildfeatureicon13}
                />
                {/* <FaPhoneAlt size={30} color="#348F99" /> */}
                <p className="extension font-weight-bold  mb-0  ">
                  Why Your Support Matters
                </p>
                <p className="para   mb-2 text-muted  ">
                  Every donation fuels transformation helping families regain
                  independence, confidence, and a sense of belonging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingFutures;
