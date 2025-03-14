import "./index.css";
import countyicon from "../../Assets/images/countyicon.svg";
import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import HeroSection from "../../components/herosection";
import Sponsor from "../../components/sponsor";
import ourworkbg from "../../Assets/images/ourworkbg.png";
import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import communityimg from "../../Assets/images/communityimg.png";
import { useNavigate } from "react-router-dom";
import { useGet } from '../Api/usePost'
function Event() {

  const navigate = useNavigate()
  const learnnavigate = (items) => {

    navigate(`${items}`)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const { ApiData: ApiDataGet, loading: loadingGet, error: errorGet, get: getdata } = useGet('/event')


  useEffect(() => {
    getdata()
    
    document.title = "Event - HIS OC" || "HOME - HIS OC";
  }, [])


  return (

    <>
      <Layout>
        <HeroSection
          heroimg={ourworkbg}
          pagename="Our Events"
          title2="Events"
          programpojectaboutherounderline="houseprogramunderlineourwork"
          programprojectsubttle="givedonationsubtitle"
        />

        <section className="community  ">
          <div className="container  py-5">
            <div className="mt-5 mb-4 d-flex flex-wrap gap-4">
              {/* <button className="todaybtn">Today</button>
              <button className="todaybtn">Upcoming Events</button> */}
            </div>
            {ApiDataGet?.data?.map((items, index) => (

              <div className="row">


                <div className="col-md-7 mt-5">
                  <div className=" d-flex gap-4">
                    <p className="monday-text">
                      <br /> <span className="monday2">{index + 1}</span>
                    </p>
                    <div>
                      <h2 className="communitytitle ext-black">
                        {items?.title}
                      </h2>

                      <div className="communityschedual d-flex flex-wrap gap-2">
                        <p className="d-flex gap-2 align-items-center">
                          {" "}
                          <FiMapPin />
                          {items?.address}
                        </p>
                        <div className="communityschedualdivider"></div>
                        <p className="d-flex gap-2 align-items-center">
                          {" "}
                          <RiCalendar2Line />
                          {items?.date}
                        </p>
                        <div className="communityschedualdivider"></div>

                        <p className="d-flex gap-2 align-items-center">
                          {" "}
                          <CiClock2 />
                          {items?.start_time} -    {items?.end_time}
                        </p>
                      </div>

                      <p
                        className="communitypara"
                        dangerouslySetInnerHTML={{ __html: items?.description }}
                      ></p>

                      <button onClick={() => learnnavigate(items?.id)} className="todaybtn">Learn more</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-5 mt-5">
                  <img src={communityimg} className="img-fluid" />
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* <Leadership /> */}
        <Sponsor />
      </Layout>
    </>
  );
}

export default Event;
