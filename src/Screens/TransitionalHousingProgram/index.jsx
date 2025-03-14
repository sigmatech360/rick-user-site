import "./index.css";
import housingprogramvideo from "../../Assets/images/housingprogramvideo.mp4";
import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";

import housingprogramimgage from "../../Assets/images/housingprogramimgage.jpg";

import HeroSection from "../../components/herosection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";
import houseimg from "../../Assets/images/houseimg.png";
import youth from "../../Assets/images/youth.png";
import Oc from "../../Assets/images/Oc.png";
import Closet from "../../Assets/images/closet.png";
import housungprogramimg2 from "../../Assets/images/housungprogramimg2.jpg";
import AOS from "aos";

function TransitionalHousingProgram() {
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
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
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
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
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

  const programs = [
    {
      title: "Transitional    ",
      title2: "Program",
      highlightedWords: "Housing",
      description: "Providing Shelter and Reunification for Families",
      imgSrc: houseimg,
    },
    {
      title: "Transitional Aged  ",
      title2: "Shelter",
      highlightedWords: "Youth",
      description: "Supporting Transitional Age Youth",

      imgSrc: youth,
    },
    {
      title: "Home Share  ",

      highlightedWords: "OC",
      description: "Helping College Students Transition",

      imgSrc: Oc,
    },
    {
      title: "Housing & Resource  ",

      description: "Guiding To Services And Support",
      highlightedWords: "Connection",
      imgSrc: Oc,
    },
    {
      title: "Charity’s Closet",
      description: "Our Trusted Partner",
      highlightedWords: " ",
      imgSrc: Closet,
    },
  ];
  const [hoveredProgram, setHoveredProgram] = useState(null);

  // modal give responsive code in react using react-bootstrap
  return (
    <>
      <Layout>
        <HeroSection
          heroimg={houseimg}
          pagetitle="Our"
          pagename="Programs"
          title2="Transitional Housing Program"
          programpojectaboutherounderline="traditionalhosingprogramunderline"
          programprojectsubttle="givedonationsubtitle"
        />

        <section className="info-section d-flex justify-content-center align-items-center py-5">
          <div className="container">
            <div className="video-wrapper">
              <video
                className="centered-video"
                src={housingprogramvideo}
                controls
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <img
                  src={housingprogramimgage}
                  className="img-fluid"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                />
              </div>
              <div className="col-md-6">
                <p
                  className="traditionalhousingprogramtxt text-start"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Our Transitional Housing Program is for homeless families, and
                  often we work with families who are in reunification stages
                  with their children. Helping the parents heal and assisting
                  the family reunify is a complex and essential job. We are
                  committed to assisting homeless families to achieve stable,
                  permanent housing and financial independence. Our 54-bed
                  transitional housing program is designed to successfully
                  transition homeless families with children off the streets and
                  into safe, permanent housing. When a homeless family enters
                  our program, they need a safe place in a loving community to
                  help them overcome their emotional, spiritual and physical
                  trauma. We tailor our service delivery to address each
                  family’s goals to become self-sufficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section d-flex justify-content-center align-items-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p
                  className="traditionalhousingprogramtxt text-start"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Entering our program, a homeless family might face
                  difficulties unique to their situation. The first step is to
                  address their immediate, basic needs for shelter, food, and
                  clothing. But more importantly, we need to address what led
                  them to their homelessness. We pair all residents with a Case
                  Manager who walks with them as they overcome barriers to
                  permanent housing and financial self-sufficiency. The Case
                  Manager helps them establish an individualized case plan,
                  including short and long-term goals and objectives. We work
                  with all the people in our Transitional Housing Program,
                  providing concrete action steps for them to take to transition
                  out of homelessness:
                </p>
                <ul
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <li>clear DMV records so that they can drive,</li>
                  <li>stabilize mental health,</li>
                  <li>
                    provide support to navigate through family reunification
                  </li>
                  <li>obtain full-time employment</li>
                  <li>increase income, pay off debt, save for emergencies</li>
                  <li>learn the importance of healthy parenting practices</li>
                </ul>
              </div>
              <div className="col-md-6">
                <img src={housungprogramimg2} className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* <BuildingFutures /> */}
        {/* BuildingFutures */}
        <Contact />

        {/* <Leadership /> */}
        <Sponsor />
      </Layout>
    </>
  );
}

export default TransitionalHousingProgram;
