import "./index.css";

import AOS from "aos";
import Layout from "../../components/layout";

import React, { useState, useEffect } from "react";

import HeroSection from "../../components/herosection";

import Sponsor from "../../components/sponsor";
import ourworkbg from "../../Assets/images/ourworkbg.png";
import partnerunderline from "../../Assets/images/programunderline.svg";
import topvolusteersmanimages from '../../Assets/images/topvolusteersmanimages.png'
import Volunteerman1 from "../../Assets/images/Volunteerman1.png";
import { useGet, usePost } from '../Api/usePost'
import { base_url_image } from "../Api/base_url";
function TopVolunteer() {


  const { ApiData: ApiDataGet, loading: loadingGet, error: errorGet, get: getdata } = useGet('/top-volunteer')
  useEffect(() => {
    AOS.init();
    getdata()
    
    document.title = "Top - Volunteer - HIS OC" || "HOME - HIS OC";
  }, []);


  console.log("ApiDataGetvolunteer", ApiDataGet?.data)
  const volunteers = [
    {
      animation: "fade-right",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: topvolusteersmanimages,
    },

    {
      animation: "fade-left",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: topvolusteersmanimages,
    },

    {
      animation: "fade-right",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: topvolusteersmanimages,
    },
    {
      animation: "fade-left",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: topvolusteersmanimages,
    },

    {
      animation: "fade-right",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: topvolusteersmanimages,
    },

    {
      animation: "fade-left",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: topvolusteersmanimages,
    },

    {
      animation: "fade-right",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: topvolusteersmanimages,
    },

    {
      animation: "fade-left",
      name: "Oğuz Yağız Kara",
      description:
        "Is your manuscript collecting more dust than a haunted house? Don’t let your book become a ghost of an idea!",
      imgSrc: topvolusteersmanimages,
    },
  ];

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={ourworkbg}
          pagetitle="Top"
          pagename="  Top Volunteer"
          title2="  Volunteer"
          programprojectsubttle="programprojectsubttle"
          programpojectaboutherounderline="houseprogramunderline"
        />

        <section className="Volunteerinfo   ">
          <div className="Volunteerinfosecbg  py-5">
            <div className="container">
              <div className="row volteersbg">
                <div
                  className="col-md-6 "
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h2 className="title">
                    Thrift  Shop {" "}
                    <span className="position-relative">
                      {" "}
                      Volunteer{" "}
                      <img
                        src={partnerunderline}
                        className="houseprogramunderline"
                      />{" "}
                    </span>
                   
                  </h2>
                </div>
                <div
                  className="col-md-6"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <p className="info-text text-start">
                    Volunteering with HIS-OC helps all the people we serve and our community. Our opportunities vary throughout the year but are regularly updated on this page, so please check back often for active volunteer opportunities. No matter what your skills, we can find a way for you to help us help them.
 
               

                  </p>

                  {/* <button className="volunteerbtn"> Sign up Volunteer </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="volunteers">
            <div className="container py-4">
              {/* <div className="row d-flex  gap-4"> */}
              <div className="row">
                {ApiDataGet?.data?.map((volunteer, index) => (
                  <div
                    className="col-lg-4 col-md-12   mb-4  "
                    key={index}
                    data-aos={volunteer?.animation}
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <div
                      className={`card top-volunteer-card card-${index % 2 === 0 ? "blue" : "purple"
                        }`}
                    >
                      <div className="row">
                        <div className="col-3">
                          <img
                            src={base_url_image + volunteer?.image}
                            className="card-img img-fluid"
                            alt={volunteer?.name}
                          />
                        </div>
                        <div className="col-9">
                          <div className="card-body">
                            <h5 className="card-title">{volunteer?.name}</h5>
                            <div className="dividervol"></div>
                            {/* <p className="card-text">{volunteer?.description}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Sponsor />
      </Layout>
    </>
  );
}

export default TopVolunteer;
