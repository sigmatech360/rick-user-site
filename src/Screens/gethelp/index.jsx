import "./index.css";

import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa"; // Font Awesome phone icon (React Icons)
import { FaStar } from "react-icons/fa";
import helpstar from "../../Assets/images/helpstar.svg";
import Leadership from "../../components/Leadership/index";
import helpcontecticon from "../../Assets/images/helpcontecticon.svg";
import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.png";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";

import gethelpbg from "../../Assets/images/gethelpbg.png";
// import program1 from "../../Assets/images/program1.svg.png";
// import program2 from "../../Assets/images/program2.png";

import ourworkbg from "../../Assets/images/ourworkbg.png";

import { useGet, usePost } from "../Api/usePost";
import AOS from "aos";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function GetHelp() {
  const {
    ApiData: ApiDataGetmembers,
    loading: loadingGet,
    error: errorGet,
    get: getdatamembers,
  } = useGet("/member");
  const {
    ApiData: ApiDataotp,
    loading: loadingotp,
    error: errorotp,
    post: postotp,
  } = usePost("/submit-query");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();
    for (const key in formState) {
      formDataMethod.append(key, formState[key]);
    }

    postotp(formDataMethod);
  };

  const [formState, setFormState] = useState({});

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    getdatamembers();

    document.title = "Get Help - HIS OC " || "HOME- HIS OC";
  }, []);

  useEffect(() => {
    AOS.init();
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

  const services = [
    {
      animation: "fade-right",
      description: "Transitional Housing Program for families",
      extension: "1009",
      bgColor: "#E9E5FC", // Light purple background
    },
    {
      animation: "fade-up",
      description: "Young Adults Ages 18-24 yr old men",
      extension: "1007",
      bgColor: "#D7FBE8", // Light green background
    },
    {
      animation: "fade-down",
      description:
        "HomeShare OC If you are a college student, fill out the Student Interest Form to get started.",
      extension: "1005",
      bgColor: "#D3F4FD", // Light blue background
      linkText: "Student Interest Form", // Link text within the description
      linkHref: "#", // Placeholder for link URL
    },
    {
      animation: "fade-left",
      description: "Housing Connection Program for anyone",
      extension: "1019",
      bgColor: "#FFF8D5", // Light yellow background
    },
  ];
  const [hoveredProgram, setHoveredProgram] = useState(null);

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={gethelpbg}
          pagetitle="Get  "
          pagename="Get Help"
          title2="Help"
          programprojectsubttle="givedonationsubtitle"
          programpojectaboutherounderline="hopeunderline"
        />

        <section className="info-section d-flex justify-content-center align-items-center py-5">
          <div className="container gethelpgradbg">
            <div className="text-center mb-3">
              <h2 className="callus">Call Us</h2>
              <Link className="contectno" to="tel:(714)%20993-5774">
                {" "}
                (714) 993-5774{" "}
              </Link>
            </div>
            <p
              className="info-text text-start"
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              To get help, just call us. We want to talk to you, get to know
              what you need and help you home . . . for good. If you are
              familiar with our programs and you know which one you’d like to
              hear more about or apply to, dial (714) 993-5774 and the extension
              number:
              <ul>
                <li>
                  {" "}
                  Transitional Housing Program for families – Extension 1009
                </li>
                <li> Young Adults Ages 18-24 yr old men – Extension 1007</li>
                <li>
                  {" "}
                  HomeShare OC – Extension 1005. If you are a college student,
                  fill out the Student Interest Form to get started.
                </li>
                <li>Housing Connection Program for anyone – Extension 1019</li>
              </ul>
            </p>
          </div>
        </section>

        <section className="services-section  py-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6 col-lg-3 mb-4"
                  data-aos={service?.animation}
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <div
                    className="service-card p-3 text-center h-100"
                    style={{
                      // backgroundColor: service.bgColor,
                      borderRadius: "12px",
                    }}
                  >
                    <img
                      src={helpcontecticon}
                      className="img-fluid helpcontecticon"
                    />
                    {/* <FaPhoneAlt size={30} color="#348F99" /> */}
                    <p className="para mt-3 mb-2 text-muted text-center">
                      {service.description.split(" ").map((word, i) =>
                        word === service.linkText ? (
                          <a
                            key={i}
                            href={service.linkHref}
                            className="text-decoration-none"
                          >
                            {word}
                          </a>
                        ) : (
                          <span key={i}>{word} </span>
                        )
                      )}
                    </p>
                    <p className="extension font-weight-bold text-center">
                      Extension {service.extension}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="help-section py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Section with Hashtag, 211 Text, and Star */}
              <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                  <h1
                    className="display-1 text-warning mb-0"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <Link to={"https://www.211oc.org/"}>
                      <img src={helpstar} className="starimg" />
                    </Link>
                  </h1>
                  <FaStar className="text-warning star-icon" />
                  <span className="oc-text">oc</span>
                </div>
              </div>

              {/* Right Section with Description and Button */}
              <div className="col-lg-6">
                <p
                  className="description mb-4"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  You can also dial 211 to get information and referrals to free
                  local health and human services programs in Orange County.
                </p>
                <p
                  className="description mb-4"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  The hotline is available 24 hours a day. 2-1-1 is a central
                  point for public information, including times of disaster to
                  help those affected find recovery assistance.
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  href="https://www.211oc.org"
                  className="btn btn-outline-light btn-link"
                >
                  www.211oc.org
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <Leadership /> */}
        <section className="no-board-contact-sec">
          <Contact
            handleChange={handleChange}
            name={formState?.name}
            info={formState?.info}
            email={formState?.email}
            handleSubmit={handleSubmit}
            message={formState?.message}
            phone={formState?.phone}
            ApiDataGetmembers={ApiDataGetmembers}
          />
        </section>
        <Sponsor />
      </Layout>
    </>
  );
}

export default GetHelp;
