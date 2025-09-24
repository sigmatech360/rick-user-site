import logo from "../../Assets/images/logo.webp";
import donateicon from "../../Assets/images/donateicon.webp";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import contantunderline from "../../Assets/images/contantunderline.webp";
import "./index.css";

import AOS from "aos";

import { Modal, Button, Form } from "react-bootstrap";
function Contact({
  handleSubmit,
  handleChange,
  name,
  email,
  phone,
  info,
  message,
  ApiDataGetmembers,
}) {
  useEffect(() => {
    AOS.init();
  }, []);
  const [donatenotify, setDonatenotiy] = useState(false);

  console.log("ApiDataGetmembers", ApiDataGetmembers);

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

  return (
    <>
      <section className="contact-us-section py-5">
        <div className="container text-center text-md-start">
          <h2
            className="title fw-bold   text-center"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            We'd{" "}
            <span className=" position-relative text-warning">
              Love To Hear
              <img src={contantunderline} className="contantunderline" />
            </span>{" "}
            From You
          </h2>
          <p
            className="subtitle w-lg-50 w-xl-50  mx-auto text-center mb-4"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            If you have questions or need assistance, fill out the contact form
            below. Our team is ready to help. Let’s work together to restore
            hope and create lasting change.
          </p>
          <div className="row gx-0 d-flex align-items-stretch justify-content-center">
            {/* <!-- Left Contact Information Panel with Grid Layout --> */}
            <div className="col-md-12  col-lg-6 mb-4 mb-lg-0 contact-left-col">
              <div className="contact-info-panel p-4 shadow-sm w-100 rounded-start">
                <h2 className="his-oc-board-members">HIS-OC Board Members</h2>
                <div className="contact-grid">
                  {/* {ApiDataGetmembers?.data?.filter((member) => member.member_type === 2).slice(0, 10).map((items) => (
                    <div className="contact-item p-3 rounded bg-white">
                      <p className="para mb-0">
                        <span> {items?.name}</span>
                        <br />
                        {items?.designation}
                      </p>
                      <a
                        href="mailto:christine@his-oc.org"
                        className="text-muted"
                      >
                        {items?.email}
                      </a>
                    </div>
                  ))} */}
                  {ApiDataGetmembers?.data
                    ?.filter((member) => member.member_type === "2") // team member: 1 AND borad member 2
                    .slice(0, 10)
                    .map((items) => (
                      <div
                        className="contact-item p-3 rounded bg-white"
                        key={items?.id}
                      >
                        {/* {items?.image && (
                          <img
                            src={items?.image}
                            alt={items?.name}
                            className="member-image rounded-circle"
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        )} */}
                        {/* Text Section */}
                        <p className="para mb-0">
                          <span>{items?.name}</span>
                          <br />
                          {items?.designation}
                        </p>
                        {/* Email Section */}
                        <a
                          href={`mailto:${items?.email}`}
                          className="text-muted"
                        >
                          {items?.email}
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* <!-- Right Contact Form Panel --> */}
            <div className="col-md-12 col-lg-6 d-flex">
              <div className="contact-form-panel p-4 shadow-sm w-100 bg-white rounded-end">
                <h3 className="contacttext fw-bold text-black mb-3">
                  Contact Us
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      required
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      required
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      required
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      name="info"
                      value={info || ""}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="General Information">
                        General Information
                      </option>
                      <option value="Programs">Programs</option>
                      <option value="Donations">Donations</option>
                      <option value="Volunteering">Volunteering</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea
                      required
                      onChange={handleChange}
                      value={message}
                      className="form-control"
                      name="message"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="send-message btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}

export default Contact;
