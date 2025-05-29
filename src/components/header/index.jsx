import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import donateicon from "../../Assets/images/donateicon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import placeholder from '../../Assets/images/placeholder.jpg'
import { usePost, useGet } from '../../Screens/Api/usePost'
import { base_url_image } from '../../Screens/Api/base_url'
import {
  faBell,
  faUser,
  faBars,
  faEllipsisV,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';


import {
  ChangePass,
  VolunteerModalsignup,
  VolunteerModalforget,
  VolunteerModallogin,
  VolunteerModalforget2,
} from "../modal";
import GiveButterStyler from "../GiveButter/GiveButterStyler";

function Header() {
  const [userData, setUserData] = useState({
  });

  const [errordays, setErrordays] = useState(true);
  const [errorslots, setErrorslots] = useState(true);

  const [selectedItems, setSelectedItems] = useState([]);

  const [getimg, setImg] = useState({})
  const [selectedItemsslots, setSelectedItemsslots] = useState([]);
  const [naveshow, setNavshow] = useState(false);
  const handleclick = () => { setNavshow((prevState) => !prevState); };
  const { ApiData: ApiData, loading: loading, error: error, post: post } = usePost('/user-register')
  const { ApiData: ApiDatalogin, loading: loadinglogin, error: errorlogin, post: postlogin } = usePost('/user-login')
  const { ApiData: ApiDataotp, loading: loadingotp, error: errorotp, post: postotp } = usePost('/otp-verification')
  const { ApiData: ApiDatareset, loading: loadingreset, error: errorreset, post: postreset } = usePost('/reset-password')
  const { ApiData: ApiDataGet, loading: loadingGet, error: errorGet, get: getdata } = useGet('/edit-account')
  const { ApiData: ApiDataPostforget, loading: Postloadingforget, error: Posterrorforget, post: postforget } = usePost('/forgot-password')

  const [logintoken, setLogintoken] = useState("");
  const token = localStorage.getItem('login')




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
  const handleSubmitlogin = (e) => {
    e.preventDefault()
    const formDataMethod = new FormData();
    for (const key in userData) {
      formDataMethod.append(key, userData[key]);
    }
    postlogin(formDataMethod);

  };

  let available_slots = [];

  const itmedata = {

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();
    const { name, value, selectedOptions } = e.target;

    if (userData?.password !== userData.password_confirmation) {
      toast.error("Passwords do not match");
    }
    else if (!selectedItems || selectedItems?.length === 0) {
      setErrordays("Please fill this field");
    }
    else if (!selectedItemsslots || selectedItemsslots?.length === 0) {
      setErrorslots("Please fill this field");
    }
    else {
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
      formDataMethod.append("available_slots", JSON.stringify(selectedItemsslots));
      formDataMethod.append("available_days", JSON.stringify(selectedItems));




      console.log("available_slots Slot (Array check):", available_slots);
      console.log("Is available_slots an array?", Array.isArray(available_slots));
      console.log("available_slots Slot type:", typeof available_slots);


      post(formDataMethod);
    }
  };

  useEffect(() => {

    if (ApiDataotp?.status === true) {
      toast.success(ApiDataotp?.message)
      setShowModalforget2(false)
      // toast.success("Password updated successfully")

      setUserData({});
      localStorage.setItem("code", ApiDataotp?.data?.code)
      localStorage.setItem("email", ApiDataotp?.data?.email)
      setShowModalforget2(false)

      setShowModalreset(true)
    } else {
      toast.success(ApiDataotp?.message)
    }
  }, [ApiDataotp])




  useEffect(() => {
    if (ApiDataPostforget?.status == true) {
      setShowModalforget(false)
      setUserData({});
      setShowModalforget2(true)
      toast?.success(ApiDataPostforget?.message)
    }
  }, [ApiDataPostforget])


  useEffect(() => {
    getdata()
  }, [token])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [available_days, setWeekDays] = useState([]);

  const handleSubmitreset = (e) => {
    e.preventDefault()
    const formDataMethod = new FormData();
    for (const key in userData) {
      formDataMethod.append(key, userData[key]);
    }
    const email = localStorage.getItem("email")
    const code = localStorage.getItem("code")
    formDataMethod.append('email', email);
    formDataMethod.append('code', code);
    postreset(formDataMethod);
  };

  useEffect(() => {
    if (ApiDatareset == true) {
      setShowModalreset(false)
      setUserData({});
      toast.success(ApiDatareset?.message)
    }
    else {
      setShowModalreset(false)
      toast.success(ApiDatareset?.message)
    }


  }, [ApiDatareset])





  const navigate = useNavigate()
  const gettoken = () => {

    setLogintoken(localStorage.getItem("login"));
  }


  useEffect(() => {
    setLogintoken(localStorage.getItem("login"));
  }, [])





  useEffect(() => {
    if (ApiData?.success) {
      localStorage.setItem("login", ApiData?.data?.token);
      // setLogintoken(logintken);
      // Close modal
      setShowModal(false);

      setUserData({});
      toast.success(ApiData?.message);

      gettoken()
    } else if (ApiData && ApiData?.success == false) {
      // Show error toast

      // toast.error(ApiData?.message?.email[0]);
      gettoken()
    }
  }, [ApiData]);




  useEffect(() => {
    if (ApiDatalogin?.success === true) {
      localStorage.setItem("login", ApiDatalogin?.data?.token);
      setShowModallogin(false)
      setUserData(() => {
        console.log("Clearing userData..."); // Debug log
        return {};
      });
      navigate("/")
      toast.success(ApiDatalogin?.message)
      gettoken()
    } else if(ApiDatalogin?.success == false){
      
      toast.error(ApiDatalogin?.message);
    }
     else {
      // setShowModallogin(true)

      toast.error(ApiDatalogin?.message);
    }
  }, [ApiDatalogin])



  const [showModal, setShowModal] = useState(false);
  const [showModallogin, setShowModallogin] = useState(false);
  const handleShowlogin = () => {
    setShowModal(false);
    setShowModallogin(true);
  };


  const Handlelogout = () => {

    // const toeken =  localStorage.removeItem('login')
    setLogintoken(localStorage.removeItem('login'))
    toast.success("Volunteer Logout Successfully")
  }

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
  const [showModalreset, setShowModalreset] = useState(false);


  const handleShowforget2 = () => {
    setShowModalforget(false);
    setShowModalforget2(true);
  };

  const handleCloseforget2 = (event) => {
    event?.preventDefault();
    setShowModalforget2(false);
  };



  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  // const token = localStorage.getItem("login");
  // setLogintoken(token);

  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleclicks = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const location = useLocation();
  // const logintken = localStorage.getItem("login")
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.givebutter.com/latest.umd.cjs?acct=EEzrwTqr8xPNFSdt";
    // script.src = "https://cdn.givebutter.com/widget.v2.js";
    script.id = "givebutter-script";
    script.async = true;
    // document.body.appendChild(script);
    script.onload = () => {
      // Optional: Set state or perform an action after the script loads
      setScriptLoaded(true);
      console.log("Script loaded successfully");
      if (window.GivebutterWidget) {
        window.GivebutterWidget.init();
        console.log("🎉 GivebutterWidget initialized");
      } else {
        console.warn("⚠️ GivebutterWidget not found after load");
      }
    };

    script.onerror = () => {
            console.error("❌ Givebutter script failed to load");
          };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when component unmounts
    };
  }, []);

  // useEffect(() => {
  //   const existingScript = document.getElementById("givebutter-script");

  //   if (!existingScript) {
  //     const script = document.createElement("script");
  //     script.src =
  //       "https://widgets.givebutter.com/latest.umd.min.js?acct=EEzrwTqr8xPNFSdt&embed=modal";
  //     script.id = "givebutter-script";
  //     script.async = true;

  //     // console.log('script', script);
      

  //     script.onload = () => {
  //       console.log("✅ Givebutter loaded");
  //     };

  //     script.onerror = () => {
  //       console.error("❌ Givebutter script failed to load");
  //     };

  //     document.body.appendChild(script);
  //   }
  // }, []);









  // const [scriptLoaded, setScriptLoaded] = useState(false);

  return (
    <>
      <section className="header-section">
        <div className="container py-2">
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-between align-items-center text-white">
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-2"></i>
              PO Box 1293, Placentia, CA 92871
            </div>
            <div className="separator d-none d-md-block"></div>
            <div className="header-item d-flex align-items-center">
              <i className="bi bi-clock me-2"></i>
              Mon – Thu 9AM – 5PM, Fri 9AM – 4PM
            </div>
            <div className="separator d-none d-md-block"></div>
            <Link to="tel:(714)%20993-5774" className="header-item d-flex align-items-center">
              <i className="bi bi-telephone-fill me-2"></i>
              (714) 993-5774
            </Link>
            <div className="separator d-none d-md-block"></div>
            <Link to={"mailto:info@his-oc.org"} className="header-item d-flex align-items-center">
              <i className="bi bi-envelope me-2"></i>
              info@his-oc.org
            </Link>
          </div>
        </div>
      </section>

      <section>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light px-3"> */}
        <nav className="navbar navbar-expand-lg   ">
          <div className="container">
            <Link
              className="navbar-brand d-flex align-items-center d-lg-none"
              to="/"
            >
              <img src={logo} alt="Logo" className="mainheaderimg" />
            </Link>

            {/* Navbar Toggler */}
            <button
              onClick={handleclick}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarNav"
            >
              {/* Navigation Links */}
              <div>
                <ul className="navbar-nav d-flex align-items-center meauto mb2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <Link className={`nav-link ${location.pathname.includes('/about') ? 'active' : ''}`} to="/about">
                      About
                    </Link>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <Link className={`nav-link ${location.pathname.includes('/ourwork') ? 'active' : ''}`} to="/ourwork">
                      Our Work
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname.includes('/gethelp') ? 'active' : ''}`} to="/gethelp">
                      Get Help
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/about"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Initiatives
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/sponsorship" className="dropdown-item">
                          Sponsorship
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${location.pathname.includes('/our-work') ? 'active' : ''}`} to="/our-work">
                          Our  Work
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className={`dropdown-item ${location.pathname.includes('/top-volunteer') ? 'active' : ''}`} to="/top-volunteer">
                          Top Volunteer
                        </Link>
                      </li>
                      <li>
                        <Link className={`dropdown-item ${location.pathname.includes('/ourpodcastlist') ? 'active' : ''}`} to="/ourpodcastlist">
                          Our Podcast
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link className={`nav-link ${location.pathname.includes('/givedonation') ? 'active' : ''}`} to="/givedonation">
                      Donate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname.includes('/contactus') ? 'active' : ''}`} to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Second logo: visible only in full-screen mode */}
              <div className="d-none d-lg-block">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo"/>
                </Link>
              </div>

              {/* Right-aligned buttons and icons */}
              <div className="d-flex align-items-center">
                <a href="https://www.facebook.com/homeless.intervention.oc" target="_blank" className="text-dark me-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com/Homeless_Int_OC" target="_blank" className="text-dark me-3">
                  <i className="bi bi-x"></i>
                </a>
                <a href="https://www.instagram.com/homeless_intervention_oc/?hl=en" target="_blank" passHref>
                  <i className="bi bi-instagram text-dark me-3"></i>
                </a>
                <a href="https://www.linkedin.com/in/christine-stellino-b31963176/" target="_blank" passHref>
                  <i className="bi bi-linkedin text-dark me-3"></i>
                </a>
                <a href="https://www.tiktok.com/@user4978180667468" target="_blank" passHref>
                  <i className="bi bi-tiktok text-dark me-3"></i>
                </a>
                {!logintoken && (
                  <button onClick={handleShow} className="nav-event btn me-2">
                    Become A Volunteer
                  </button>
                )}


                {logintoken && <Dropdown className="userDropdown">
                  <Dropdown.Toggle
                    variant="transparent"
                    className="notButton toggleButton"
                  >
                    <div className="userImage">
                      <img
                        src={ApiDataGet?.data?.image ? base_url_image + ApiDataGet?.data?.image : placeholder}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="userMenu" align="end">
                    <Link className="userMenuItem" to={'/profile'}>
                      <FontAwesomeIcon
                        className="me-2 yellow-text"
                        icon={faUser}
                      />{" "}
                      Profile
                    </Link>
                    <Link to="#" className="userMenuItem" onClick={Handlelogout}>
                      <FontAwesomeIcon

                        className="me-1 yellow-text"
                        icon={faSignOut}

                      />{" "}
                      Logout
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                }

                {/* 
                <Link className="nav-donate btn btn-warning text-dark">
                  {" "}
                  <img src={donateicon} /> Donate
                </Link> */}



                {/* <Link

                  id=" " className="    text-dark" to="#">
                  
                  Donate Now

                </Link> */}
                 {scriptLoaded &&  <givebutter-widget class='giveButterBtn'  id="pzBZ3p">Give Donation</givebutter-widget> }
                {/* {scriptLoaded && <div className="gKNaKL" />} */}

              </div>
            </div>
          </div>
        </nav>

        {naveshow === true && (
          <ul className="responsivenavbar-nav me-auto mb-2 mb-lg-0 d-lg-none ">
            <div className="responsiveheader">
              {" "}
              <span>
                {" "}
                <Link className="navbar-brand techVerse_logo" to={"/"}>
                  {/* <img src={logo} alt="" /> */}
                </Link>
              </span>
              <span>
                {" "}
                <i
                  className="fa-solid fa-times menu-icon"
                  id="close-icon"
                  type="button "
                  onClick={handleclick}
                ></i>
              </span>
            </div>
            <div className="dropdown_menu_divider"></div>
            <li className="main-navbar-list">
              <Link className="new_main-navbar-list" to="/about">
                About
              </Link>
            </li>{" "}
            <div className="dropdown_menu_divider"></div>
            {/* <li className="main-navbar-list">
              <Link className="new_main-navbar-list" to="/ourwork ">
                Our Work
              </Link>
            </li>{" "} */}
            <div className="dropdown_menu_divider"></div>
            <li className="main-navbar-list">
              <Link className="new_main-navbar-list" to="/gethelp">
                Get Help
              </Link>
            </li>{" "}
            <div className="dropdown_menu_divider"></div>
            
            {" "}
            <div className="dropdown_menu_divider"></div>
            <li className="main-navbar-list">
              <Link className="new_main-navbar-list" to="/contactus">
                Contact
              </Link>
            </li>{" "}
            <div className="dropdown_menu_divider"></div>
            {/* <li className="main-navbar-list">
              <Link className="new_main-navbar-list" to="/">
                CONTACT
              </Link>
            </li>{" "} */}
            <div className="dropdown_menu_divider"></div>
            <li className="main-navbar-list  ">
              {logintoken && (
                <Link onClick={handleShow} className="new_main-navbar-list">
                  Become A Volunteer
                </Link>
              )}
            </li>
            <div className="dropdown_menu_divider"></div>
            <li className="main-navbar-list">
              <Link
                type="button"
                // onClick={handleDropdownToggle}
                // className="new_main-navbar-list"

                className="nav-link dropdown-toggle mb-2"
                // to="/about"
                // role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Initiatives
              </Link>

              

              {/* Dropdown Menu */}
              {/* {showDropdown && ( */}
              <ul className="dropdown-menu">
                <li>
                  <Link to="/sponsorship" className="dropdown-item">
                    Sponsorship
                  </Link>
                </li>
                <li>
                  <Link to="/our-work" className="dropdown-item">
                    Our Work
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="/top-volunteer" className="dropdown-item">
                    Top Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/ourpodcastlist" className="dropdown-item">
                    Our Podcast
                  </Link>
                </li>
              </ul>
              {/* )} */}
            </li>
            <div className="dropdown_menu_divider"></div>
            <li>
              
            {scriptLoaded &&  <givebutter-widget id="pzBZ3p"></givebutter-widget> }
            </li>
            <div className="dropdown_menu_divider"></div>
          </ul>
        )}
      </section>
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
        password={userData.password} phone={userData.phone} email={userData.email}
        handleChange={handleChange}
      />
      <VolunteerModallogin
        password={userData.password} email={userData.email}
        handleClose={handleCloselogin}
        show={showModallogin}
        forgetbtn={handleShowforget}
        handleChange={handleChange}
        handleSubmitlogin={handleSubmitlogin}
      />

      <VolunteerModalforget
        handleChange={handleChange}
        email={userData.email}
        handleSubmitforget={handleSubmitforget}
        handleClose={handleCloseforget}
        show={showModalforget}
        handleShowforget2={handleShowforget2}
      />
      <VolunteerModalforget2
        handleChange={handleChange}
        email={userData.email}
        otp={userData.otp}

        handleSubmitforgetotp={handleSubmitforgetotp}
        show={showModalforget2}
        handleClose={handleCloseforget2}
      />


      <ChangePass
        handleChange={handleChange}
        email={userData.email}
        password_confirmation={userData.password_confirmation}
        password={userData.password}

        handleSubmitreset={handleSubmitreset}
        show={showModalreset}
        handleClose={handleCloseforget2}
      />
      <ToastContainer />
      <GiveButterStyler />
    </>
  );
}

export default Header;