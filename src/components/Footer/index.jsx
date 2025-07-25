import "./index.css";
import { Link, Links } from "react-router-dom";
import bottomfooterlogo3 from "../../Assets/images/bottomfooterlogo3.png";
import bottomfooterlogo1 from "../../Assets/images/bottomlogo1.png";
import bottomfooterlogo2 from "../../Assets/images/bottomfooterlogo2.png";
import charitynavigator from "../../Assets/images/charitynavigator.png";
import footerlogo from "../../Assets/images/footerlogo.svg";
import googlePlay from "../../Assets/images/Google_Play_Store_badge.svg";
import applePlay from "../../Assets/images/Apple_Play_Store_badge.png";

import Whistleblowerpolicy from "../../Assets/pdf/10-Whistleblower-policy.docx.pdf";
import NondiscriminationPolicy from "../../Assets/pdf/Non-discrimination-Policy-CLJ-Rev.pdf";
import GrievanceEnglish from "../../Assets/pdf/Grievance-12-2021-English.pdf";
import GrievanceSpanish from "../../Assets/pdf/Grievance-12-2021-Spanish.pdf";
import donateform from "../../Assets/pdf/2025-990-1.pdf";

import { useState } from "react";
import {
  VolunteerModalsignup,
  VolunteerModalforget,
  VolunteerModallogin,
  VolunteerModalforget2,
} from "../modal";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [naveshow, setNavshow] = useState(false);
  const handleclick = () => {
    setNavshow((prevState) => !prevState);
  };

  const [showModal, setShowModal] = useState(false);
  const [showModallogin, setShowModallogin] = useState(false);
  const handleShowlogin = () => {
    setShowModal(false);
    setShowModallogin(true);
  };

  const handleCloselogin = () => setShowModallogin(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [showModalforget, setShowModalforget] = useState(false);

  const handleShowforget = () => {
    setShowModallogin(false);
    setShowModalforget(true);
  };

  const handleCloseforget = () => setShowModalforget(false);

  const [showModalforget2, setShowModalforget2] = useState(false);

  const handleShowforget2 = () => {
    setShowModalforget(false);
    setShowModalforget2(true);
  };

  const handleCloseforget2 = (event) => {
    event.preventDefault();
    setShowModalforget2(false);
  };

  return (
    <>
      <section className="footer" name="/about">
        <footer className="footer py-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-3 mb-lg-0 text-lg-start text-center">
                <Link to={"/"}>
                  <img src={footerlogo} className="footerlogo  mb-2  " />
                </Link>
                {/* <p className="title fw-bold mb-2">
                  Building A Future Without{" "}
                  <span className="text-primary">Homelessness.</span>
                </p> */}
                <p>Be the Helping Hand! </p>
                <p className="fs-5">
                  From Homelessness to{" "}
                  <span className="text-primary">Hope</span>.
                </p>
                <p>
                  At{" "}
                  <Link to="/" className="hiscolint  text-primary">
                    HISOC,
                  </Link>{" "}
                  we provide transitional housing, essential support, and
                  community driven solutions to help individuals move from
                  homelessness to stability. Through services like Housing
                  Transition Navigation, Housing Deposits, and Housing Tenancy
                  and Sustaining, we create lasting pathways to permanent
                  housing. Your support makes this possible because everyone
                  deserves a place to call home.
                </p>
              </div>
              <div className="col-lg-6 col-md-9">
                <div className="row">
                  <div className="col-md-4  text-lg-start text-center">
                    <h5>About HIS-OC</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/about" onClick={scrollToTop} className="">
                          About Us
                        </Link>
                      </li>
                      {/* <li>
                        <Link onClick={scrollToTop} to={"/ourwork"} className="">
                        Our Work
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          onClick={scrollToTop}
                          to={"/gethelp"}
                          className=""
                        >
                          Get Help
                        </Link>
                      </li>
                      <li>
                        <Link onClick={handleShow} href="#!" className="">
                          Become A Volunteer
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4  text-lg-start text-center">
                    <h5>Our Impact</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          onClick={scrollToTop}
                          to={"/our-work"}
                          className=""
                        >
                          Our Work
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={scrollToTop}
                          to={"/sponsorship"}
                          className=""
                        >
                          Sponsorship
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop} to={"/"} className="">
                          HISOC Works
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4  text-lg-start text-center">
                    <h5>Get Involved</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          onClick={scrollToTop}
                          to={"/top-volunteer"}
                          className=""
                        >
                          Top Volunteer
                        </Link>
                      </li>
                      {/* <li>
                        <Link onClick={scrollToTop} to={"/"} className="">
                          Events
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          onClick={scrollToTop}
                          to={"/ourpodcastlist"}
                          className=""
                        >
                          Our Podcast
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="d-flex justify-content-center justify-content-md-start gap-3 mt-md-5 my-3"
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
              <div className="col-lg-2 col-md-3 text-lg-start text-center">
                <h5>Resources</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      onClick={scrollToTop}
                      to={"/givedonation"}
                      className=""
                    >
                      Give Donation
                    </Link>
                  </li>

                  <li>
                    <Link onClick={scrollToTop} to={"/contactus"} className="">
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <div className="footer-donate-btns">
                  <div className="btn-group">
                    <a
                      href={donateform}
                      target="_blank"
                      className="footer-donate-btn footer-donate-btns-1"
                    >
                      2023 990
                    </a>
                    <Link
                      to="/givedonation"
                      className="footer-donate-btn footer-donate-btns-2"
                    >
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <footer className="footer-bottom bg-dark text-white py-3">
          <div className="container d-flex flex-wrap justify-content-xl-between justify-content-center align-items-center">
            {/* Left section with logos */}
            <div className="d-flex align-items-center flex-wrap justify-content-center mb-3 mb-md-0">
              <img
                src={bottomfooterlogo1}
                alt="501(c)(3)"
                className="footer-logo me-3"
              />
              <img
                src={bottomfooterlogo2}
                alt="Nonprofit Central"
                className="footer-logo1 me-3"
              />
              <Link to={"https://www.guidestar.org/profile/84-2790299"}>
                <img
                  src={bottomfooterlogo3}
                  alt="Gold Transparency 2024"
                  className="footer-logo3 me-3"
                />
              </Link>

              <img
                src={charitynavigator}
                alt="Nonprofit Central"
                className="footer-logo3 ml-2 me-3"
              />
            </div>

            {/* Center section for copyright text */}
            <div className="text-center text-md-end socialicon">
              <div className="d-flex mb-2 justify-content-center justify-content-xl-end">
                <Link
                  onClick={scrollToTop}
                  to="https://www.facebook.com/homeless.intervention.oc"
                  className="text-white me-3"
                >
                  <i className="bi bi-facebook fs-5"></i>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="https://twitter.com/Homeless_Int_OC"
                  className="text-white me-3"
                >
                  <i className="bi bi-x fs-5"></i>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="https://www.instagram.com/homeless_intervention_oc/?hl=en"
                  className="text-white me-3"
                >
                  <i className="bi bi-instagram fs-5"></i>
                </Link>
              </div>

              {/* <p className="mb-0 text-xl-end text-center">
                © 2023 Homeless Intervention Services of Orange County | All Rights Reserved
                <br />
                All gifts to our organization are tax-deductible as allowed by law. 501(c)(3) ID# 84-2790299
                <Link to={"/"} className="text-white">
                  Legal
                </Link>{" "}
                |{" "}
                <Link to={"/Privacy-policy"} className="text-white">
                  Privacy
                </Link>
              </p> */}

              <p className="mb-md-0 mb-2 text-xl-end text-center">
                © 2025 Homeless Intervention Services of Orange County | All
                Rights Reserved
              </p>
              <p className="mb-0 text-xl-end text-center">
                All gifts to our organization are tax-deductible as allowed by
                law. 501(c)(3) ID# 84-2790299
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="footer-bottom-links">
                  <Link to={"/privacy-notice"}>Privacy Notice</Link> |{" "}
                  <a href={GrievanceEnglish} target="_blank">
                    HMIS Grievance Form (English)
                  </a>{" "}
                  |{" "}
                  <a href={GrievanceSpanish} target="_blank">
                    HMIS Grievance Form (Spanish)
                  </a>{" "}
                  |{" "}
                  <a href={NondiscriminationPolicy} target="_blank">
                    Non-Discrimination Policy
                  </a>{" "}
                  |{" "}
                  <a href={Whistleblowerpolicy} target="_blank">
                    Whistleblower Policy
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>

      <VolunteerModalsignup
        handleClose={handleClose}
        show={showModal}
        loginbtn={handleShowlogin}
      />
      <VolunteerModallogin
        handleClose={handleCloselogin}
        show={showModallogin}
        forgetbtn={handleShowforget}
      />

      <VolunteerModalforget
        handleClose={handleCloseforget}
        show={showModalforget}
        handleShowforget2={handleShowforget2}
      />
      <VolunteerModalforget2
        show={showModalforget2}
        handleClose={handleCloseforget2}
      />
    </>
  );
}

export default Footer;
