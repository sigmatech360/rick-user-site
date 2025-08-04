import "./index.css";
import Layout from "../../components/layout";
import React, { useEffect } from "react";
import VolunteerOrientationimg from "../../Assets/images/VolunteerOrientationimg.png";
import Sponsor from "../../components/sponsor";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import communityimg from "../../Assets/images/communityimg.png";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useGet } from "../Api/usePost";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { base_url_image } from "../Api/base_url";

import Placeholder from "../../Assets/images/placeholder.jpg";
function Announcementdetail() {
  const { id } = useParams();
  const {
    ApiData: ApiDataGet,
    loading: loadingGet,
    error: errorGet,
    get: getdata,
  } = useGet(`/announcement/${id}`);
  const {
    ApiData: ApiDataGetlist,
    loading: loadingGetlist,
    error: errorGetlist,
    get: getdatalist,
  } = useGet("/announcement");

  useEffect(() => {
    getdata();
    document.title = ApiDataGet?.data?.title || "HOME- HIS OC";
  }, [id]);
  useEffect(() => {
    getdatalist();
  }, []);
  console.log("ApiDataGetlist", ApiDataGetlist);

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
  const navigate = useNavigate();

  const handlerouteannouncementlist = (id) => {
    navigate(`/news-announcements/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Layout>
      <section className="communityOutreachDay">
        <div className="container">
          <Link
            to="/news-announcements"
            className="communityOutreachDayheader d-flex gap-2 align-items-center"
          >
            <MdKeyboardDoubleArrowLeft />
            All Announcement
          </Link>
          <div className="row">
            <div className="col-md-12 mt-5">
              <h2 className="communityOutreachDaytitle">
                {ApiDataGet?.data?.title}
              </h2>
              <div className="communityOutreachDayschedual">
                {/* <p className="d-flex align-items-center">
                  <FiMapPin /> Central Park, Orange County
                </p> */}

                <p className="d-flex align-items-center gap-2">
                  <RiCalendar2Line />{" "}
                  <span className="me-2"> {ApiDataGet?.data?.date}</span>
                </p>
                {/* <div className="communityOutreachDayschedualdivider"></div>
                <p className="d-flex align-items-center">
                  <CiClock2 /> 10:00 AM - 2:00 PM
                </p> */}
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <img
                src={base_url_image + ApiDataGet?.data?.image}
                alt="Community Event"
                className="img-fluid"
                // className="communityimg"
              />
            </div>

            <div className="col-lg-6 mt-4">
              <p
                className="communityOutreachDaypara"
                dangerouslySetInnerHTML={{
                  __html: ApiDataGet?.data?.long_description,
                }}
              ></p>
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
            <div
              className="VolunteerOrientationblg mb-3 col-lg-6 mt-4"
              style={{ maxHeight: "450px", overflowY: "scroll" }} // Add height and scroll
            >
              {ApiDataGetlist?.data?.map((items, index) => (
                <div
                  key={index}
                  className={` ${
                    index === 3 ? "2" : "1"
                  } item d-flex  align-items-center gap-3`}
                >
                  <img
                    src={
                      items?.image ? base_url_image + items.image : Placeholder
                    }
                    alt="Volunteer Orientation"
                    className="VolunteerOrientationblgimg"
                  />


                  <div>
                    <p className="VolunteerOrientationblgtitledate">
                      {items?.date}
                    </p>
                    <h4>{items?.title}</h4>
                    <button
                      onClick={() => handlerouteannouncementlist(items?.id)}
                      className="btn VolunteerOrientationblgtitledatereade"
                    >
                      Read more <MdOutlineKeyboardDoubleArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Sponsor />
      </section>
    </Layout>
  );
}

export default Announcementdetail;
