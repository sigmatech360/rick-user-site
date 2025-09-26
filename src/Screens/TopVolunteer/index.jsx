import "./index.css";

import AOS from "aos";
import Layout from "../../components/layout";

import React, { useState, useEffect } from "react";

import HeroSection from "../../components/herosection";

import Sponsor from "../../components/sponsor";
import ourworkbg from "../../Assets/images/ourworkbg.webp";
import topVolunteerBanner from "../../Assets/images/topVolunteerBanner.webp";
import partnerunderline from "../../Assets/images/programunderline.webp";
import topvolusteersmanimages from '../../Assets/images/topvolusteersmanimages.webp'
import Volunteerman1 from "../../Assets/images/Volunteerman1.webp";
import { useGet, usePost } from '../Api/usePost'
import { base_url_image } from "../Api/base_url";
function TopVolunteer() {


  const { ApiData: ApiDataGet, loading: loadingGet, error: errorGet, get: getdata } = useGet('/top-volunteer')
  useEffect(() => {
    AOS.init();
    getdata()
    
    document.title = "Top - Volunteer - HIS OC" || "HOME - HIS OC";
  }, []);


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
          heroimg={topVolunteerBanner}
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
                  {/* <h3 className="text-dark">Be a Volunteer - Join Us in Restoring Hope. </h3> */}
                  <h2 className="title">
                  Be the Top  {" "}
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
                  Volunteering with HIS-OC transforms lives. Your time helps provide transitional housing, emergency support, and essential services to those in need. Opportunities vary year-round, so check back for updates. No matter your skills, there's a way to make a difference.
 
               

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
                {ApiDataGet?.data?.filter(volunteer => volunteer?.is_active === "1")?.map((volunteer, index) => (
                  <div
                    className="col-lg-2 col-md-4 col-12   mb-4  "
                    key={index}
                    data-aos={volunteer?.animation}
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <div
                      className={`card top-volunteer-card card-${index % 2 === 0 ? "blue" : "purple"
                        }`}
                    >
                      <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                        <div >
                          <img
                            src={base_url_image + volunteer?.image}
                            className="card-img img-fluid"
                            alt={volunteer?.name}
                          />
                        </div>
                        <div >
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
