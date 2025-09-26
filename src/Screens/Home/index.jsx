import AOS from "aos";

import { Modal, Button, Form, Alert } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa";
// import "./index.css";
import { Link } from "react-router-dom";
import { FiSmartphone } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { base_url_image } from "../Api/base_url";

import React, { useContext, useEffect, useState } from "react";

import placeholder from "../../Assets/images/placeholder.webp";
import dedicationunderline from "../../Assets/images/dedicationunderline.webp";

import announcementunderline from "../../Assets/images/announcementunderline.webp";
import programAfter from "../../Assets/images/programAfter.webp";
import googlePlay from "../../Assets/images/Google_Play_Store_badge.webp";
import applePlay from "../../Assets/images/Apple_Play_Store_badge.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import donateicon from "../../Assets/images/donateicon.webp";
import availabletagline from "../../Assets/images/availabletagline.webp";
import apartunderline from "../../Assets/images/apartunderline.webp";
import "./index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import tagline from "../../Assets/images/tagline.webp";

import programunderline from "../../Assets/images/programunderline.webp";
import announcement1 from "../../Assets/images/announcement1.webp";
import announcement2 from "../../Assets/images/announcement2.webp";

import changeworld from "../../Assets/images/changeworld.webp";

import homeBanner1 from "../../Assets/images/homeBanner-1.webp";
import homeBanner2 from "../../Assets/images/homeBanner-2.webp";
import homeBanner3 from "../../Assets/images/homeBanner-3.webp";

import wedotagline from "../../Assets/images/wedotagline.webp";
import { useGet, usePost } from "../Api/usePost";
import housingcard1 from "../../Assets/images/housingcard1.webp";
import Layout from "../../components/layout";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";
import Ourpodcasts from "../../components/ourpodcast";
import Events from "../../components/events";
import { useNavigate } from "react-router-dom";
import Stats from "../../components/stats";
import Testimonial from "../../components/Testimonial";
import { AuthContext } from "../../Routers/AuthContext";

const parseEventDate = (dateStr) => {
  const cleanDateStr = dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1");
  return new Date(cleanDateStr);
};

const isLessThan7Days = (eventDate) => {
  const today = new Date();
  const targetDate = new Date(eventDate);

  // Remove time part (midnight set) for accurate comparison
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diffInMs = targetDate - today;
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // convert ms to days


  return diffInDays >= 0 && diffInDays <= 7;
};

