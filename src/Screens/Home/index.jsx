import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";

import { Modal, Button, Form, Alert } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa";
// import "./index.css";
import { Link } from "react-router-dom";
import { FiSmartphone } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { base_url_image } from "../Api/base_url";

import React, { useContext, useEffect, useState } from "react";

import announcementunderline from "../../Assets/images/announcementunderline.svg";
import googlePlay from "../../Assets/images/Google_Play_Store_badge.svg";
import applePlay from "../../Assets/images/Apple_Play_Store_badge.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import donateicon from "../../Assets/images/donateicon.png";
import availabletagline from "../../Assets/images/availabletagline.png";
import apartunderline from "../../Assets/images/apartunderline.png";
import "./index.css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import tagline from "../../Assets/images/tagline.png";

import programunderline from "../../Assets/images/programunderline.svg";
import announcement1 from "../../Assets/images/announcement1.png";
import announcement2 from "../../Assets/images/announcement2.png";

import changeworld from "../../Assets/images/changeworld.png";

import wedotagline from "../../Assets/images/wedotagline.png";
import { useGet, usePost } from "../Api/usePost";
import housingcard1 from "../../Assets/images/housingcard1.png";
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

  // console.log(`Diff in days: ${diffInDays} and event date is ${eventDate}`);

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
    // console.log('ApiDatastats?.data',ApiDatastats?.data);

    // let filterData = ApiDatastats?.data.filter((stats)=>stats.show_in_web == 1 );
    // setStatsData(ApiDatastats);

    // getStats();

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
    // if (window.gbWidgets.aid) {
    //   // window.gbWidgets.init(); // In case of React Router SPA behavior
    //   console.log("Givebutter widget initialized");

    // }
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
  const [ticketData, setTicketData] = useState(false);
  useEffect(() => {
    if (ApiDataevent?.data?.length > 0) {
      let data = ApiDataevent?.data;
      // data.forEach(event => {
      //   const hasTicket = !!event.ticketing_link;
      //   console.log('ticket', hasTicket);

      //   const eventDate = parseEventDate(event.date);
      //   if (hasTicket && isLessThan7Days(eventDate)) {
      //     setShowTicketAlert(true);
      //     break;
      //   }
      // });
      for (const event of data) {
        const hasTicket = !!event.ticketing_link;
        const eventDate = parseEventDate(event.date);

        if (hasTicket && isLessThan7Days(eventDate)) {
          setShowTicketAlert(true);
          setTicketData({
            ticket_link: event.ticketing_link,
            title: event.title,
          });
          break;
        }
      }
    }
  }, [ApiDataevent]);

  useEffect(() => {
      getdataevent();
  }, [isLoggedIn]);

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
            <strong>{ticketData.title}</strong> is coming soon! Book your ticket
            now.{" "}
            <Alert.Link href={ticketData.ticket_link}>Ticket Link</Alert.Link>.
          </Alert>
        )}
        <section className="homeless-intervention">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            slidesPerView={"auto"}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="inerhero">
                <div className="container slide-content d-flex flex-column justify-content-center align-items-start text-white h-100">
                  <div className="row">
                    <div className="col-md-7 heros-text text-center text-md-start">
                      <h5
                        className="text-info mb-2"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        Making Them Homes for Life
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
                        From Homelessness to{" "}
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
                      <h3>HIS-OC Restoring Hope!</h3>

                      <p
                        className="mb-4"
                        data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000"
                      >
                        Our shelters and supportive services provide
                        comprehensive transitional housing programs for those at
                        risk of or experiencing homelessness in Orange County.
                        Your support helps us provide safe housing, food, and
                        resources to those in desperate need.
                      </p>
                      <div className="d-flex align-items-center gap-2 ">
                        {/* <button className="btn btn-warning text-dark me-3">
                        Give Help
                      </button> */}
                        {/* <button
                          className="nav-donate btn btn-warning   text-dark"
                          data-aos="fade-up"
                          data-aos-offset="0"
                          data-aos-duration="1000"
                          onClick={() => {
        if (window.gbWidgets) {
          window.gbWidgets.open({ id: "pzBZ3p" });
        }
      }}
                        > Give Help Btn
                          {" "}
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
                        <span target="_blank" className="appLink">
                          <img src={applePlay} className="w-100" alt="" />
                        </span>
                      </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="inerhero">
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
              <div className="inerhero">
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
                    What Is{" "}
                    <span className="highlight-text">
                      Our <img src={wedotagline} className="wedotagline" />{" "}
                    </span>
                    Goal?
                  </h2>
                  <p
                    className="wedopara"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    At HIS-OC, we believe everyone deserves a chance to rebuild
                    their lives with dignity and stability. We are committed to
                    providing transitional housing, emergency housing, and
                    homeless housing programs without discrimination. Our doors
                    are open to all, regardless of race, color, religion, gender
                    identity, age, national origin, disability, marital status,
                    sexual orientation, or military status. Through Orange
                    County in-home supportive services, we ensure those we serve
                    receive not just shelter, but the care and resources needed
                    to regain independence. Your support helps us create an
                    inclusive community where no one is left behind.
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
              Unlike emergency shelters that provide temporary relief, HIS-OC
              takes a structured, long-term approach to breaking the cycle of
              homelessness. Our transitional housing programs in Orange County
              offer job training, therapy, case management, and education,
              helping individuals achieve lasting self-sufficiency. Through
              homeless housing programs, we equip people with the tools and
              support they need to build a stable future and prevent a return to
              homelessness. At HIS-OC, we believe stability goes beyond shelter,
              it’s about empowerment, growth, and a new beginning. Your support
              helps us continue guiding people toward permanent housing and a
              better life
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
                    We have multiple programs that assist people who are homeless or at risk of being homeless. Our shelters and supportive service programs provide assistance to our community’s most vulnerable population. HIS-OC does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.
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
                      <img
                        src={base_url_image + items?.image}
                        alt={items?.title || "Image"}
                        className="img-fluid rounded mb-2"
                      />
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

        <Ourpodcasts
          ApiDatapodcast={ApiDatapodcast}
          view="View all Podcast"
          handlepodcastlistroute={handlepodcastlistroute}
        />

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
