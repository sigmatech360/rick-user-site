import { usePost, useGet } from "../Api/usePost";
import "./index.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Modal, Button, Form } from "react-bootstrap";
import Layout from "../../components/layout";
import sponsorunderline from "../../Assets/images/sponsorunderline.webp";
import sponsorshipsectionimg from "../../Assets/images/sponsorshipsectionimg.webp";
import { FiSmartphone } from "react-icons/fi";
import createdunderline from "../../Assets/images/createdunderline.webp";
import HeroSection from "../../components/herosection";
import drivingchangecard1 from "../../Assets/images/drivingchangecard1.webp";
import drivingchangecard2 from "../../Assets/images/drivingchangecard2.webp";
import dedicationunderline from "../../Assets/images/dedicationunderline.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import donateunderline from "../../Assets/images/donateunderline.webp";
import programlegacy from "../../Assets/images/programlegacy.webp";
import applyemployeebg from "../../Assets/images/applyemployeebg.webp";
import contectbf from "../../Assets/images/contactbg.webp";
import partnerimg from "../../Assets/images/partnerimg.webp";

import sponsorimg1 from "../../Assets/images/sponsor-img-1.webp";
import sponsorimg2 from "../../Assets/images/sponsor-img-2.webp";
import sponsorimg3 from "../../Assets/images/sponsor-img-3.webp";

import { toast } from "react-toastify";
import { base_url_image } from "../Api/base_url";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import ReactHelmet from "../../components/ReactHelmet";

const sponsorData = [
  {
    id: 1,
    image: sponsorimg1,
    title: "Street Outreach Program Sponsorship",
    description:
      "By sponsoring our Street Outreach Program, you can ensure that our team has the resources needed to connect with individuals living on the streets, providing immediate assistance, and guiding them to safety and support.",
    collectedAmount: 4599,
    targetAmount: 10000,
  },
  {
    id: 2,
    image: sponsorimg2,
    title: "Housing First Initiative Sponsorship",
    description:
      "Sponsor our Housing First Initiative to support efforts in quickly moving individuals and families into permanent housing, providing them with stability and the opportunity to rebuild their lives.",
    collectedAmount: 4599,
    targetAmount: 10000,
  },
  {
    id: 3,
    image: sponsorimg3,
    title: "Housing First Initiative Sponsorship",
    description:
      "Sponsor our Housing First Initiative to support efforts in quickly moving individuals and families into permanent housing, providing them with stability and the opportunity to rebuild their lives.",
    collectedAmount: 4599,
    targetAmount: 10000,
  },
];

