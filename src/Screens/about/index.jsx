import "./index.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import Leadership from "../../components/Leadership";
import heropage2 from "../../Assets/images/heropage2.webp";
import Layout from "../../components/layout";
import { FaMapMarkerAlt } from "react-icons/fa";

import ourmission from "../../Assets/images/ourmission.webp";
import missionunderline from "../../Assets/images/missionunderline.webp";
import ourstory from "../../Assets/images/ourstory.webp";
import hopeunderline from "../../Assets/images/hopeunderline.webp";
import HeroSection from "../../components/herosection";
import tagline from "../../Assets/images/tagline.webp";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.webp";
import { Link } from "react-router-dom";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.webp";
import dedicationunderline from "../../Assets/images/dedicationunderline.webp";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";
import { useGet, usePost } from "../Api/usePost";
import { toast } from "react-toastify";
function About() {
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

    document.title = "About - HIS OC " || "HOME- HIS OC";
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
          pagetitle="About"
          pagename="About"
          title2="HIS-OC"
          programpojectaboutherounderline="programpojectaboutherounderlinemain"
          programprojectsubttle="givedonationsubtitle"
          objectPosition={!isMobile && "0px -70px"}
        />

        <section className="homeless-intervention">
          <div className="container-fluid">
            <div className="row">
              {/* Left Section */}

              <div className="col-lg-4 col-md-12 right-section d-flex flex-column justify-content-center  text-center text-md-start">
                <h2
                  className="right-section-text px-4"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Transforming Lives Restoring Hope <br />
                  {/* <span className="text-warning">Change</span> You Wish To <br /> */}
                  <span className="text-success position-relative">
                    Hole <img className="hopeunderline" src={hopeunderline} />
                  </span>
                </h2>
              </div>
              {/* Right Section */}

              <div className="lft col-lg-8 col-md-12  py-4 d-flex flex-column justify-content-center ">
                <div className="content left-section px-4">
                  <h2
                    className="how-we-do   mb-3"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Our{" "}
                    <span className="highlight-text position-relative">
                      Mission{" "}
                      <img src={missionunderline} className="wedotagline" />
                    </span>
                  </h2>
                  <p
                    className="wedopara px4"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    The mission of Homeless Intervention Services of Orange
                    County is to provide support and assistance to the
                    underprivileged and unhoused to improve their quality of
                    life, and to help them regain stability and hope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="legacy">
          <div className="container-fluid">
            <div className="row">
              {/* Left Section */}

              <div className="col-lg-4 col-md-12 right-section d-flex flex-column justify-content-center p-5 text-center text-md-start">
                <h2
                  className="right-section-text px-4"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  A{" "}
                  <span className=" text-black  position-relative">
                    Legacy <img className="hopeunderline" src={hopeunderline} />
                  </span>{" "}
                  Of Compassion Everyone Deserves <br />
                  {/* <span className="text-warning">Change</span> You Wish To <br /> */}
                </h2>
              </div>
              {/* Right Section */}
              {/* in react give full reponsive code using bootstrap */}

              <div className="  col-lg-8 col-md-12    d-flex flex-column justify-content-center ">
                <div
                  className="content left-section px-4 justify-content-center"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h2 className="how-we-do  mb-3">
                    Our{" "}
                    <span className="highlight-text  position-relative">
                      Story{" "}
                      <img src={missionunderline} className="wedotagline" />{" "}
                    </span>
                  </h2>
                  <p
                    className="wedopara px4"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Homeless Intervention Services of Orange County (HIS-OC) has
                    a remarkable history of helping unhoused and
                    housing-insecure families since 1989. The organization began
                    to take shape by a vision that Placentia Presbyterian Church
                    had by advocating for a local family living in a park. They
                    purchased a farmhouse neighboring their church, which became
                    HIS House, a transitional shelter for underprivileged,
                    unhoused families. For almost 35 years, our transitional
                    housing program has continued to grow and provide
                    comprehensive wraparound services for families, including:
                    <ul>
                      <li>
                        The transitional house consists of a private bedroom for
                        each family; the rest of the home is shared living.
                      </li>
                      <li>On-site weekly Case Management.</li>
                      <li>On-site weekly Case Management.</li>
                      <li>Job skills and placement assistance</li>
                      <li>On-site weekly Case Management.</li>
                      <li>
                        Connections to physical and mental health services
                      </li>

                      <li>Documentation assistance</li>
                      <li>Family reunification</li>
                      <li>Parenting classes</li>

                      <li>Financial literacy classes.</li>
                    </ul>
                    After 30 years in operation, thousands of people served, and
                    numerous additions to the house, in 2020, HIS House became
                    its own 501 (c)(3) nonprofit to expand services beyond the
                    transitional shelter. Our new name is Homeless Intervention
                    Services of Orange County or HIS-OC. While the mission
                    remains the same, we have implemented several new programs
                    to help more people overcome homelessness and achieve
                    independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="homeless-intervention">
          <div className="container-fluid">
            <div className="row">
              {/* Left Section */}

              <div className="col-lg-4 col-md-12 right-sectionVision d-flex flex-column justify-content-center  text-center text-md-start">
                <h2
                  className="right-section-text px-4"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Empowering instant, secure, and meaningful <br />
                  {/* <span className="text-warning">Change</span> You Wish To <br /> */}
                  <span className="mb-2 text-success position-relative">
                    <span className="mb-2"> connections </span>
                    <img className="hopeunderline" src={hopeunderline} />
                  </span>
                </h2>
              </div>
              {/* Right Section */}

              <div className="lft col-lg-8 col-md-12  py-4 d-flex flex-column justify-content-center ">
                <div className="content left-section px-4">
                  <h2
                    className="how-we-do   mb-3"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Our{" "}
                    <span className="highlight-text position-relative">
                      Vision{" "}
                      <img src={missionunderline} className="wedotagline" />
                    </span>
                    {/* <span className=" text-black  position-relative">
                      Vision <img className="hopeunderline" src={hopeunderline} />
                    </span>{" "} */}
                  </h2>
                  <p
                    className="wedopara px4"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Through various programs and initiatives, we aim to address
                    solutions through education, empowerment, and community
                    engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="homeless-intervention">
          <div className="container-fluid">
            <div className="row">
              {/* Left Section */}

              <div className="col-lg-4 col-md-12 right-sectionVisionApproach d-flex flex-column justify-content-center  text-center text-md-start">
                <h2
                  className="right-section-text px-4"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Our approach focuses on simplicity, security, and <br />
                  {/* <span className="text-warning">Change</span> You Wish To <br /> */}
                  <span className="text-success position-relative">
                    innovation{" "}
                    <img className="hopeunderline" src={hopeunderline} />
                  </span>
                </h2>
              </div>
              {/* Right Section */}

              <div className="lft col-lg-8 col-md-12  py-4 d-flex flex-column justify-content-center ">
                <div className="content left-section px-4">
                  <h2
                    className="how-we-do   mb-3"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Our{" "}
                    <span className="highlight-text position-relative">
                      Approach{" "}
                      <img src={missionunderline} className="wedotagline" />
                    </span>
                  </h2>
                  <p
                    className="wedopara px4"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Our approach is rooted in compassion, empathy, and the
                    belief that everyone deserves equal opportunities and a
                    chance to thrive, creating a positive impact and
                    contributing to a more inclusive and equitable society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="homeless-intervention">
          <div className="container-fluid">
            <div className="row bg-color justify-content-center">
              {/* Left Section */}

              {/* <div className="col-lg-4 col-md-12 right-sectionVisionApproach d-flex flex-column justify-content-center  text-center text-md-start">
                <h2 className="right-section-text px-4" data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000">
                  Our approach focuses on simplicity, security, and        <br /> 
                  <span className="text-success position-relative">
                    innovation <img className="hopeunderline" src={hopeunderline} />
                  </span>

                </h2>
              </div> */}
              {/* Right Section */}

              <div className="  col-lg-8 col-md-12   ">
                <div className="content left-section text-center px-4">
                  <h2
                    className="text-center how-we-do   mb-3"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Recent{" "}
                    <span className="highlight-text position-relative">
                      Developments{" "}
                      <img src={missionunderline} className="wedotagline" />
                    </span>
                  </h2>
                  <p
                    className="wedopara px4"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    As we continually aim to improve HIS-OC, we have become
                    CalAIM (California Advancing and Innovating Medi-Cal)
                    providers. CalAIM is a long-term commitment to transform
                    Medi-Cal, making the program more equitable, coordinated,
                    and person-centered to help people maximize their health and
                    life trajectories. This program allows us to expand our
                    services to the public by offering Community Support
                    Services: Housing Transition Navigation Services, Housing
                    Deposits, and Housing Tenancy and Sustaining Services.
                    Additionally, since June 2023, we have been under new
                    leadership; we are excited to have Christine Stellino, ASW,
                    as the new Executive Director. She brings a new vision
                    through an equitable, diverse, fair, and inclusive approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  <a
                    href="mailto:info@his-oc.org"
                    className="careercontact d-flex align-items-center justify-content-end"
                  >
                    <i className="bi bi-envelope me-2"></i>
                    info@his-oc.org
                  </a>
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

export default About;
