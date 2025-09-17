import "./index.css";
import { Link, Links, useNavigate } from "react-router-dom";
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

import { ToastContainer, toast } from "react-toastify";

import { useContext, useEffect, useState } from "react";
import {
  VolunteerModalsignup,
  VolunteerModalforget,
  VolunteerModallogin,
  VolunteerModalforget2,
} from "../modal";
import { useGet, usePost } from "../../Screens/Api/usePost";
import { AuthContext } from "../../Routers/AuthContext";
import { requestPermission } from "../../useFirebaseMessaging";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [userData, setUserData] = useState({});

  const [errordays, setErrordays] = useState(true);
  const [errorslots, setErrorslots] = useState(true);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsslots, setSelectedItemsslots] = useState([]);

  const { setIsLoggedIn } = useContext(AuthContext);

  const [naveshow, setNavshow] = useState(false);
  const handleclick = () => {
    setNavshow((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const gettoken = () => {
    setLogintoken(localStorage.getItem("token"));
  };

  const {
    ApiData: ApiData,
    loading: loading,
    error: errorRegister,
    post: post,
  } = usePost("/user-register");
  const {
    ApiData: ApiDatalogin,
    loading: loadinglogin,
    error: errorlogin,
    post: postlogin,
  } = usePost("/user-login");
  const {
    ApiData: ApiDataotp,
    loading: loadingotp,
    error: errorotp,
    post: postotp,
  } = usePost("/otp-verification");
  const {
    ApiData: ApiDatareset,
    loading: loadingreset,
    error: errorreset,
    post: postreset,
  } = usePost("/reset-password");
  const {
    ApiData: ApiDataGet,
    loading: loadingGet,
    error: errorGet,
    get: getdata,
  } = useGet("/edit-account");
  const {
    ApiData: ApiDataPostforget,
    loading: Postloadingforget,
    error: Posterrorforget,
    post: postforget,
  } = usePost("/forgot-password");

  const [logintoken, setLogintoken] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmitforget = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();

    for (const key in userData) {
      formDataMethod.append(key, userData[key]);
    }

    postforget(formDataMethod);
  };

  const handleSubmitforgetotp = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();

    for (const key in userData) {
      formDataMethod.append(key, userData[key]);
    }

    postotp(formDataMethod);
  };
  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();
    for (const key in userData) {
      formDataMethod.append(key, userData[key]);
    }
    if (!localStorage.getItem("device_token")) {
      requestPermission();
    }
    formDataMethod.append("device_token", localStorage.getItem("device_token"));
    await postlogin(formDataMethod);
    navigate("/");
  };
  useEffect(() => {
    if (ApiDatalogin?.success === true) {
      localStorage.setItem("token", ApiDatalogin?.data?.token);
      setShowModallogin(false);
      setUserData(() => {
        // console.log("Clearing userData..."); // Debug log
        return {};
      });
      navigate("/");
      toast.success(ApiDatalogin?.message);
      setIsLoggedIn(true);
      gettoken();
    } else if (ApiDatalogin?.success == false) {
      toast.error(ApiDatalogin?.message);
    } else {
      // setShowModallogin(true)

      toast.error(ApiDatalogin?.message);
    }
  }, [ApiDatalogin]);

  let available_slots = [];

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

  useEffect(() => {
    if (ApiDataotp?.status === true) {
      toast.success(ApiDataotp?.message);
      setShowModalforget2(false);
      // toast.success("Password updated successfully")

      setUserData({});
      localStorage.setItem("code", ApiDataotp?.data?.code);
      localStorage.setItem("email", ApiDataotp?.data?.email);
      setShowModalforget2(false);

      setShowModalreset(true);
    } else {
      toast.success(ApiDataotp?.message);
    }
  }, [ApiDataotp]);

  useEffect(() => {
    if (ApiDataPostforget?.status == true) {
      setShowModalforget(false);
      setUserData({});
      setShowModalforget2(true);
      toast?.success(ApiDataPostforget?.message);
    }
  }, [ApiDataPostforget]);

  useEffect(() => {
    if (token) {
      getdata();
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [available_days, setWeekDays] = useState([]);

  useEffect(() => {
    if (ApiData?.success) {
      localStorage.setItem("token", ApiData?.data?.token);
      // setLogintoken(logintken);
      // Close modal
      setShowModal(false);

      setUserData({});
      toast.success(ApiData?.message);

      gettoken();
    } else if (ApiData && ApiData?.success == false) {
      // Show error toast

      // toast.error(ApiData?.message?.email[0]);
      gettoken();
    }
  }, [ApiData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();
    const { name, value, selectedOptions } = e.target;

    if (userData?.password !== userData.password_confirmation) {
      toast.error("Passwords do not match");
    } else if (!selectedItems || selectedItems?.length === 0) {
      setErrordays("Please fill this field");
    } else if (!selectedItemsslots || selectedItemsslots?.length === 0) {
      setErrorslots("Please fill this field");
    } else {
      for (const key in userData) {
        formDataMethod.append(key, userData[key]);
      }

      // Ensure selectedItemsslots is an array before pushing it
      // if (Array.isArray(selectedItemsslots)) {
      //   available_slots = [...selectedItemsslots]; // Overwrite available_slots with the selected slots
      // } else {
      //   // If it's not an array, you might want to handle it differently, maybe wrap it in an array
      //   available_slots.push(selectedItemsslots);
      // }

      // Append available_slots as an array
      formDataMethod.append(
        "available_slots",
        JSON.stringify(selectedItemsslots)
      );
      formDataMethod.append("available_days", JSON.stringify(selectedItems));
      if (!localStorage.getItem("device_token")) {
        requestPermission();
      }
      formDataMethod.append(
        "device_token",
        localStorage.getItem("device_token")
      );

      console.log("available_slots Slot (Array check):", available_slots);
      console.log(
        "Is available_slots an array?",
        Array.isArray(available_slots)
      );
      console.log("available_slots Slot type:", typeof available_slots);

      await post(formDataMethod);
      // if (errorRegister) {
      //   toast.error(errorRegister);
      // }
    }
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
                      {!token && (
                        <li>
                          <Link onClick={handleShow} href="#!" className="">
                            Become A Volunteer
                          </Link>
                        </li>
                      )}
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
                      {/* <li>
                        <Link
                          onClick={scrollToTop}
                          to={"/ourpodcastlist"}
                          className=""
                        >
                          Our Podcast
                        </Link>
                      </li> */}
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
                  to="https://www.linkedin.com/company/hisoc/"
                  className="text-white me-3"
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="https://www.instagram.com/homelessintoc/?hl=en"
                  className="text-white me-3"
                >
                  <i className="bi bi-instagram fs-5"></i>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="https://www.snapchat.com/@his-oc"
                  className="text-white me-3"
                >
                  <i className="bi bi-snapchat fs-5"></i>
                </Link>

                <Link
                  onClick={scrollToTop}
                  to="https://www.tiktok.com/@HIS-OC"
                  className="text-white me-3"
                >
                  <i className="bi bi-tiktok fs-5"></i>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="https://www.youtube.com/@HISOC"
                  className="text-white me-3"
                >
                  <i className="bi bi-youtube fs-5"></i>
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

      {/* <VolunteerModalsignup 
        handleClose={handleClose}
        show={showModal}
        loginbtn={handleShowlogin}
      /> */}
      <VolunteerModalsignup
        errordays={errordays}
        setSelectedItems={setSelectedItems}
        selectedItems={selectedItems}
        errorslots={errorslots}
        setSelectedItemsslots={setSelectedItemsslots}
        selectedItemsslots={selectedItemsslots}
        handleClose={handleClose}
        show={showModal}
        handleSubmit={handleSubmit}
        weekDays={available_days}
        loginbtn={handleShowlogin}
        username={userData.name}
        password_confirmation={userData.password_confirmation}
        password={userData.password}
        phone={userData.phone}
        email={userData.email}
        handleChange={handleChange}
      />
      {/* <VolunteerModallogin
        handleClose={handleCloselogin}
        show={showModallogin}
        forgetbtn={handleShowforget}
      /> */}
      <VolunteerModallogin
        password={userData.password}
        email={userData.email}
        handleClose={handleCloselogin}
        show={showModallogin}
        forgetbtn={handleShowforget}
        handleChange={handleChange}
        handleSubmitlogin={handleSubmitlogin}
      />

      {/* <VolunteerModalforget
        handleClose={handleCloseforget}
        show={showModalforget}
        handleShowforget2={handleShowforget2}
      /> */}
      <VolunteerModalforget
        handleChange={handleChange}
        email={userData.email}
        handleSubmitforget={handleSubmitforget}
        handleClose={handleCloseforget}
        show={showModalforget}
        handleShowforget2={handleShowforget2}
      />

      {/* <VolunteerModalforget2
        show={showModalforget2}
        handleClose={handleCloseforget2}
      /> */}
      <VolunteerModalforget2
        handleChange={handleChange}
        email={userData.email}
        otp={userData.otp}
        handleSubmitforgetotp={handleSubmitforgetotp}
        show={showModalforget2}
        handleClose={handleCloseforget2}
      />
    </>
  );
}

export default Footer;
