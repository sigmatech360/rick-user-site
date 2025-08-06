import "./index.css";
import heropage2 from "../../Assets/images/heropage2.png";
import Layout from "../../components/layout";
import ourmission from "../../Assets/images/ourmission.png";
import missionunderline from "../../Assets/images/missionunderline.png";
import React, { useState, useEffect } from "react";
import aboutherounderline from "../../Assets/images/aboutherounderline.png";
import housedefaultimg from "../../Assets/images/housedefaultimg.png";
import loader from "../../Assets/images/loader.gif";
import resoucecenter from "../../Assets/images/resourcecenter.jpg";
import programAfter from "../../Assets/images/programAfter.svg";
import { useGet, usePost } from "../Api/usePost";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Leadership from "../../components/Leadership";
import houseprogramunderline from "../../Assets/images/houseprogramunderline.png";
import connection from "../../Assets/images/connection.png";
import hopeunderline from "../../Assets/images/hopeunderline.png";
import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.png";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.png";
import dedicationunderline from "../../Assets/images/dedicationunderline.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../../components/contact";
import Sponsor from "../../components/sponsor";
import houseimg from "../../Assets/images/houseimg.png";
import youth from "../../Assets/images/youth.png";
import Oc from "../../Assets/images/Oc.png";
import Closet from "../../Assets/images/closet.png";
import ourworkbg from "../../Assets/images/ourworkbg.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { base_url_image } from "../Api/base_url";

