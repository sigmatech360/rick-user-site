import dedleadimg1 from "../../Assets/images/dedleadimg1.png";
import dedleadimg2 from "../../Assets/images/dedleadimg2.png";
import dedleadimg3 from "../../Assets/images/dedleadimg3.png";
import dedleadimg4 from "../../Assets/images/dedleadimg4.png";
import Slider from "react-slick";
import placeholder from "../../Assets/images/placeholder.jpg";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import dedicationunderline from "../../Assets/images/dedicationunderline.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import "./index.css";
import { base_url_image } from "../../Screens/Api/base_url";
function Leadership({ ApiDataGetmembers }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [executiveMembers, setExecutiveMembers] = useState([]);
  useEffect(() => {
    if (ApiDataGetmembers?.data) {
      setExecutiveMembers(
        ApiDataGetmembers?.data?.filter(
          (member) => member.designation === "Executive Director"
        )
      );
    }
    // console.log('executiveMembers : ', executiveMembers);
  }, [ApiDataGetmembers]);

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

  const teamMembers = [
    {
      animation: "fade-right",
      name: "Executive Director: Christine Stellino",
      title: "christine@his-oc.org",

      imgSrc: placeholder, // replace with actual image paths
    },
    {
      animation: "fade-up",
      name: "Program Director: Alfa Hernandez",
      title: "alfa@his-oc.org",
      title2: "(714) 582-7981",
      imgSrc: placeholder,
    },
    {
      animation: "fade-down",
      name: "Program Manager: Anthony Trejo",
      title: "cuca@his-oc.org",
      title2: "(714) 465-5062",
      imgSrc: placeholder,
    },
    {
      animation: "fade-left",
      name: "TAY Program: Cuca Trejo",
      title: "cuca@his-oc.org",
      title2: "(714) 465-5062",
      imgSrc: placeholder,
    },
  ];

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow:
            executiveMembers?.length > 3 ? 3 : executiveMembers.length, // Show 3 slides if more than 3 members
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575, // Extra-small screens (below 768px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="dedicatd-leadership">
        <div className="container my-5">
          <div className="row     mb-5">
            <div className="col-md-6">
              <h2
                className="title   mb-4"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                HIS-OC’S Mission Is A Dedicated{" "}
                <span className="dedication  position-relative">
                  Leadership{" "}
                  <img
                    className="dedicationunderline"
                    src={dedicationunderline}
                  />
                </span>
                Team
              </h2>
            </div>
            <div className="col-md-6">
              <p
                className="para   text-muted mb-5"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                Our Board of Directors is a dynamic group that has guided the
                direction of our organization. They are committed to expanding
                our reach, innovating our programs, and ensuring all the people
                we serve have access to the tools and resources needed. 100% of
                the Board of Directors made financial contributions to support
                the work of Homeless Intervention Services Orange County.
              </p>
            </div>
          </div>
          <Slider {...settings}>
            {/* {ApiDataGetmembers?.data
              ?.filter((member) => member.member_type === 1)
              .map((member, index) => (
                <div
                  key={index}
                  className="leadershipcards p-2"
                  data-aos={member?.animation}
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <div className="card  p-4 border-0   text-center">
                    <div className="profile-container">
                      <div className="yellow-overlay"></div>
                      <img
                        src={
                          member?.image
                            ? `${base_url_image}${member.image}`
                            : placeholder
                        }
                        alt={member?.name || "Placeholder"}
                        className="profile-image"
                      />

                      <div className=" gap-2 d-flex">
                        <p className="hisoc   ">
                          {" "}
                          HIS
                          <br /> OC’s
                        </p>
                        <div className="mt-3">
                          <p className="card-title  ">
                            {member?.designation?.length > 19
                              ? `${member.designation.slice(0, 19)} :`
                              : member?.designation}

                            <br />
                            {member?.name}
                          </p>
                          <p className="card-text   text-muted mb-0">
                            {member?.email}
                          </p>
                          <p className="card-text text-muted   mt=0">
                            {member?.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
            {ApiDataGetmembers?.data
              // ?.filter((member) => ( member.designation === "Executive Director"))
              ?.filter((member) => member.member_type === "2") // borad member 2
              .map((member) => (
                <div
                  key={member.id}
                  className={`leadershipcards p-2 ${member.id}`}
                  data-aos={member?.animation}
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <div className="card p-3 border-0 text-center">
                    <div className="profile-container">
                      {/* <div className="yellow-overlay"></div> */}
                      <img
                        src={
                          member?.image
                            ? `${base_url_image}${member.image}`
                            : placeholder
                        }
                        alt={member?.name || "Placeholder"}
                        className="profile-image"
                      />

                      <div className="gap-2 d-flex">
                        <p className="hisoc">
                          HIS
                          <br /> OC’s
                        </p>

                        <div className="mt-2 text-start">
                          <p className="card-title">
                            {member?.designation?.length > 19
                              ? `${member.designation.slice(0, 19)}...`
                              : member?.designation}
                            <br />
                            {member?.name}
                          </p>
                          <p className="card-text text-muted mb-0">
                            {member?.email}
                          </p>
                          {member?.phone && (
                            <p className="card-text text-muted mt-0">
                              {member?.phone}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Leadership;