function Home() {
  const {
    ApiData: ApiDataGet,
    loading: loadingGet,
    error: errorGet,
    get: getdata,
  } = useGet("/announcement");
  const {
    ApiData: ApiDataGetprogram,
    loading: loadingGetprogram,
    error: errorGetprogram,
    get: getdataprogram,
  } = useGet("/program");
  const {
    ApiData: ApiDataevent,
    loading: loadingevent,
    error: errorevent,
    get: getdataevent,
  } = useGet("/event");
  const {
    ApiData: ApiDatapodcast,
    loading: loadingpodcast,
    error: errorpodcast,
    get: getdatapodcast,
  } = useGet("/podcast");
  const {
    ApiData: ApiDataSponsorBrands,
    loading: loadingSponsorBrands,
    error: errorSponsorBrands,
    get: getdataSponsorBrands,
  } = useGet("/sponsor-brands");
  const {
    ApiData: ApiDatastats,
    loading: loadingstats,
    error: errorstats,
    get: getdatastats,
  } = useGet("/stats");
  const {
    ApiData: ApiDataotp,
    loading: loadingotp,
    error: errorotp,
    post: postotp,
  } = usePost("/submit-query");
  useEffect(() => {
    getdata();
    getdataprogram();
    getdataevent();
    getdatapodcast();
    getdatastats();
    getdataSponsorBrands();

    document.title = "HOME- HIS OC ";
  }, []);

  const [userData, setUserData] = useState({});
  const handleSubmitforgetotp = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();

    for (const key in userData) {
      formDataMethod.append(key, userData[key]);
    }

    postotp(formDataMethod);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
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
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // Extra-small screens (below 768px)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const newsData = [
    {
      id: 1,
      animation: "fade-right",
      title:
        "Cruzin' Back to School\" HIS-OC 2nd Annual Classic Car Show and Fundraiser",
      date: "February 9, 2024",
      description:
        "HIS-OC will be participating in the Day of the Child Event Saturday, April 20, 11am – 3pm. This event is hosted by B.A.C.A. (Bikers Against Child Abuse) in collaboration with The Raise Foundation and Higher Ground Youth & Family Services...",
      image: announcement1, // Replace with the actual image path
    },
    {
      id: 2,
      animation: "fade-left",
      title: "Excellence in Placentia Nominees 2024",
      date: "February 9, 2024",
      description:
        "HIS-OC wants to thank our community for nominating us for Placentia Non-Profit of the Year. We appreciate the recognition of our mission and organization for providing support to the unhoused and underprivileged...",
      image: announcement2, // Replace with the actual image path
    },
    // Add more news items as needed
  ];

  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AuthContext);

  const handleclick = () => {
    navigate("/gethelp");
  };

  const [donatenotify, setDonatenotiy] = useState(false);

  const handleClose = () => {
    setDonatenotiy(false);
  };

  const handlenotifydonate = () => {
    setDonatenotiy(true);
  };

  // const handlenavigatemodal = () =>{

  // }
  const handleroute = () => {
    navigate("/our-work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleroutelist = (id) => {
    navigate(`/our-work/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlerouteannouncementdetail = (id) => {
    navigate(`/news-announcements/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handlepodcastlistroute = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleannouncement = () => {
    navigate("/news-announcements");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showTicketAlert, setShowTicketAlert] = useState(false);
  const [ticketData, setTicketData] = useState({});
  useEffect(() => {
    if (ApiDataevent?.data?.length > 0) {
      let data = ApiDataevent?.data;
      for (const event of data) {
        const hasTicket =
          event.ticketing_link !== null && event.ticketing_link !== "null";
        const eventDate = parseEventDate(event.date);

        if (hasTicket && isLessThan7Days(eventDate)) {
          setShowTicketAlert(true);
          setTicketData({
            ticket_link: event.ticketing_link,
            title: event.title,
            link_text: event.ticketing_button_text,
            alert_message: event.alert_message,
          });
          break;
        }
      }
    }
  }, [ApiDataevent]);

  // useEffect(() => {
  //   getdataevent();
  // }, [isLoggedIn]);

  // news - announcements
  return (
    <>
      <Layout>
        {showTicketAlert && (
          <Alert
            key={"danger"}
            variant={"danger"}
            className="event-brite-alert"
          >
            <Alert.Link href={ticketData.ticket_link}>
              <strong>{ticketData.alert_message}</strong>{" "}
            </Alert.Link>
          </Alert>
        )}
        <section className="homeless-intervention">
          <Swiper
            // pagination={true}
            // modules={[Pagination]}
            modules={[Pagination, Autoplay]}
            slidesPerView={"auto"}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000, // 3 seconds between slides
              disableOnInteraction: false, // keeps autoplay going after interaction
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="heroOverlay"></div>
              <div
                className="inerhero"
                style={{ backgroundImage: `url(${homeBanner1})` }}
              >
                <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                  <div className="row">
                    <div className="col-md-7 heros-text text-center text-md-start">
                      <h5
                        className="text-info mb-2"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        {/* Making Them Homes for Life */}
                        From Crisis to Comfort
                      </h5>
                      {/* <h1 className="display-4 fw-bold mb-3">
                      We Transition People out of{" "}
                      <span className="text-warning">Homelessness <img src={tagline}/></span>
                    </h1> */}
                      <h1
                        className="display-4 fw-bold mb-3"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        Supporting Your Journey{" "}
                        <span
                          className="highlighted-text"
                          data-aos="fade-right"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          Home
                          <img
                            src={tagline}
                            alt="underline"
                            className="underline-image"
                          />
                        </span>
                      </h1>
                      {/* <h3>HIS-OC Restoring Hope!</h3> */}

                      <p
                        className="mb-4"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        {/* Our shelters and supportive services provide
                        comprehensive transitional housing programs for those at
                        risk of or experiencing homelessness in Orange County.
                        Your support helps us provide safe housing, food, and
                        resources to those in desperate need. */}
                        Homeless Intervention Services of Orange County (HIS-OC)
                        restores hope by offering more than just shelter—we are
                        a comprehensive program providing in-reach and outreach
                        services for families, transitional-aged youth, and
                        seniors who are at risk or currently experiencing
                        homelessness. Through trauma-informed care, personalized
                        case management, and access to vital resources, we guide
                        individuals from crisis to stability. Rooted in
                        compassion, our work empowers people to rebuild their
                        lives with dignity and rediscover a future filled with
                        purpose.
                      </p>
                      <div className="d-flex align-items-center gap-2 ">
                        <givebutter-widget class="giveButterBtn" id="pzBZ3p">
                          Give Help Widget
                        </givebutter-widget>
                        <button
                          className="nav-donate btn btn-outline-light"
                          data-aos="fade-up"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                          onClick={handleclick}
                        >
                          Get Help
                        </button>

                        {/* <button
                          className="gethelp btn btn-outline-light  "
                          data-aos="fade-up"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                          onClick={handleclick}
                        >
                          Get Help 
                        </button> */}
                      </div>
                      <div className="row">
                        <div
                          className="col-12 d-flex justify-content-center justify-content-md-start gap-3 mt-5 "
                          data-aos="fade-up"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                        >
                          <Link
                            className="appLink"
                            target="_blank"
                            to={
                              "https://play.google.com/store/apps/details?id=com.hisocapp&pli=1"
                            }
                          >
                            <img src={googlePlay} className="w-100" alt="" />
                          </Link>
                          <Link
                            to={
                              "https://apps.apple.com/us/app/hisocapp/id6749266767"
                            }
                            target="_blank"
                            className="appLink"
                          >
                            <img src={applePlay} className="w-100" alt="" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="heroOverlay"></div>
              <div
                className="inerhero"
                style={{ backgroundImage: `url(${homeBanner2})` }}
              >
                <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                  <div className="row">
                    <div className="col-md-7 heros-text text-center text-md-start">
                      <h5
                        className="text-info mb-2 "
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        Helping Them Home For Good
                      </h5>
                      <h1
                        className="display-4 fw-bold mb-3"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        We Transition People out of{" "}
                        <span className="text-warning">Homelessness</span>
                      </h1>
                      <p
                        className="mb-4"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        Our shelters and supportive service programs assist
                        people who are homeless or at risk of being homeless.
                      </p>
                      <div className="d-flex gap-2">
                        {/* <button className="nav-donate btn btn-warning text-dark me-3">
                          Give Help
                        </button> */}
                        <givebutter-widget class="giveButterBtn" id="pzBZ3p">
                          Give Help Widget
                        </givebutter-widget>
                        <button
                          className="nav-donate btn btn-outline-light"
                          data-aos="fade-up"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                          onClick={handleclick}
                        >
                          Get Help
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="heroOverlay"></div>
              <div
                className="inerhero"
                style={{ backgroundImage: `url(${homeBanner3})` }}
              >
                <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                  <div className="row">
                    <div className="col-md-7 heros-text text-center text-md-start">
                      <h5
                        className="text-info mb-2"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        Helping Them Home For Good
                      </h5>
                      <h1
                        className="display-4 fw-bold mb-3"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        We Transition People out of{" "}
                        <span className="text-warning">Homelessness</span>
                      </h1>
                      <p
                        className="mb-4"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        Our shelters and supportive service programs assist
                        people who are homeless or at risk of being homeless.
                      </p>
                      <div
                        className="d-flex gap-2"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        {/* <button className="nav-donate btn btn-warning text-dark me-3">
                          Give Help
                        </button> */}
                        <givebutter-widget class="giveButterBtn" id="pzBZ3p">
                          Give Help Widget
                        </givebutter-widget>
                        <button className="nav-donate btn btn-outline-light">
                          Get Help
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="homeless-intervention ">
          <div className="container-fluid">
            <div className="row">
              {/* Left Section */}
              <div className="lft col-lg-8 py-5 col-md-12   d-flex flex-column justify-content-center ">
                <div className=" content   left-section">
                  <h2
                    className="how-we-do   mb-3"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    {/* What Is{" "}
                    <span className="highlight-text">
                      Our <img src={wedotagline} className="wedotagline" />{" "}
                    </span>
                    Goal? */}
                    <span className="highlight-text">
                      Empowering{" "}
                      <img src={wedotagline} className="wedotagline" />{" "}
                    </span>
                    Change. Building{" "}
                    <span className="highlight-text">
                      Stability
                      <img src={wedotagline} className="wedotagline" />{" "}
                    </span>
                    .
                  </h2>
                  <p
                    className="wedopara"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    At HIS-OC, we believe every person deserves the opportunity
                    to rebuild their life with dignity, stability, and hope. We
                    provide transitional, emergency, and homeless housing
                    programs that welcome all, without discrimination based on
                    race, color, religion, gender identity, age, national
                    origin, disability, marital status, sexual orientation, or
                    military status. We believe sustainability means more than
                    providing shelter—HIS-OC empowers individuals to rewrite
                    their story through wraparound services that foster
                    independence, resilience, and lasting change.
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="col-lg-4 col-md-12 right-section d-flex flex-column justify-content-center   text-center text-md-start">
                <h2
                  className="right-section-text"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Be the <span className="text-warning">Change</span> That You
                  Think the{" "}
                  <span className="text-success position-relative">
                    World <img className="changeworld" src={changeworld} />
                  </span>{" "}
                  Deserves!
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="what-sets-us-apart text-white py-5">
          <div className="container text-center">
            <h2
              className="setus  fw-bold mb-2"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              Why Choose Us For Your{" "}
              <span className="text-warning  position-relative">
                Donations?{" "}
                <img className="apartunderline" src={apartunderline} />
              </span>
            </h2>
            <p
              className="mb-0"
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              HIS-OC offers outreach, emergency shelter, and transitional
              housing programs designed to address homelessness at every stage.
              While emergency shelters provide critical short-term relief, our
              approach goes further, focusing on structured, long-term solutions
              that break the cycle of homelessness. Our transitional housing
              programs in Orange County provide job training, therapy, case
              management, and educational opportunities, empowering individuals
              to achieve lasting self-sufficiency. Through our homeless housing
              programs, we equip people with the tools, resources, and support
              needed to build stable futures and prevent a return to
              homelessness. At HIS-OC, we believe stability means more than a
              roof—it’s about empowerment, growth, and the opportunity for a
              fresh start. With your support, we can continue guiding people
              toward permanent housing and a better life.
            </p>
          </div>
        </section>

        <section className="help-available py-5 text-lg-start text-center">
          {/* <div className="container text-center mb-4">
            <h2
              className="helptagline fw-bold mb-3"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              Help is{" "}
              <span className="text-success position-relative">
                Available{" "}
                <img className="availabletagline" src={availabletagline} />
              </span>
            </h2>
            <p
              className=" mb-4"
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              We've been helping people find their way home since 1989.
            </p>
            <div
              className="row "
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="heplcard  col-md-4 mb-3 mb-md-0">
                <div className="stat-card   py-4 px-3 shadow-sm rounded h-100">
                  <h3 className="helped fw-bold text-success">{statsData[0]?.number}</h3>
                  <p className="mb-0">{statsData[0]?.help}</p>
                </div>
              </div>
              <div className=" heplcard col-md-4 mb-3 mb-md-0">
                <div className="stat-card   py-4 px-3 shadow-sm rounded h-100">
                  <h3 className="helped fw-bold text-primary">{statsData[0]?.value}</h3>
                  <p className="mb-0">{statsData[0]?.title}</p>
                </div>
              </div>
              <div className="heplcard col-md-4">
                <div className="stat-card   py-4 px-3 shadow-sm rounded h-100">
                  <h3 className="helped fw-bold text-warning">{statsData[0]?.percentage}</h3>
                  <p className="mb-0">{statsData[0]?.guide}</p>
                </div>
              </div>
            </div>
          </div> */}
          <Stats ApiDatastats={ApiDatastats} />

          <div className="  mt-5">
            <div className="row gap-5">
              {/* Left Card */}
              <div className="transitionalbg  col-md-12 col-lg-5 mb-4 mb-md-0">
                <div className=" p4    ">
                  {/* <p
                    className="para1 text-uppercase mb-2 px-4  text-white "
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Providing Shelter and Reunification for Families
                  </p> */}
                  <h2
                    className="fw-bold text-white  px-4 "
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    HIS-OC{" "}
                    <span
                      className="text-warning position-relative"
                      data-aos="fade-right"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Programs{" "}
                      <img
                        className="programunderline"
                        src={programunderline}
                      />
                    </span>
                  </h2>
                  <p
                    className="para px-4 text-lg-start text-center"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    HIS-OC offers a range of programs to support individuals and
                    families who are homeless or at risk of homelessness. Our
                    shelters and supportive services are dedicated to meeting
                    the needs of our community’s most vulnerable, providing
                    safety, stability, and pathways toward independence. We are
                    firmly committed to equity and inclusion.
                  </p>
                  <button
                    className="parabtn  btn px-4 "
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                    onClick={handleroute}
                  >
                    View All
                  </button>
                </div>
              </div>

              {/* Right Card with vertical scrollable content */}
              <div className="col-md-12 col-lg-5">
                <div className="scrollable-container-y p-2 rounded    ">
                  {/* Individual Cards */}
                  {ApiDataGetprogram?.data?.map((items, index) => (
                    <div key={index} className="p-3 mb-3 rounded">
                      <div className="d-flex justify-content-center">
                        <div className="programImgSec">
                          <div className="programImg">
                            <img
                              src={base_url_image + items?.image}
                              alt={items?.title || "Image"}
                              className="img-fluid mb-2"
                            />
                          </div>
                          <img
                            src={programAfter}
                            alt="programAfter"
                            className="programAfter"
                          />
                        </div>
                      </div>
                      <h5
                        className="cardtitle fw-bold text-lg-start text-center"
                        dangerouslySetInnerHTML={{ __html: items?.title }}
                      />
                      {/* <span className="youthshelter">{items?.title}</span> */}
                      {/* </h5> */}
                      <p
                        className="small mb-2"
                        dangerouslySetInnerHTML={{
                          __html: items?.short_description,
                        }}
                      />
                      <button
                        onClick={() => handleroutelist(items?.slug)}
                        className="cardbtn btn btn-outline-primary btn-sm"
                      >
                        Learn More
                      </button>
                    </div>
                  ))}

                  {/* Add more cards as needed */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {ApiDataevent?.data?.length > 0 && (
          <Events ApiDataevent={ApiDataevent} />
        )}

        {/* <Ourpodcasts
          ApiDatapodcast={ApiDatapodcast}
          view="View all Podcast"
          handlepodcastlistroute={handlepodcastlistroute}
        /> */}

        {/* Testimonial */}
        <Testimonial />

        {/* Announcement section */}

        <section className="news-section">
          <div className="container-fluid">
            <div className="row gap-2">
              {/* Left Static Card */}
              <div className="col-md-12 col-lg-5 newsleftsection d-flex flex-column justify-content-center">
                <div className="text-content text-lg-start text-center">
                  <h3
                    className="title fw-bold mb-4  "
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    News,{" "}
                    <span className="text-warning position-relative">
                      Announcements
                      <img
                        className="announcementunderline"
                        src={announcementunderline}
                        alt="Underline"
                      />
                    </span>{" "}
                    and Achievements
                  </h3>
                  <p
                    className="para "
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Last year, we provided homeless housing programs to over
                    1,000 individuals, guiding 85% of them to permanent housing.
                    Through Orange County in-home supportive services, we offer
                    essential resources to help individuals reintegrate into
                    society. Your donations make these life-changing outcomes
                    possible. Help us continue our mission today either by
                    donating or with your volunteering passion.
                  </p>
                  <button
                    onClick={handleannouncement}
                    className="allannouncementbtn btn btn-outline-light mt-3"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    View all Announcements
                  </button>
                </div>
              </div>

              {/* Right Carousel Section */}
              <div
                className="col-lg-6
           col-md-12 position-relative"
              >
                <div className="mt-5">
                  <Slider {...settings}>
                    {ApiDataGet?.data?.map((news) => (
                      <div
                        key={news.id}
                        className="p-4 mt-4"
                        data-aos={news?.animation}
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        <div className="news-card bg-white shadow-sm rounded">
                          <img
                            src={base_url_image + news.image}
                            alt={news.title}
                            className="img-fluid rounded mb-2"
                          />
                          <div className="p-3">
                            <p className="text-muted small mb-1">{news.date}</p>
                            <h5 className="fw-bold mb-2">{news.title}</h5>
                            <p
                              className=" small mb-3"
                              dangerouslySetInnerHTML={{
                                __html:
                                  news.short_description ||
                                  "No description available",
                              }}
                            ></p>
                            {/* <p className="small mb-3">{news.short_description}</p> */}
                            <button
                              onClick={() =>
                                handlerouteannouncementdetail(news?.id)
                              }
                              className="btn btn-outline-primary btn-sm"
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}

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
                  {/* Text Here */}
                  <span className="dedication  position-relative">
                    Sponsor Brands{" "}
                    <img
                      className="dedicationunderline"
                      src={dedicationunderline}
                    />
                  </span>
                </h2>
              </div>
            </div>
            {ApiDataSponsorBrands?.data?.length > 0 && (
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={false}
                speed={1000}
                breakpoints={{
                  500: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                className={
                  ApiDataSponsorBrands?.data?.length > 4
                    ? ""
                    : "sponsored_brands_slider"
                }
                navigation
              >
                {ApiDataSponsorBrands.data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className=" p-2">
                      <div className="card p-3 border-0 text-center sponsorBrands_cards">
                        <div className="profile-container">
                          <a href={item.link}>
                            <img
                              src={
                                item?.image
                                  ? `${base_url_image}${item.image}`
                                  : placeholder
                              }
                              alt="Sponsor Brand"
                              className="profile-image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </section>

        <Sponsor />
      </Layout>

      <section className="VolunteerModal">
        <Modal size="md" show={donatenotify} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {/* <h4 className="modaltitle text-center">Unite With Us To Rewrite</h4> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <p className="text-center text-muted" style={{ fontStyle: 'italic' }}>
          Life Stories.
        </p> */}
            <h4 className="modaltitle  ">Unite With Us To Rewrite</h4>
            <h4 className="modaltitle">
              {" "}
              <span> Life Stories. </span>
            </h4>
            <Form>
              {/* Email Field */}
              <Form.Group className="mt-3" controlId="email">
                <div className=" modalfields d-flex align-items-center border rounded p-2">
                  {/* <i className="bi bi-envelope"></i> */}
                  <Form.Control
                    type="text"
                    placeholder="Code"
                    className="border-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>
              </Form.Group>

              {/* Password Field */}

              {/* Submit Button */}
              <Button
                // onClick={handleShowforget2}
                variant="success"
                type="submit"
                className="mt-4 w-100 becomeavalbtn"
              >
                forgot
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}

export default Home;
