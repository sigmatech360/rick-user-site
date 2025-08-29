import "./index.css";

import AOS from "aos";

import Layout from "../../components/layout";

import React, { useState, useEffect } from "react";

import HeroSection from "../../components/herosection";

import Sponsor from "../../components/sponsor";

import partnerunderline from "../../Assets/images/programunderline.svg";

import ourpodcastbg from "../../Assets/images/ourpodcastbg.png";

import Ourpodcasts from "../../components/ourpodcast";
import anmouncementlist1 from '../../Assets/images/anmouncementlist1.png'
import { useGet, usePost } from '../Api/usePost'
import announcementbg from '../../Assets/images/announcementbg.png'
import { AiOutlineDoubleRight } from "react-icons/ai";


import { Link } from "react-router-dom";
import { base_url_image } from "../Api/base_url";
function AnnouncementList() {




  const { ApiData: ApiDatapodcast, loading: loadingpodcast, error: errorpodcast, get: getdatapodcast } = useGet('/announcement')
  useEffect(() => {
    getdatapodcast()
  }, [])
  useEffect(() => {
    AOS.init();
    
    document.title = "Announcement List - HIS OC " || "HOME- HIS OC";
  }, []);


  console.log("ApiDatapodcast", ApiDatapodcast)


  const handleannouncementlist = () => {

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <Layout>
        <HeroSection
          heroimg={announcementbg}
          pagetitle="News &"
          pagename="News & Announcements"
          title2="Announcements"

          programprojectsubttle="givedonationsubtitle"
          programpojectaboutherounderline="legacyunderline"
        />

        <section className="Announcementlist   ">
          <div className="Volunteerinfosecbg  py-5">
            <div className="container">
              <div className="   row">
                <div className="col-md-6">
                  <p
                    className="title"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Spotlight Announcements In the Loop{" "}

                  </p>
                </div>
                <div className="col-md-6">
                  <p
                    className="info-text text-start"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >

                  </p>

                  <p>We have been living a comfortable life all year long. However, that is not the case for the poor and the needy. They need our support and last year we have made it happen, for this year to be a success, your time or donations will be appreciated the most.</p>
                </div>

              </div>


              {ApiDatapodcast?.data?.map((items) => (

                <div className="row  align-items-center">
                  {/* <div className="borderstop"></div> */}
                  <hr />
                  <div className="  col-md-6 mb-4">
                    <div className="text-center">
                      <img src={base_url_image + items?.image} className="anmouncementlist1  " />
                    </div>
                  </div>
                  <div className="  col-md-6 mb-4">
                    <h2
                      className="announcetitle   text-start"
                      data-aos="fade-left"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      {items?.title}
                    </h2>

                    <p dangerouslySetInnerHTML={{ __html: items?.short_description }}></p>

                    <Link onClick={handleannouncementlist} className="announcementread" to={`/news-announcements/${items?.id}`}> Read more  <AiOutlineDoubleRight />
                    </Link>
                  </div>


                </div>
              ))}

            </div>
          </div>
        </section>

        <Sponsor />
      </Layout >
    </>
  );
}

export default AnnouncementList;
