import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from "react-icons/fa";
import "./index.css";

import TermsAndCondition  from "../../Assets/pdf/Terms-and-Conditions.pdf";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { MdCalendarMonth } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

import { Link } from "react-router-dom";
import { FiSmartphone } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

export function VolunteerModalsignup({ errorslots, errordays, setSelectedItemsslots, selectedItemsslots, setSelectedItems, selectedItems, show, handleClose, loginbtn, handleSubmit, name, available_days, handleChange, password, phone, email, password_confirmation, }) {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenslots, setIsOpenslots] = useState(false);




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
    "9:00 AM to 11:00 AM",
    "11:00 AM to 1:00 PM",
    "1:00 PM to 3:00 PM",
    "3:00 PM to 5:00 PM"
  ]
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownslots = () => {
    setIsOpenslots(!isOpenslots);
  };

  const handleSelection = (option) => {

    if (selectedItems.includes(option)) {
      setSelectedItems(selectedItems.filter((item) => item !== option));
    } else {
      setSelectedItems([...selectedItems, option]);
    }
  };
  const handleSelectionslot = (option) => {
    if (selectedItemsslots.includes(option)) {
      setSelectedItemsslots(selectedItemsslots.filter((item) => item !== option));
    } else {
      setSelectedItemsslots([...selectedItemsslots, option]);
    }
  }
  const [isAccepted, setIsAccepted] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsAccepted(e.target.checked);
  };


  const [typePasscon, setTypePasscon] = useState(true)

  const togglePassTypecon = () => {
    setTypePass(!typePasscon)
  }



  const [typePass, setTypePass] = useState(true)

  const togglePassType = () => {
    setTypePass(!typePass)
  }

  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
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
          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Form.Group className="mt-3" controlId="name">
              <div className="modalfields d-flex align-items-center border rounded p-2">
                <i className="bi bi-person"></i>
                <Form.Control
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={handleChange}
                  name="name"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                <i className="bi bi-envelope"></i>
                <Form.Control
                  value={email}
                  onChange={handleChange}
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
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
                  value={phone}
                  required
                  onChange={handleChange}
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            <Form.Group className="mt-3" controlId="weekDays">

              <div className="dropdown-input  d-flex align-items-center border rounded gap-3 p-2" onClick={toggleDropdown}>
                <span>
                  <MdCalendarMonth className="me-2 text-muted" />
                </span>
                <span>
                  {selectedItems?.length > 0 ? selectedItems.join(", ") : "Select days"}

                  <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
                </span>
              </div>
              {isOpen && (
                <div className="dropdown-options  border ">
                  {options.map((option) => (
                    <label key={option} className="dropdown-item  d-flex align-items-center gap-2   rounded p-2">
                      <input
                        required
                        type="checkbox"
                        value={option}
                        checked={selectedItems.includes(option)}
                        onChange={() => handleSelection(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}

              {selectedItems?.length <= 0 && (
                <span className=" filldayserror text-danger mb-0 mt-2 text-start">{errordays}</span>
              )}


            </Form.Group>

            <Form.Group className="mt-3" controlId="weekDays">

              <div className="dropdown-input  d-flex align-items-center border rounded gap-2 p-2" onClick={toggleDropdownslots}>
                <span><MdAccessTime className="me-2 text-muted" />

                </span>
                <span>
                  {selectedItemsslots?.length > 0 ? selectedItemsslots.join(", ") : "Select time slots"}

                  <span className={`dropdown-arrow ${isOpenslots ? "open" : ""}`}>&#9662;</span>
                </span>
              </div>
              {isOpenslots && (
                <div className="dropdown-availabilityData  border ">
                  {availabilityData.map((option) => (
                    <label key={option} className="dropdown-item  d-flex align-items-center gap-3   rounded p-2">
                      <input
                        required
                        type="checkbox"
                        value={option}
                        checked={selectedItemsslots.includes(option)}
                        onChange={() => handleSelectionslot(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
              {selectedItemsslots?.length <= 0 && (
                <span className=" filldayserror text-danger mb-0 mt-2 text-start">{errorslots}</span>
              )}


            </Form.Group>



            <Form.Group className="mt-3" controlId="password">
              <div className="modalfields d-flex align-items-center border rounded p-2">
                <RiLockPasswordLine className="me-2 text-muted" />
                <Form.Control
                  value={password}
                  required
                  onChange={handleChange}
                  name="password"
                  type='password'
                  placeholder="Password"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
                {/* <button type='button' className='eyeButton' onClick={togglePassTypecon}><FontAwesomeIcon icon={typePasscon ? faEyeSlash : faEye} /></button> */}
              </div>
            </Form.Group>

            <Form.Group className="mt-3" controlId="password">
              <div className="modalfields d-flex align-items-center border rounded p-2">
                <RiLockPasswordLine className="me-2 text-muted" />
                <Form.Control
                  value={password_confirmation}
                  required
                  onChange={handleChange}
                  name="password_confirmation"
                  type='password'
                  placeholder="Password Confirmation"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
                {/* <button type='button' className='eyeButton' onClick={togglePassType}><FontAwesomeIcon icon={typePass ? faEyeSlash : faEye} /></button> */}
              </div>
            </Form.Group>

            {/* Terms and Conditions */}
            <Form.Group className="mt-3 d-flex align-items-center">
              <Form.Check
                type="checkbox"
                checked={isAccepted}
                onChange={handleCheckboxChange}
                required
              />
              <Form.Label className="ms-2 mb-0">
                I accept the <a href={TermsAndCondition} target="_blank">Terms and Conditions</a>
              </Form.Label>
            </Form.Group>

            {/* Submit Button */}
            <Button
              variant="success"
              type="submit"
              className="mt-4 w-100 becomeavalbtn"
            >
              Become a Volunteer
            </Button>
          </Form>

          <div className="text-center mt-3">
            <small className="loginmodalbtn">
              Already have an account? <Link onClick={loginbtn}>Log In</Link>
            </small>
          </div>
        </Modal.Body>
      </Modal >
    </section >
  );
}

// export default VolunteerModal;

export function VolunteerModallogin({ handleSubmitlogin, email, password, handleChange,
  show,
  handleCloselogin,
  handleClose,
  forgetbtn,
}) {



  const [typePass, setTypePass] = useState(true)

  const togglePassType = () => {
    setTypePass(!typePass)
  }

  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
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
          <Form onSubmit={handleSubmitlogin}>
            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                <i className="bi bi-envelope"></i>
                <Form.Control
                  value={email}
                  onChange={handleChange}
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>
            {/* Password Field */}
            <Form.Group className="mt-3" controlId="password">
              <div className="modalfields d-flex align-items-center border rounded p-2">
                <RiLockPasswordLine className="me-2 text-muted" />
                <Form.Control
                  value={password}
                  required
                  onChange={handleChange}
                  name="password"
                  type={typePass ? 'password' : 'text'}
                  placeholder="Password"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
                <button type='button' className='eyeButton' onClick={togglePassType}><FontAwesomeIcon icon={typePass ? faEyeSlash : faEye} /></button>
              </div>
            </Form.Group>


            {/* Submit Button */}
            <Button
              variant="success"
              type="submit"
              className="mt-4 w-100 becomeavalbtn"
            >
              Login
            </Button>
          </Form>

          <div className="forget d-flex    mx-auto  justify-content-center   mt-3">
            <div></div>
            <div>
              {" "}
              <Link onClick={forgetbtn} className=" loginmodalbtn">
                Forget Password
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}

// export default VolunteerModal;

// Forget

export function VolunteerModalforget({


  handleChange,
  email,
  handleSubmitforget,

  show,
  handleCloselogin,
  handleClose,
  handleShowforget2,
}) {
  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
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
          <Form onSubmit={handleSubmitforget}>
            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                <i className="bi bi-envelope"></i>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Email"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>

            {/* Password Field */}

            {/* Submit Button */}
            <Button
              onClick={handleShowforget2}
              variant="success"
              type="submit"
              className="mt-4 w-100 becomeavalbtn"
            >
              Forgot
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export function VolunteerModalforget2({
  handleChange,
  email,
  otp,

  handleSubmitforgetotp,

  show,
  handleCloselogin,
  handleClose,
  handleShowforget2,
}) {
  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
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
          <Form onSubmit={handleSubmitforgetotp}>


            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                {/* <i className="bi bi-envelope"></i> */}

                <Form.Control
                  onChange={handleChange}
                  name="email"
                  value={email}
                  type="text"
                  placeholder="Code"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>
            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                {/* <i className="bi bi-envelope"></i> */}

                <Form.Control
                  onChange={handleChange}
                  name="otp"
                  value={otp}
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
              onClick={handleShowforget2}
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
  );
}









export function ChangePass({
  handleChange,
  email,
  password,
  password_confirmation,
  // handleSubmitforgetotp,
  handleSubmitreset,
  show,
  handleCloselogin,
  handleClose,
  handleShowforget2,
}) {
  return (
    <section className="VolunteerModal">
      <Modal size="md" show={show} onHide={handleClose} centered>
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
          <Form onSubmit={handleSubmitreset}>


            {/* Email Field */}
            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                {/* <i className="bi bi-envelope"></i> */}

                <Form.Control
                  onChange={handleChange}
                  name="password"
                  value={password}
                  type="text"
                  placeholder="password"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>



            <Form.Group className="mt-3" controlId="email">
              <div className=" modalfields d-flex align-items-center border rounded p-2">
                {/* <i className="bi bi-envelope"></i> */}

                <Form.Control
                  onChange={handleChange}
                  name="password_confirmation"
                  value={password_confirmation}
                  type="text"
                  placeholder="password confirmation"
                  className="border-0"
                  style={{ boxShadow: "none" }}
                />
              </div>
            </Form.Group>


            {/* Password Field */}

            {/* Submit Button */}
            <Button
              onClick={handleShowforget2}
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
  );
}
