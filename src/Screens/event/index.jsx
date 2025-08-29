import "./index.css";
import countyicon from "../../Assets/images/countyicon.svg";
import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import HeroSection from "../../components/herosection";
import Sponsor from "../../components/sponsor";
import ourworkbg from "../../Assets/images/ourworkbg.png";
import eventBannerImg from "../../Assets/images/eventBannerImg.png";
import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import communityimg from "../../Assets/images/communityimg.png";
import { useNavigate } from "react-router-dom";
import { useGet, usePost } from "../Api/usePost";
import { base_url_image } from "../Api/base_url";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
function Event() {
  const navigate = useNavigate();
  const [logintoken, setLogintoken] = useState(null);
  const [interestedEvents, setInterestedeEvents] = useState([]);
  const learnnavigate = (items) => {
    navigate(`${items}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const {
    ApiData: ApiDataGet,
    loading: loadingGet,
    error: errorGet,
    get: getdata,
  } = useGet("/event");
  const {
    ApiData: ApiInterestedEventGet,
    loading: loadingInterestedEventGet,
    error: errorInterestedEventGet,
    get: getInterestedEvents,
  } = useGet("/my-interested-events");


  useEffect(() => {
    getdata();
    let token = localStorage.getItem("token");
    if (token) {
      getInterestedEvents();
      setLogintoken(token);
    }

    document.title = "Event - HIS OC" || "HOME - HIS OC";
  }, []);

  const handleWishList = async (eventId) => {
    const token = localStorage.getItem("token");
    const base_url = `${import.meta.env.VITE_API_URL}api`;
    if (!token) {
      toast.error("Please login first!");
      return;
    }
    const formDataMethod = new FormData();
    formDataMethod.append("event_id", eventId);
    let endpoint = "";
    if (isInWishlist(eventId)) {
      // await postNotInterest(formDataMethod);
      endpoint = "/not-interested-event";
    } else {
      endpoint = "/interested-event";
    }

    const response = await fetch(base_url + endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formDataMethod,
    });

    const result = await response.json();
    if (result?.status == true) {
      toast.success(result?.message);
      getInterestedEvents();
    }
  };
  const isInWishlist = (EventId) => {
    return interestedEvents.some((item) => item == EventId);
  };

  
  useEffect(() => {
    if (ApiInterestedEventGet?.status === true && ApiInterestedEventGet?.data) {
      let interestedeEventsTemp = ApiInterestedEventGet.data.map((item) => {
        return item.id;
      });
      console.log("interested events ids", interestedeEventsTemp);
      setInterestedeEvents(interestedeEventsTemp);
    }
  }, [ApiInterestedEventGet]);

  return (
    <>
      <Layout>
        <HeroSection
          heroimg={eventBannerImg}
          pagename="Our Events"
          title2="Events"
          programpojectaboutherounderline="houseprogramunderlineourwork"
          programprojectsubttle="givedonationsubtitle"
        />

        <section className="community  ">
          <div className="container  py-5">
            {ApiDataGet?.data?.length > 0 ? (
              ApiDataGet?.data?.map((items, index) => (
                <div className="row" key={index}>
                  <div className="col-md-7 mt-5">
                    <div className=" d-flex gap-4">
                      <p className="monday-text">
                        <br /> <span className="monday2">{index + 1}</span>
                      </p>
                      <div className="position-relative">
                        <h2 className="communitytitle ext-black">
                          {items?.title}
                        </h2>
                        <button
                          className="favorite-btn"
                          onClick={() => handleWishList(items.id)}
                        >
                          {/* <FaRegHeart /> */}
                          {isInWishlist(items.id) ? (
                            <FaHeart color="red" />
                          ) : (
                            <FaRegHeart />
                          )}
                        </button>

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
                            {items?.start_time} - {items?.end_time}
                          </p>
                        </div>

                        <p
                          className="communitypara"
                          dangerouslySetInnerHTML={{
                            __html: items?.description,
                          }}
                        ></p>

                        <div className="d-flex gap-2">
                          <button
                            onClick={() => learnnavigate(items?.id)}
                            className="todaybtn"
                          >
                            Learn more
                          </button>
                          {items?.ticketing_link && (
                            <a
                              href={items?.ticketing_link}
                              className="todaybtn"
                              target="_blank"
                            >
                              {items?.ticketing_button_text}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 mt-5">
                    <img
                      src={
                        items?.image
                          ? `${base_url_image}${items.image}`
                          : communityimg
                      }
                      className="img-fluid eventimg"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center ">
                <h2 className="text-black">No Events Available!</h2>
              </div>
            )}
          </div>
        </section>

        {/* <Leadership /> */}
        <Sponsor />
      </Layout>
    </>
  );
}

export default Event;
