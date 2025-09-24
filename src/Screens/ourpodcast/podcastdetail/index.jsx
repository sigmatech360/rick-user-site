import "./index.css";

import Layout from "../../../components/layout";
import React, { useEffect } from "react";
import VolunteerOrientationimg from "../../../Assets/images/VolunteerOrientationimg.webp";
import Sponsor from "../../../components/sponsor";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import communityimg from "../../../Assets/images/communityimg.webp";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useGet } from '../../Api/usePost'
import { Link, useNavigate, useParams } from "react-router-dom";
import { base_url_image } from "../../Api/base_url";
import Ourpodcasts from "../../../components/ourpodcast";

import Placeholder from '../../../Assets/images/placeholder.webp'
function Podcastdetail() {

  const { id } = useParams()
  const { ApiData: ApiDataGet, loading: loadingGet, error: errorGet, get: getdata } = useGet(`/podcast/${id}`)
  const { ApiData: ApiDataGetlist, loading: loadingGetlist, error: errorGetlist, get: getdatalist } = useGet('/announcement')


  const { ApiData: ApiDatapodcast, loading: loadingpodcast, error: errorpodcast, get: getdatapodcast } = useGet('/podcast')
  useEffect(() => {
    getdata()
    
  document.title = "Podcast Detail - HIS OC ";
  }, [id])
  useEffect(() => {
    getdatalist()
    getdatapodcast()
  }, [])
  console.log("ApiDataGetlist", ApiDataGetlist)

  const agendaItems = [
    { time: "5:00 PM - 6:00 PM", event: "Arrival and Registration" },
    { time: "6:00 PM - 6:30 PM", event: "Opening Remarks" },
    { time: "6:30 PM - 7:00 PM", event: "Keynote Speeches" },
    { time: "7:00 PM - 8:00 PM", event: "Live Entertainment" },
    {
      time: "8:00 PM - 9:00 PM",
      event: "Special Presentations & Closing Remarks",
    },
  ];
  const navigate = useNavigate()

  const handlerouteannouncementlist = (id) => {

    navigate(`/news-announcements/${id}`)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Layout>
      <section className="communityOutreachDay">
        <div className="container">
          <Link to={"/ourpodcastlist"} className="communityOutreachDayheader d-flex gap-2 align-items-center">
            <MdKeyboardDoubleArrowLeft />
            Podcast Detail
          </Link>
          <div className="row">


            <div className="col-md-12 mt-4">
              {/* <img
                src={base_url_image + ApiDataGet?.data?.image}
                alt="Community Event"
                className="communityimg"
              /> */}


              {ApiDataGet?.data?.video_src?.trim().startsWith("<iframe") ? (
                <div
                  className="iframe-wrapperdetail img-fluid card-img-top"
                  dangerouslySetInnerHTML={{ __html: ApiDataGet?.data?.video_src }}
                ></div>
              ) : ApiDataGet?.data?.video_src ? (
                // If video_src is not an iframe but exists, render the video tag
                <video
                  src={base_url_image + ApiDataGet?.data?.video_src}
                  className="img-fluid card-img-top"
                  alt="Podcast Thumbnail"
                  controls
                />
              ) : (

                <img
                  src={`${base_url_image}default-thumbnail.webp`}
                  className="img-fluid card-img-top"
                  alt="Default Thumbnail"
                />
              )}

            </div>
            <div className="col-md-12 mt-5">

              <div className="communityOutreachDayschedual">
                {/* <p className="d-flex align-items-center">
                  <FiMapPin /> Central Park, Orange County
                </p> */}

                <p className="d-flex align-items-center gap-2">
                  <RiCalendar2Line /> <span className="me-2"> {ApiDataGet?.data?.date}</span>
                </p>
                <div className="communityOutreachDayschedualdivider"></div>
                <p className="d-flex align-items-center">
                  <CiClock2 />{ApiDataGet?.data?.video_duration}
                </p>
              </div>
              <h4 className="communityOutreachDaytitle">
                {ApiDataGet?.data?.title}
              </h4>

            </div>
            <Ourpodcasts ApiDatapodcast={ApiDatapodcast} />
            <div className="col-md-6 mt-4">
              <p className="communityOutreachDaypara" dangerouslySetInnerHTML={{
                __html: ApiDataGet?.data?.long_description

              }}>

              </p>
              {/* 
              <h3 className="mb-4">Agenda</h3>

              <div className="timeline">
                {agendaItems.map((item, index) => (
                  <div key={index} className="timeline-item d-flex ">
                    <div className="timeline-dotparent">
                      {" "}
                      <div className="timeline-dot"></div>{" "}
                    </div>
                    <div className="timeline-content">
                      <p className="time mb-0">{item.time}</p>
                      <p className="event">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
         
          </div>
        </div>
        <Sponsor />
      </section>
    </Layout >
  );
}

export default Podcastdetail;