// import { FaArrowRight } from "react-icons/fa";
function ProgramsProjects() {
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

  const {
    ApiData: ApiDataGetprogram,
    loading: loadingGetprogram,
    error: errorGetprogram,
    get: getdataprogram,
  } = useGet("/program");

  console.log("ApiDataGetprogram", ApiDataGetprogram);

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
    getdataprogram();

    document.title = " Our - Work   - HIS OC ";
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
          <FaArrowRight />
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
      link: "/transitional-housing-program",
      title: "Transitional    ",
      title2: "Program",
      highlightedWords: "Housing",
      description: "Providing Shelter and Reunification for Families",
      imgSrc: houseimg,
    },
    {
      link: "/transitional-aged-youth-shelter",
      title: "Transitional Aged  ",
      title2: "Shelter",
      highlightedWords: "Youth",
      description: "Supporting Transitional Age Youth",

      imgSrc: youth,
    },
    {
      link: "/transitional-housing-program",
      title: "Home Share  ",

      highlightedWords: "OC",
      description: "Helping College Students Transition",

      imgSrc: Oc,
    },
    {
      link: "/transitional-aged-youth-shelter",
      title: "Housing & Resource  ",

      description: "Guiding To Services And Support",
      highlightedWords: "Connection",
      imgSrc: connection,
    },
    {
      link: "/transitional-housing-program",
      title: "Charity’s Closet",
      description: "Our Trusted Partner",
      highlightedWords: " ",
      imgSrc: Closet,
    },
  ];
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const handleprogramdtl = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    if (ApiDataGetprogram?.data?.length > 0) {
      setHoveredProgram(ApiDataGetprogram.data[0]);
    }
  }, [ApiDataGetprogram]);
  return (
    <>
      <Layout>
        <HeroSection
          heroimg={ourworkbg}
          pagetitle="Our"
          pagename="  Work "
          title2="Work "
          programprojectsubttle="programprojectsubttle"
          programpojectaboutherounderline="programpojectaboutherounderline"
        />

        <section className="info-section d-flex flex-column justify-content-center align-items-center py-5">
          <div className="container ourprogramgradbg">
            <p
              className="info-text text-start"
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              We have multiple programs that assist people who are homeless or
              at risk of being homeless. Our shelters and supportive service
              programs provide assistance to our community’s most vulnerable
              population. HIS-OC does not and shall not discriminate on the
              basis of race, color, religion (creed), gender, gender expression,
              age, national origin (ancestry), disability, marital status,
              sexual orientation, or military status, in any of its activities
              or operations.
            </p>
            <hr />
            <div className="mt-3">
              <p className="fs-2">Our Work</p>
              <p>
                At <span className="fw-bolder">HIS-OC</span>, we go beyond
                shelter, we provide hope, stability, and lasting change. Through
                a range of programs, we help individuals and families
                experiencing or at risk of homelessness rebuild their lives.
                From safe housing and career development to mental health
                support and financial literacy, we offer the tools needed for
                long-term independence.
              </p>
              <p>
                We are committed to inclusivity. HIS-OC welcomes all
                individuals, regardless of race, color, gender, age, disability,
                marital status, sexual orientation, military status, or
                background. Everyone deserves a path to a brighter future.
              </p>
            </div>
          </div>
        </section>

        <section className="programs-section ">
          <div className="container my-5">
            <div className="row">
              {/* Program List Section */}
              <div className="programs-section-left col-lg-6">
                <div
                  className="bordertop programaList mb-3"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  {ApiDataGetprogram?.data?.map((program, index) => (
                    <Link
                      onClick={handleprogramdtl}
                      to={`/our-work/${program?.slug}`}
                      key={index}
                    >
                      <div
                        className={`program-item p-3 ${
                          program.highlighted ? "highlighted" : ""
                        }`}
                        onMouseEnter={() => setHoveredProgram(program)}
                        onMouseLeave={() => setHoveredProgram(program)}
                      >
                        <div className="programImage d-lg-none mb-3 text-center">
                          
                          <div className="d-flex justify-content-center">
                            <div className="programImgSec">
                              <div className="programImg">
                              <img
                                src={
                                  program.image
                                    ? base_url_image + program.image
                                    : loader
                                }
                                alt="Program Image"
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
                        </div>
                        <div className="d-flex justify-content-between mb-0 align-items-center">
                          <div>
                            <h5 className="mb-1">
                              {program?.title}
                              <span className="highlighted-word position-relative">
                                {program?.highlightedWords} {""}
                                <img
                                  src={aboutherounderline}
                                  className="programunderlines"
                                />
                              </span>
                              {/* {program?.title2} */}
                            </h5>
                            <p
                              className="mb-0 text-muted"
                              dangerouslySetInnerHTML={{
                                __html:
                                  program.short_description ||
                                  "Default description here",
                              }}
                            ></p>
                          </div>
                          <Link
                            onClick={handleprogramdtl}
                            to={`/our-work/${program?.slug}`}
                            className="arrow-con"
                          >
                            <FontAwesomeIcon icon={faArrowRight} />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h5 className="title font-bold">
                    Homeless <span> Intervention </span> services Of Orange
                    Country{" "}
                    <span className=" position-relative">
                      ( HIS-OC){" "}
                      <img
                        src={houseprogramunderline}
                        className="houseprogramunderline"
                      />
                    </span>{" "}
                  </h5>
                </div>
              </div>

              {/* Image Section */}
              <div className="col-lg-6   d-lg-block d-none">
                <div className="d-flex justify-content-center">
                  <div className="programImgSec">
                    <div className="programImg">
                    <img
                      src={
                        hoveredProgram
                          ? base_url_image + hoveredProgram.image
                          : loader
                      }
                      alt="Hovered Program"
                      className="img-fluid "
                    />

                    </div>
                    <img
                      src={programAfter}
                      alt="programAfter"
                      className="programAfter"
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-lg-6 mt-5 ">
                <div className="text-lg-start text-center">
                  <img src={resoucecenter} className="img-fluid" />
                </div>
              </div>

              <div className="col-lg-6 mt-5  ">
                <div className="   ">
                  In 2022 HIS-OC began a partnership with Lot 318 and The City
                  of Placentia to operate two resource centers in Placentia.
                  Located at The Gomez Center (1701 Atwood Ave) and The Whitten
                  Center (900 S Melrose St), HIS-OC staffs the center and works
                  with our partners to provide resource connections and housing
                  navigation as well as after-school tutoring; parenting,
                  financial literacy, fitness, and other classes; a food and
                  necessities pantry; and community events throughout the year.
                  The centers are located in two of Orange County’s most
                  under-resourced areas, and are open to all who find themselves
                  in need of assistance. Our Resource Navigator is bilingual in
                  English and Spanish. Resource Centers with the following
                  addresses
                  <ul>
                    <li>Program Called: Resource Connection</li>
                    <li>
                      Whitten Center 900 S Melrose St, Placentia, CA 92870
                    </li>
                    <li>Gomez Center 1701 Atwood Ave, Placentia, CA 92870</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
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

        {/* <Leadership /> */}
        <Sponsor />
      </Layout>
    </>
  );
}

export default ProgramsProjects;
