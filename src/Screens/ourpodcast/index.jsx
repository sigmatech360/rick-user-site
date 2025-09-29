import "./index.css";

import AOS from "aos";

import Layout from "../../components/layout";

import React, { useState, useEffect } from "react";

import HeroSection from "../../components/herosection";

import Sponsor from "../../components/sponsor";

import partnerunderline from "../../Assets/images/programunderline.webp";

import ourpodcastbg from "../../Assets/images/ourpodcastbg.webp";

import Ourpodcasts from "../../components/ourpodcast";

import { useGet, usePost } from '../Api/usePost'
import { Link } from "react-router-dom";
import ReactHelmet from "../../components/ReactHelmet";
function Ourpodcast() {




  const { ApiData: ApiDatapodcast, loading: loadingpodcast, error: errorpodcast, get: getdatapodcast } = useGet('/podcast')
  useEffect(() => {
    getdatapodcast()
    
  document.title = "Our Podcast- HIS OC ";
  }, [])

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <ReactHelmet />
      <Layout>
        <HeroSection
          heroimg={ourpodcastbg}
          pagetitle="Our  "
          pagename="  Our Podcast"
          title2="    Podcast"
          programprojectsubttle="programprojectsubttle"
          programpojectaboutherounderline="ourpodcastrounderline"
        />

        <section className="Ourpodcast   ">
          <div className="Volunteerinfosecbg  py-5">
            <div className="container">
              <div className="   row">
                <div className="col-md-6">
                  <h2
                    className="title"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Stories Of{" "}
                    <span className="position-relative">
                      {" "}
                      Resilience{" "}
                      <img
                        src={partnerunderline}
                        className="houseprogramunderline"
                        alt="Stories Of Resilience"
                      />{" "}
                    </span>
                  </h2>
                </div>
                <div className="col-md-6">
                  <p
                    className="info-text text-start"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Step into the world of HIS-OC with our podcast, where real
                    stories of hope and transformation come to life. Each
                    episode highlights the journeys of families overcoming
                    homelessness, the dedication of our volunteers, and the
                    impact of our community partnerships.
                  </p>

                  <Link
                  to='https://www.youtube.com/@HISOC'
                  target="_blank"
                    className="volunteerbtn d-inline-block"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Tune In Now!
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Ourpodcasts ApiDatapodcastlist={ApiDatapodcast}  />
        </section>

        <Sponsor />
      </Layout>
    </>
  );
}

export default Ourpodcast;