function Contactus() {
  const [formState, setFormState] = useState({});
  const {
    ApiData: ApiDataotp,
    loading: loadingotp,
    error: errorotp,
    post: postotp,
  } = usePost("/sponsorship-request");
  const {
    ApiData: ApiDataGet,
    loading: loadingGet,
    error: errorGet,
    get: getdata,
  } = useGet("/project");
  const {
    ApiData: SponsoredprogramApiDataGet,
    loading: sponsoredprogramloadingGet,
    error: sponsoredprogramerrorGet,
    get: getsponsoredprogramdata,
  } = useGet("/sponsored-program");

  const [selectedprogrammodal, setSelectedprogrammodal] = useState(false);
  useEffect(() => {
    getdata();
    getsponsoredprogramdata();

    document.title = "Sponsorship - HIS OC" || "HOME - HIS OC";
  }, []);

  const handleprogramClose = () => {
    setSelectedprogrammodal(false);
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

  const [donatenotify, setDonatenotiy] = useState(false);

  const handleClose = (event) => {
    event.preventDefault();
    setDonatenotiy(false);
  };

  const handlenotifymessage = (event) => {
    event.preventDefault();
    setDonatenotiy(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setDonatenotiy(true);
  };

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

  const [formdata, setFormdata] = useState({ program_title: "" });

  const handleChangeprogram = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleprogramSubmit = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();
    for (const key in formdata) {
      formDataMethod.append(key, formdata[key]); // Fixed: used correct state
    }
    setSelectedprogrammodal(false);
    postotp(formDataMethod);
  };

  return (
    <>
    <ReactHelmet />
      <Layout>
        <HeroSection
          heroimg={contectbf}
          pagetitle="Sponsorship  "
          pagename="  Sponsorship"
          programprojectsubttle="givedonationsubtitle"
          programpojectaboutherounderline="hopeunderline"
        />

        <section className="sponsor-project-sec">
          <div className="container">
            {/* <div className="row">
              {SponsoredprogramApiDataGet?.data?.map((item, index) => (
                <div className="col-lg-4 mb-4">
                  <div className="sponsor-card h-100">
                    <div className="sponsor-card-header">
                      <img
                        src={base_url_image + item?.image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="sponsor-card-body">
                      <div className="sponsor-card-body-top">
                        <div className="sponsor-card-body-title">
                          <h3>{item?.title}</h3>
                          <button
                            onClick={() => {
                              setSelectedprogrammodal(true);
                              setFormdata({ project_id: item?.id });
                            }}
                          >
                            Sponsor Now
                          </button>
                        </div>

                        <p
                          dangerouslySetInnerHTML={{
                            __html: item?.short_description,
                          }}
                        ></p>
                      </div>

                      <div className="sponsor-card-body-bottom">
                        <div className="progress">
                          <div
                            className="progress-bar bg-theme"
                            role="progressbar"
                            style={{
                              width: `${
                                item?.collected_amount && item?.targeted_amount
                                  ? (item.collected_amount /
                                      item.targeted_amount) *
                                    100
                                  : 0
                              }%`,
                            }}
                            aria-valuenow={item?.collected_amount || 0}
                            aria-valuemin="0"
                            aria-valuemax={item?.targeted_amount || 100}
                          ></div>
                        </div>
                        <div className="sponsor-card-body-footer">
                          <h6 className="sponsor-card-colledted-amount">
                            Collected: ${item?.collected_amount}
                          </h6>
                          <h6 className="sponsor-card-target-amount">
                            Target: ${item?.targeted_amount}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="row">
              <div className="col-md-12 sponsorProjectSlider">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  // navigation
                  pagination={{ clickable: true }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {SponsoredprogramApiDataGet?.data?.map((item, index) => (
                    <SwiperSlide key={item.id || index}>
                      <div className="sponsor-card h-100">
                        <div className="sponsor-card-header">
                          <img
                            src={base_url_image + item?.image}
                            className="img-fluid"
                            alt={item?.title}
                          />
                        </div>
                        <div className="sponsor-card-body">
                          <div className="sponsor-card-body-top">
                            <div className="sponsor-card-body-title">
                              <h3>{item?.title}</h3>
                              <button
                                onClick={() => {
                                  setSelectedprogrammodal(true);
                                  setFormdata({ project_id: item?.id });
                                }}
                              >
                                Sponsor Now
                              </button>
                            </div>

                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.short_description,
                              }}
                            ></p>
                          </div>

                          <div className="sponsor-card-body-bottom">
                            <div className="progress">
                              <div
                                className="progress-bar bg-theme"
                                role="progressbar"
                                style={{
                                  width: `${
                                    item?.collected_amount &&
                                    item?.targeted_amount
                                      ? (item.collected_amount /
                                          item.targeted_amount) *
                                        100
                                      : 0
                                  }%`,
                                }}
                                aria-valuenow={item?.collected_amount || 0}
                                aria-valuemin="0"
                                aria-valuemax={item?.targeted_amount || 100}
                              ></div>
                            </div>
                            <div className="sponsor-card-body-footer">
                              <h6 className="sponsor-card-colledted-amount">
                                Collected: ${item?.collected_amount}
                              </h6>
                              <h6 className="sponsor-card-target-amount">
                                Target: ${item?.targeted_amount}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section className="Partner">
          <div className="container-fluid">
            <div className="row gx-0 ">
              {/* Left side with form and text */}
              <div className="contactformleft col-lg-6 p-4 p-md-5">
                <h3
                  className="display-5 fw-bold mb-2"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Partner With{" "}
                  <span className="do-it">
                    HIS-OC{" "}
                    <img className="donateunderline" src={donateunderline} alt="Partner With HIS-OC To Create Lasting Impact" />
                  </span>
                  To Create Lasting Impact
                </h3>
                <p
                  className="para mb-3 "
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Sponsorship opportunities allow you to make a significant
                  difference by supporting our programs.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Name Input */}
                    <div className="col-md-6 mb-3">
                      <div className="partnerfield">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          onChange={handleChange}
                          name="name"
                          value={formState?.name}
                          type="text"
                          className="partnerinputfield form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="col-md-6 mb-3">
                      <div className="partnerfield">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          onChange={handleChange}
                          name="email"
                          value={formState?.email}
                          type="email"
                          className="partnerinputfield form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    {/* Phone Input */}
                    <div className="col-md-6 mb-3">
                      <div className="partnerfield">
                        <span className="input-group-text">
                          <i className="bi bi-telephone"></i>
                        </span>
                        <input
                          onChange={handleChange}
                          name="phone"
                          value={formState?.phone}
                          type="tel"
                          className="partnerinputfield form-control"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>

                    {/* Select Project */}
                    <div className="col-md-6 mb-3">
                      <div className="partnerfield">
                        <span className="input-group-text">
                          <i className="bi bi-list-task"></i>
                        </span>
                        <select
                          name="program_title" // Name should match the key in the state
                          value={formState?.program_title || ""} // Default value to prevent uncontrolled warning
                          onChange={handleChange}
                          className="partnerinputfield form-select"
                          required
                        >
                          <option value="">Select Project</option>

                          {SponsoredprogramApiDataGet?.data?.map((items) => (
                            <option value={items?.program_title}>
                              {items?.title}
                            </option>
                          ))}
                          {/* <option value="project2">Project 2</option>
                          <option value="project3">Project 3</option> */}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="mb-3">
                    <div className="partnerfieldmessage">
                      <span className="input-group-textmsg">
                        <i className="bi bi-chat-dots"></i>
                      </span>
                      <textarea
                        onChange={handleChange}
                        name="message"
                        value={formState?.message}
                        className="partnerinputfield form-control"
                        rows="4"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn becomeexponser"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Become a Sponsor
                    </button>
                  </div>
                </form>
              </div>

              {/* Right side with map image */}
              <div className="col-lg-6 d-none d-lg-block">
                <div className=" ">
                  <img
                    src={sponsorshipsectionimg}
                    alt="Map"
                    className="img-fluid sponsorshipsectionimg "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="inquiries-call d-flex justify-content-center align-items-center">
          <h2 className=" inquiries-calltitle fw-bold text-white">
            For Any Inquiries Call The Hotline:{" "}
            <a href="tel:(714)%20993-5774" className="position-relative">
              {" "}
              (714) 993-5774{" "}
              <img className="sponsorunderline" src={sponsorunderline} alt="Contact" />
            </a>
          </h2>
        </section>
      </Layout>
      <section className="VolunteerModal">
        <Modal size="md" show={donatenotify} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>
              {/* <h4 className="modaltitle text-center">Unite With Us To Rewrite</h4> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <p className="text-center text-muted" style={{ fontStyle: 'italic' }}>
          Life Stories.
        </p> */}
            {/* <h4 className="modaltitle  ">Unite With Us To Rewrite</h4> */}
            <h4 className="modaltitle">
              {" "}
              <span className="d-flex text-center mx-auto justify-content-center">
                {" "}
                Your message has been sent successfully. We will get back to you
                soon{" "}
              </span>
            </h4>
            <Form>
              {/* Email Field */}

              {/* Password Field */}

              {/* Submit Button */}
              <Button
                onClick={handleClose}
                variant="success"
                type="submit"
                className="mt-4 w-100 becomeavalbtn"
              >
                Close
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
      <section className="VolunteerModal">
        <Modal
          size="md"
          show={selectedprogrammodal}
          onHide={handleprogramClose}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {/* <h4 className="modaltitle text-center">Unite With Us To Rewrite</h4> */}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="modaltitle">
              Sponsorship opportunities allow you to make a significant
              difference by supporting our programs.
            </p>
            <h4 className="modaltitle">
              <span> Life Stories. </span>
            </h4>

            {/* Form Start */}
            <Form onSubmit={handleprogramSubmit}>
              {/* Name Field */}
              <Form.Group className="mt-3" controlId="name">
                <div className="modalfields d-flex align-items-center border rounded p-2">
                  <i className="bi bi-person"></i>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Name"
                    value={formdata?.name || ""}
                    onChange={handleChangeprogram}
                    name="name"
                    className="border-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>
              </Form.Group>

              {/* Email Field */}
              <Form.Group className="mt-3" controlId="email">
                <div className="modalfields d-flex align-items-center border rounded p-2">
                  <i className="bi bi-envelope"></i>
                  <Form.Control
                    type="email"
                    required
                    placeholder="Email"
                    value={formdata?.email || ""}
                    onChange={handleChangeprogram}
                    name="email"
                    className="border-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>
              </Form.Group>

              {/* Phone Number Field */}
              <Form.Group className="mt-3" controlId="phone">
                <div className="modalfields d-flex align-items-center border rounded p-2">
                  <FiSmartphone className="me-2 text-muted" />
                  <Form.Control
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formdata?.phone || ""}
                    onChange={handleChangeprogram}
                    name="phone"
                    className="border-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>
              </Form.Group>

              {/* Project Selection */}
              <Form.Group className="mt-3" controlId="project_id">
                <div className="position-relative">
                  {/* Icon inside the select box */}
                  <span className="input-group-text position-absolute top-50 start-0 translate-middle-y px-3">
                    <FontAwesomeIcon icon={faList} />
                  </span>

                  {/* Select Box */}
                  <Form.Select
                    name="program_title"
                    value={formdata?.program_title || ""}
                    onChange={handleChangeprogram}
                    required
                    className="form-select ps-5" // Adds padding so text doesn't overlap the icon
                  >
                    <option value="">Select Project</option>
                    {SponsoredprogramApiDataGet?.data?.map((items) => (
                      <option key={items?.id} value={items?.program_title}>
                        {items?.title}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>

              {/* Message Field */}
              <Form.Group className="mt-3" controlId="message">
                <div className="position-relative">
                  {/* Icon inside the textarea field */}
                  <span className="sponsor-programmessage position-absolute   start-0 translate-middle-y px-3">
                    <FontAwesomeIcon
                      icon={faCommentDots}
                      className="text-muted"
                    />
                  </span>

                  {/* Textarea Field */}
                  <Form.Control
                    as="textarea"
                    rows="4"
                    placeholder="Enter your message"
                    value={formdata?.message || ""}
                    onChange={handleChangeprogram}
                    name="message"
                    className="form-control ps-5" // Adds padding so text doesn't overlap the icon
                    required
                  />
                </div>
              </Form.Group>
              {/* Submit Button */}
              <Button
                variant="success"
                type="submit"
                className="mt-4 w-100 becomeavalbtn"
              >
                Submit Form
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}

export default Contactus;
