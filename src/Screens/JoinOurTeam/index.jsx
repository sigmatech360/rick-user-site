// import "./index.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import Leadership from "../../components/Leadership";
import heropage2 from "../../Assets/images/heropage2.webp";
import Layout from "../../components/layout";
import { FaMapMarkerAlt } from "react-icons/fa";

import ourmission from "../../Assets/images/ourmission.png";
import missionunderline from "../../Assets/images/missionunderline.png";
import ourstory from "../../Assets/images/ourstory.png";
import hopeunderline from "../../Assets/images/hopeunderline.png";
import HeroSection from "../../components/herosection";
import tagline from "../../Assets/images/tagline.png";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.png";
import { Link } from "react-router-dom";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.png";
import dedicationunderline from "../../Assets/images/dedicationunderline.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";
import { useGet, usePost } from "../Api/usePost";
import { toast } from "react-toastify";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
function JoinOurTeam() {
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

  useEffect(() => {
    getdatamembers();

    document.title = "Join Our Team - HIS OC " || "HOME- HIS OC";
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
      anmation: "fade-right",
      name: "Christine Stellino",
      title: "Executive Director",
      imgSrc: drivingchangecard1, // replace with actual image paths
    },
    {
      anmation: "fade-up",
      name: "Libby Shroeder",
      title: "Chairmen",
      imgSrc: drivingchangecard2,
    },
    {
      anmation: "fade-down",
      name: "Barbara Buckley",
      title: "Vice Chairmen",
      imgSrc: drivingchangecard1,
    },
    {
      anmation: "fade-left",
      name: "Julie Suchard",
      title: "Treasurer",
      imgSrc: drivingchangecard2,
    },
  ];

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 1150) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Pehli baar component mount hone pe check karo
    checkScreenWidth();

    // Jab window resize ho tab bhi check karo
    window.addEventListener("resize", checkScreenWidth);

    // Clean up event listener jab component unmount ho
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={heropage2}
          pagetitle="Join Our"
          pagename="Join Our Team"
          title2="Team"
          programpojectaboutherounderline="programpojectaboutherounderlinemain"
          programprojectsubttle="givedonationsubtitle"
          objectPosition={!isMobile && "0px -70px"}
        />

        

        

        {/* <section className="driving-dedication">
          <div className="container my-5">
            <h2 className="title text-center mb-4"   data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="1000">
              Driving Change with{" "}
              <span className="dedication  position-relative">
                Dedication{" "}
                <img
                  className="dedicationunderline"
                  src={dedicationunderline}
                />
              </span>
            </h2>
            <p className="para   text-muted mb-5"   data-aos="fade-right"
                        data-aos-offset="0"
                        data-aos-duration="1000">
              Our leadership team consists of passionate professionals and
              community leaders dedicated to ending homelessness. Guided by a
              clear vision and a hands-on approach, they work tirelessly to
              ensure that HIS-OC delivers impactful, life-changing services.
            </p>

            <Slider {...settings}>
              {teamMembers.map((member, index) => (
                <div key={index} className="p-2"
                data-aos={member?.anmation}
                data-aos-offset="0"
                data-aos-duration="1000"
                >
                  <div className="card border-0 shadow-sm text-center">
                    <img
                      src={member.imgSrc}
                      className="card-img-top"
                      alt={`${member.name}`}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{member.name}</h5>
                      <p className="card-text text-muted">{member.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section> */}
        <section className="careersinternships">
          <div className="container-fluid my-5">
            <div className="row align-items-center justify-content-between">
              <div className="left-career col-lg-5 col-md-12 me-lg-4 mb-lg-0 mb-3 ">
                <div className="heroOverlay"></div>
                <div className="career-contact">
                  <p className="intershiptitle">
                    Join Our Team To End{" "}
                    <span className="hightlight">
                      Homelessness!{" "}
                      <img src={tagline} className="underline-image" />{" "}
                    </span>{" "}
                  </p>
                  <p className="intershippara">
                    Ready for a career with Homeless Intervention Services
                    Orange County to help disrupt homelessness? Become a part of
                    our team today! We’re a passionate team of individuals
                    working towards a worthy cause! We currently do not have any
                    open positions. For any further inquiries regarding careers
                    or applications, please contact us at (714) 993-5774 or
                    email us at info@his-oc.org
                  </p>
                  <p className=" intershippara">
                    We currently do not have any open positions. For any further
                    inquiries regarding careers or applications, please contact
                    us at:
                  </p>
                  <span className=" careerinternsip d-flex gap-4">
                    <Link
                      to="tel:(714)%20993-5774"
                      className="careercontact d-flex align-items-center"
                    >
                      <i className="bi bi-telephone-fill me-2"></i>
                      (714) 993-5774
                    </Link>
                    <Link
                      to={"mailto:info@his-oc.org"}
                      className="careercontact d-flex align-items-center"
                    >
                      <i className="bi bi-envelope me-2"></i>
                      info@his-oc.org
                    </Link>
                  </span>
                </div>
              </div>
              <div className="right-career col-lg-5 col-md-12 me-lg-4">
                <div className="career-contact">
                  <p className="intershiptitleOpportunities ">
                    Internship{" "}
                    <span className="hightlight">
                      Opportunities{" "}
                      <img src={tagline} className="underline-image" />{" "}
                    </span>{" "}
                    <br /> At HIS-OC{" "}
                  </p>
                  <p className="intershippara">
                    If you need to fulfill an internship requirement, we offer
                    opportunities at HIS-OC for college students in their junior
                    or senior year of their studies and to those pursuing
                    advanced degrees. These internships cover a variety of
                    program experiences including office support, childcare,
                    client education, and shelter operations. If you are
                    interested in internship opportunities, please send your
                    resume and a cover letter indicating your area of interest
                    to: Internship Coordinator HIS-OC, PO Box 1293 Placentia, CA
                    92871.
                  </p>

                  <span className="mailinternsip  -flex gap-4">
                    {/* <Link to="tel:(714)%20993-5774" className="iternshipcontact d-flex align-items-center">
                      <i className="bi bi-telephone-fill me-2"></i>
                      (714) 993-5774
                    </Link> */}
                    <span
                      // to={"mailto:info@his-oc.org"}
                      className=" mailinternsip   "
                    >
                      <FaMapMarkerAlt />
                      PO Box 1293, Placentia, CA 92871
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Leadership ApiDataGetmembers={ApiDataGetmembers} />
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

        <Sponsor />
      </Layout>
    </>
  );
}

export default JoinOurTeam;
