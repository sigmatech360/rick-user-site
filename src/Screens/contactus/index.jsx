import "./index.css";

import Layout from "../../components/layout";
import sponsorunderline from "../../Assets/images/sponsorunderline.webp";
import React, { useState, useEffect } from "react";

import AOS from "aos";

import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.webp";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePost } from "../Api/usePost";
import mapimg from "../../Assets/images/mapimg.webp";
import donateunderline from "../../Assets/images/donateunderline.webp";
import programlegacy from "../../Assets/images/programlegacy.webp";
import applyemployeebg from "../../Assets/images/applyemployeebg.webp";

import contectbf from "../../Assets/images/contactbg.webp";
import contactUsBanner from "../../Assets/images/contactUsBanner.webp";
import { toast } from "react-toastify";
import { Form } from "react-router-dom";
function Contactus() {
  const [formState, setFormState] = useState({});
  const {
    ApiData: ApiDataotp,
    loading: loadingotp,
    error: errorotp,
    post: postotp,
  } = usePost("/submit-query");

  useEffect(() => {
    if (ApiDataotp?.status === true) {
      toast.success(ApiDataotp?.message);

      // Reset all fields in formState to empty strings
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        info: "",
      });
    } else {
      toast.error(ApiDataotp?.message); // Use error notification for failure
    }
  }, [ApiDataotp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();
    for (const key in formState) {
      formDataMethod.append(key, formState[key]);
    }

    postotp(formDataMethod);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    AOS.init();

    document.title = "Contact - HIS OC" || "HOME - HIS OC";
  }, []);
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-prev mb-2 "
        onClick={onClick}
      >
        <span className="arrow-icon">
          {" "}
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="slick-arrow slick-next mb-2"
        onClick={onClick}
      >
        <span className="arrow-icon">
          {" "}
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
      </button>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992, // Medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const teamMembers = [
    {
      name: "Christine Stellino",
      title: "Executive Director",
      imgSrc: drivingchangecard1, // replace with actual image paths
    },
    {
      name: "Libby Shroeder",
      title: "Chairmen",
      imgSrc: drivingchangecard2,
    },
    {
      name: "Barbara Buckley",
      title: "Vice Chairmen",
      imgSrc: drivingchangecard1,
    },
    {
      name: "Julie Suchard",
      title: "Treasurer",
      imgSrc: drivingchangecard2,
    },
  ];

  const programs = [
    {
      title: "Apply For Employee Matching Gifts",
      description:
        "Many employers will match a charitable donation to a non-profit organization, which can double, even triple the value of your donation. Ask your employer about its matching grant program.",
      highlight: "Gifts",
      backgroundImage: applyemployeebg, // replace with your image path
    },
    {
      title: "Leave A Legacy (Planned Giving)",
      description:
        "Making a commitment to HIS-OC through your will or other estate planning vehicle is an effective way to ensure that critical services are provided to low-income families and seniors for generations to come. A Planned Gift allows you to manage your assets during your lifetime, while taking comfort in the knowledge that you have made a commitment to help disadvantaged children, families and seniors into the future.",
      highlight: "Giving",
      backgroundImage: programlegacy, // replace with your image path
    },
  ];

  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={contactUsBanner}
          pagetitle="Contact  "
          pagename="  Contact Us"
          title2="  Us"
          programpojectaboutherounderline="programpojectaboutherounderlinemain"
          programprojectsubttle="programprojectsubttlecontact"
        />
        <section className="map-form">
          <div className="container-fluid">
            <div className="row gx-0 mb-5 align-items-center">
              {/* Left side with form and text */}
              <div className="contactformleft col-lg-6 p-4 p-md-5">
                <h1
                  className="display-5 fw-bold mb-2"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Want To Talk? Let’s{" "}
                  <span className="do-it">
                    Do It!{" "}
                    <img className="donateunderline" src={donateunderline} />
                  </span>
                </h1>
                <p
                  className="text-muted mb-3 "
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  If you have any questions about{" "}
                  <span className="his-oc">HIS-OC</span>, please do not hesitate
                  to contact.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-2 mb-3">
                    <div className="col-md-6">
                      <label className="mb-2"> Name</label>
                      <input
                        required
                        onChange={handleChange}
                        name="name"
                        value={formState?.name}
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="mb-2"> Email</label>
                      <input
                        required
                        onChange={handleChange}
                        name="email"
                        value={formState?.email}
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="row g-2 mb-3">
                    <div className="col-md-6">
                      <label className="mb-2"> Number</label>
                      <input
                        type="tel"
                        required
                        onChange={handleChange}
                        name="phone"
                        value={formState?.phone}
                        className="form-control"
                        placeholder="Your phone"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="mb-2">General Information</label>
                      <select
                        required
                        className="form-select"
                        name="info" // Name should match the key in the state
                        value={formState.info || ""} // Default value to prevent uncontrolled warning
                        onChange={handleChange}
                      >
                        <option value="">General Information</option>
                        <option value="Support">Support</option>
                        <option value="Sales">Sales</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="mb-2"> Message</label>
                    <textarea
                      required
                      className="form-control"
                      rows="3"
                      onChange={handleChange}
                      name="message"
                      value={formState?.message}
                      placeholder="Type your message"
                    ></textarea>
                  </div>

                  <button
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                    type="submit"
                    className="todaybtn"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right side with map image */}
              <div className="col-lg-6   d-lg-block">
                <a href={mapimg}>
                <img src={mapimg} alt="Map" className="img-fluid map-image" />

                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="inquiries-call d-flex justify-content-center align-items-center">
          <h2 className=" inquiries-calltitle fw-bold text-white">
            For Any Inquiries Call:{" "}
            <a href="tel:(714) 993-5774" className="position-relative">
              (714) 993-5774
              <img className="sponsorunderline" src={sponsorunderline} />
            </a>
          </h2>
        </section>
      </Layout>
    </>
  );
}

export default Contactus;
