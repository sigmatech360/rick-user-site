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
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGet } from '../Api/usePost'
import { base_url_image } from "../Api/base_url";

function EventDetail() {
  const { id } = useParams()

  const { ApiData: ApiDataGeteventdetail, loading: loadingGeteventdetail, error: errorGetevent, get: getdataeventdetail } = useGet(`/event/${id}`)
  const { ApiData: ApiDataGeteventlist, loading: loadingGeteventlist, error: errorGeteventlist, get: getdataeventlist } = useGet('/event')
  useEffect(() => {
    getdataeventdetail()

    document.title = ApiDataGeteventdetail?.data?.title || "HOME- HIS OC";
  }, [id])


  useEffect(() => {
    getdataeventlist()

  }, [])


  const navigate = useNavigate()




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

  const handleeventdetail = (id) => {

    navigate(`/event/${id}`)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const eventnavigate = () => {
    navigate("/event")
  }
  return (
    <Layout>
      <section className="communityOutreachDay">
        <div className="container">
          <Link to={"/event"} className="  communityOutreachDayheader d-flex gap-2 align-items-center">
            <MdKeyboardDoubleArrowLeft />
            All Events
          </Link>
          <div className="row">
            <div className="col-md-12 mt-5">
              <h2 className="communityOutreachDaytitle">
                {ApiDataGeteventdetail?.data?.title}
              </h2>
              <div className="communityOutreachDayschedual">
                <p className="d-flex align-items-center gap-2">
                  <FiMapPin /> {ApiDataGeteventdetail?.data?.address}
                </p>
                <div className="communityOutreachDayschedualdivider"></div>
                <p className="d-flex align-items-center gap-2">
                  <RiCalendar2Line /> {ApiDataGeteventdetail?.data?.date}
                </p>
                <div className="communityOutreachDayschedualdivider"></div>
                <p className="d-flex align-items-center gap-2">
                  <CiClock2 /> {ApiDataGeteventdetail?.data?.start_time}  -{ApiDataGeteventdetail?.data?.end_time}
                </p>
              </div>
            </div>

            <div className="col-md-12 mt-4">
              <img
                src={base_url_image + ApiDataGeteventdetail?.data?.image}
                alt="Community Event"
                className="communityimg"
              />
            </div>

            <div className="col-md-6 mt-4">


              <p className="communityOutreachDaypara" dangerouslySetInnerHTML={{
                __html: ApiDataGeteventdetail?.data?.description

              }}>

              </p>

              <h3 className="mb-4">Agenda</h3>

              <div className="timeline">
                {ApiDataGeteventdetail?.data?.agenda.map((item, index) => (
                  <div key={index} className="timeline-item d-flex ">
                    <div className="timeline-dotparent">
                      {" "}
                      <div className="timeline-dot"></div>{" "}
                    </div>
                    <div className="timeline-content">
                      <p className="time mb-0">{item.time}</p>
                      <p className="event">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {ApiDataGeteventlist?.data?.length > 1 && (
              <div
                className="VolunteerOrientationblg mb-3 col-md-5 mt-4"
                style={{ maxHeight: "450px", overflowY: "scroll" }}
              >
                {ApiDataGeteventlist?.data?.map((items, index) => (
                  <div
                    key={index}
                    className={`${index === 3 ? "2" : "1"} item d-flex align-items-center gap-3`}
                  >
                    <img
                      src={base_url_image + items?.image}
                      alt="Volunteer Orientation"
                      className="VolunteerOrientationblgimg"
                    />
                    <div>
                      <p className="VolunteerOrientationblgtitledate">
                        {items?.date}
                      </p>
                      <h4>{items?.title}</h4>
                      <button
                        onClick={() => handleeventdetail(items?.id)}
                        className="btn VolunteerOrientationblgtitledatereade"
                      >
                        Read more <MdOutlineKeyboardDoubleArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
        <Sponsor />
      </section>
    </Layout>
  );
}

export default EventDetail;
