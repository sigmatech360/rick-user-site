import placeholderimage from "../../Assets/images/placeholder.webp";
import { useGet, usePost } from "../Api/usePost";
import React, { useEffect, useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { base_url_image } from "../Api/base_url";

import { MdCalendarMonth } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { MdAccessTime } from "react-icons/md";
import Layout from "../../components/layout";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const {
    ApiData: ApiData,
    loading: loading,
    error: error,
    get: getdata,
  } = useGet("/edit-account");
  const {
    ApiData: ApiDataPost,
    loading: Postloading,
    post: Posterror,
    post: post,
  } = usePost("/update-account");

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsslots, setSelectedItemsslots] = useState([]);
  const [errordays, setErrordays] = useState(true);
  const [errorslots, setErrorslots] = useState(true);
  const [formdata, setFromData] = useState({});

  useEffect(() => {
    getdata();
    // if (ApiData?.status == true) {
    // setFromData(ApiData?.data)
    // }

    document.title = " Profile   - HIS OC ";
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataMethod = new FormData();

    if (!selectedItems || selectedItems?.length === 0) {
      setErrordays("Please fil this field");
    } else if (!selectedItemsslots || selectedItemsslots?.length === 0) {
      setErrorslots("Please fil this field");
    } else {
      for (const key in formdata) {
        formDataMethod.append(key, formdata[key]);
      }
      formDataMethod.append("available_days", JSON.stringify(selectedItems));
      formDataMethod.append(
        "available_slots",
        JSON.stringify(selectedItemsslots)
      );
      post(formDataMethod);
    }
  };

  useEffect(() => {
    // if (ApiData?.status == true) {
    setFromData(ApiData?.data);
    setSelectedItemsslots(ApiData?.data?.available_slots);
    setSelectedItems(ApiData?.data?.available_days);
  }, [ApiData]);

  useEffect(() => {
    if (ApiDataPost?.status === true) {
      // Show success toast
      toast.success(ApiDataPost?.message);

      // Navigate after 5 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [ApiDataPost]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log("ApiData", ApiData);

  console.log("formdata", formdata);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenslots, setIsOpenslots] = useState(false);

  const dropdownRefDays = useRef(null);
  const dropdownRefSlots = useRef(null);

  const options = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const availabilityData = [
    "09:00 AM to 11:00 AM",
    "11:00 AM to 1:00 PM",
    "01:00 PM to 3:00 PM",
    "03:00 PM to 5:00 PM",
  ];

  const handleSelection = (option) => {
    if (selectedItems?.includes(option)) {
      setSelectedItems(selectedItems?.filter((item) => item !== option));
    } else {
      setSelectedItems([...selectedItems, option]);
    }
  };
  const handleSelectionslot = (option) => {
    if (selectedItemsslots?.includes(option)) {
      setSelectedItemsslots(
        selectedItemsslots?.filter((item) => item !== option)
      );
    } else {
      setSelectedItemsslots([...selectedItemsslots, option]);
    }
  };

  const toggleDropdownslots = () => {
    setIsOpenslots(!isOpenslots);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const filehandleChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const previewURL = URL.createObjectURL(file); // Generate a preview URL

      setFromData((prevData) => ({
        ...prevData,
        image: file,
        imageFile: previewURL,
      }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideDays =
        dropdownRefDays.current &&
        !dropdownRefDays.current.contains(event.target);

      const clickedOutsideSlots =
        dropdownRefSlots.current &&
        !dropdownRefSlots.current.contains(event.target);

      if (isOpen && clickedOutsideDays) {
        setIsOpen(false);
      }

      if (isOpenslots && clickedOutsideSlots) {
        setIsOpenslots(false);
      }
    };

    // Attach listener only if one or both dropdowns are open
    if (isOpen || isOpenslots) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isOpenslots]);

  return (
    <Layout>
      <section className="myprofile">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Profile Section */}
            <div className="col-md-6 text-center mb 4 mb-md-0 py-5 profile-section">
              <div className="profile-picture-container">
                {formdata?.imageFile &&
                formdata?.imageFile?.startsWith("blob:") ? (
                  <>
                    <img
                      src={formdata?.imageFile}
                      alt="User"
                      className="profile-picture"
                    />
                    <button className="edit-button">
                      <label
                        htmlFor="profileImage"
                        className="imageUploadButton"
                      >
                        {" "}
                        <i className="bi bi-pencil"></i>
                      </label>
                    </button>
                    <input
                      type="file"
                      id="profileImage"
                      accept="img/*"
                      className="d-none"
                      onChange={filehandleChange}
                    />
                  </>
                ) : (
                  formdata?.image && (
                    <>
                      <img
                        src={base_url_image + formdata?.image}
                        alt="User"
                        className="profile-picture"
                      />
                      <button className="edit-button">
                        <label
                          htmlFor="profileImage"
                          className="imageUploadButton"
                        >
                          {" "}
                          <i className="bi bi-pencil"></i>
                        </label>
                      </button>
                      <input
                        type="file"
                        id="profileImage"
                        accept="img/*"
                        className="d-none"
                        onChange={filehandleChange}
                      />
                    </>
                  )
                )}
              </div>
              <h5 className="mt-3">{formdata?.name}</h5>
              <p className="text-muted">{formdata?.email}</p>
            </div>

            {/* Form Section */}
            <div className="col-md-6 profile-section-form ">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-12">
                    <input
                      value={formdata?.name}
                      type="text"
                      onChange={handleChange}
                      name="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      value={formdata?.email}
                      type="email"
                      name="email"
                      disabled
                      // onChange={handleChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      value={formdata?.phone}
                      name="phone"
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-md-12">
                    <Form.Group className="mt-3" controlId="weekDays" ref={dropdownRefDays}>
                      <div
                        className="dropdown-input  d-flex align-items-center border rounded gap-3 p-2"
                        onClick={toggleDropdown}
                      >
                        <span>
                          <MdCalendarMonth className="me-2 text-muted" />
                        </span>
                        <span>
                          {Array.isArray(selectedItems) &&
                          selectedItems?.length > 0
                            ? selectedItems?.join(", ")
                            : "Select days"}

                          <span
                            className={`dropdown-arrow ${isOpen ? "open" : ""}`}
                          >
                            &#9662;
                          </span>
                        </span>
                      </div>
                      {isOpen && (
                        <div className="dropdown-options  border ">
                          {options.map((option) => (
                            <label
                              key={option}
                              className="dropdown-item  d-flex align-items-center gap-2 rounded p-2"
                            >
                              <input
                                required
                                type="checkbox"
                                value={option}
                                checked={selectedItems?.includes(option)}
                                onChange={() => handleSelection(option)}
                                name="available_days"
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      )}

                      {selectedItems?.length <= 0 && (
                        <span className=" filldayserror text-danger mb-0 mt-2 text-start">
                          {errordays}
                        </span>
                      )}
                    </Form.Group>
                  </div>

                  <div className="col-md-12">
                    <Form.Group className="mt-3" controlId="weekDays" ref={dropdownRefSlots}>
                      <div
                        className="dropdown-input  d-flex align-items-center border rounded gap-2 p-2"
                        onClick={toggleDropdownslots}
                      >
                        <span>
                          <MdAccessTime className="me-2 text-muted" />
                        </span>
                        <span>
                          {Array.isArray(selectedItemsslots) &&
                          selectedItemsslots.length > 0
                            ? selectedItemsslots.join(", ")
                            : "Select time slots"}

                          <span
                            className={`dropdown-arrow ${
                              isOpenslots ? "open" : ""
                            }`}
                          >
                            &#9662;
                          </span>
                        </span>
                      </div>
                      {isOpenslots && (
                        <div className="dropdown-availabilityData  border ">
                          {availabilityData.map((option) => (
                            <label
                              key={option}
                              className="dropdown-item  d-flex align-items-center gap-3   rounded p-2"
                            >
                              <input
                                required
                                type="checkbox"
                                value={option}
                                checked={selectedItemsslots?.includes(option)}
                                onChange={() => handleSelectionslot(option)}
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      )}
                      {selectedItemsslots?.length <= 0 && (
                        <span className=" filldayserror text-danger mb-0 mt-2 text-start">
                          {errorslots}
                        </span>
                      )}
                    </Form.Group>
                  </div>
                  {/* <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Zip Code"
                                    />
                                </div> */}
                  {/* <div className="col-md-12">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                </div> */}
                  {/* <div className="col-md-12">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                    />
                                </div> */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 profile-update"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};

export default Profile;
