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
import 'swiper/css/navigation';
import { base_url_image } from "../../Screens/Api/base_url";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
// import { SwiperSlide } from "swiper/react";

function Leadership({ ApiDataGetmembers }) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [boardMembers, setBoardMembers] = useState([]);
  useEffect(() => {
    if (ApiDataGetmembers?.data) {
      setBoardMembers(
        ApiDataGetmembers?.data?.filter((member) => member.member_type === "2")
      );
    }
    // console.log('boardMembers : ', boardMembers);
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 4,
          // boardMembers?.length > 3 ? 3 : boardMembers.length, // Show 3 slides if more than 3 members
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
      {
        breakpoint: 400, // Extra-small screens (below 768px)
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
          <div className="row justify-content-center    mb-5">
            <div className="col-md-6">
              <h2
                className="title text-center  mb-4"
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
            {/* <div className="col-md-6">
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
            </div> */}
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            // centeredSlides={true}
            speed={1000}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              500: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            // pagination={{ clickable: true }}
            navigation
          >
            {ApiDataGetmembers?.data
                // ?.filter((member) => ( member.designation === "Executive Director"))
                ?.filter((member) => member.member_type === "2") // borad member 2
                .map((member) => (
                  <SwiperSlide>
                  <div
                    key={member.id}
                    className={`leadershipcards p-2 ${member.id}`}
                    // data-aos={member?.animation}
                    // data-aos-offset="0"
                    // data-aos-duration="1000"
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

                  </SwiperSlide>
                ))}

          </Swiper>
          {/* <Slider {...settings} className="dedicatd-leadership">
          {ApiDataGetmembers?.data
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

          </Slider> */}

          
        </div>
      </section>
    </>
  );
}

export default Leadership;
