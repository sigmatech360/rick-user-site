import React, { useEffect } from "react";
import "./index.css";

import AOS from "aos";
import { Link, useNavigate } from 'react-router-dom'
import podcastimg1 from "../../Assets/images/podcastimg1.png";
import podcastimg2 from "../../Assets/images/podcastimg2.png";
import podcastimg3 from "../../Assets/images/podcastimg3.png";
import partnerunderline from "../../Assets/images/programunderline.svg";
import { base_url_image } from "../../Screens/Api/base_url";
const Ourpodcasts = ({ ApiDatapodcast, ApiDatapodcastlist, view }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handlepodcastdetail = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const navigate = useNavigate()

  const handlepodcastlist = ({ view }) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/ourpodcastlist")
  }
  return (
    <div className="podcasts">
      <div className="container mt-5">
        <div className="row">
          <h3
            className="titles mb-4 d-flex justify-content-center"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-duration="1000"
          >
            Browse Our{" "}
            <span className="position-relative">
              Podcast
              <img src={partnerunderline} className="underline" alt="Underline" />
            </span>
          </h3>

          {/* Dynamic Cards from API */}
          {ApiDatapodcast?.data?.length > 0 && (
            ApiDatapodcast.data.slice(0, 3).map((item, index) => (
              <Link
                to={`/ourpodcastlist/podcast-detail/${item?.id}`}
                onClick={handlepodcastdetail}
                key={index}
                className="Podcastcard col-md-4 mb-4"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="podcast-card">
                  {item?.video_src?.trim().startsWith("<iframe") ? (
                    <div
                      className="iframe-wrapper img-fluid card-img-top"
                      dangerouslySetInnerHTML={{ __html: item.video_src }}
                    ></div>
                  ) : item?.video_src ? (
                    <video
                      src={base_url_image + item.video_src}
                      className="img-fluid card-img-top"
                      alt="Podcast Thumbnail"
                      controls
                      
                    />
                  ) : (
                    <img
                      src={`${base_url_image}default-thumbnail.jpg`}
                      className="img-fluid card-img-top"
                      alt="Default Thumbnail"
                    />
                  )}

                  <div className="podcastcardbody">
                    <div className="video-meta gap-4">
                      <span className="video-duration">
                        <i className="bi bi-clock"></i> {item?.video_duration}
                      </span>
                      <span className="video-date me-4">
                        <i className="bi bi-calendar"></i> {item?.date}
                      </span>
                    </div>
                    <h5 className="poscasttle card-title color-black">
                      {item?.title}
                    </h5>
                    <p
                      className="poscastpara card-text"
                      dangerouslySetInnerHTML={{
                        __html: item?.short_description || "No description available",
                      }}
                    ></p>
                  </div>
                </div>
              </Link>
            ))
          )}


          {ApiDatapodcastlist?.data?.map((item, index) => (
            <Link to={`/ourpodcastlist/podcast-detail/${item?.id}`}
              onClick={handlepodcastdetail}
              key={index}
              className="Podcastcard col-md-4 mb-4"
              data-aos="fade-right"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="podcast-card">
                {item?.video_src?.trim().startsWith("<iframe") ? (
                  <div
                    className="iframe-wrapper img-fluid card-img-top"
                    dangerouslySetInnerHTML={{ __html: item.video_src }}
                  ></div>
                ) : item?.video_src ? (
                  // If video_src is not an iframe but exists, render the video tag
                  <video
                    src={base_url_image + item.video_src}
                    className="img-fluid card-img-top"
                    alt="Podcast Thumbnail"
                    controls
                  />
                ) : (
                  // Fallback in case video_src is missing or invalid
                  <img
                    src={`${base_url_image}default-thumbnail.jpg`}
                    className="img-fluid card-img-top"
                    alt="Default Thumbnail"
                  />
                )}

                <div className="podcastcardbody">
                  <div className="video-meta gap-4">
                    <span className="video-duration">
                      <i className="bi bi-clock"></i>  {item?.video_duration}
                    </span>
                    <span className="video-date me-4">
                      <i className="bi bi-calendar"></i> {item?.date}
                    </span>
                  </div>
                  <h5 className="poscasttle card-title color-black">{item?.title}</h5>
                  <p
                    className="poscastpara card-text"
                    dangerouslySetInnerHTML={{
                      __html: item?.short_description || "No description available",
                    }}
                  ></p>

                </div>
              </div>
            </Link>
          ))}


          {/* Static Cards */}
          {view && <button onClick={handlepodcastlist} className="podcastbtn">{view}</button>}
        </div>
      </div>
    </div>
  );
};

export default Ourpodcasts;
