import "./index.css";

import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowOutward } from "react-icons/md";

import Sponsor from "../../components/sponsor";
import houseimg from "../../Assets/images/houseimg.png";
import programAfter from "../../Assets/images/programAfter.svg";
import youth from "../../Assets/images/youth.png";
import Oc from "../../Assets/images/Oc.png";
import Closet from "../../Assets/images/closet.png";

import AOS from "aos";

import VolunteerOrientationimg from "../../Assets/images/VolunteerOrientationimg.png";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { useGet } from "../Api/usePost";
import communityimg from "../../Assets/images/communityimg.png";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { base_url_image } from "../Api/base_url";

function Transitionalagedyouthshelter() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { id, slug } = useParams();
  const {
    ApiData: ApiDataGetprogram,
    loading: loadingGetprogram,
    error: errorGetprogram,
    get: getdataprogram,
  } = useGet(`/program/${slug}`);
  const {
    ApiData: ApiDataGetprogramlist,
    loading: loadingGetprogramlist,
    error: errorGetprogramlist,
    get: getdataprogramlist,
  } = useGet("/program");
  useEffect(() => {
    getdataprogram();

    document.title = ApiDataGetprogram?.data?.title || "HOME - HIS OC";
  }, [slug]);

  useEffect(() => {
    getdataprogramlist();
  }, []);

  const programslist = [
    {
      title: "Transitional Aged Youth (TAY)",
    },
    {
      title: "Transitional Housing Program",
    },
    {
      title: " Home Share / Home Share PLUS",
    },
    {
      title: " Housing Connection Program",
    },
    {
      title: " Resource Centers",
    },
  ];

  const navigate = useNavigate();
  const handleroute = (slug) => {
    navigate(`/our-work/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Layout>
        <section className="communityOutreachDay">
          <div className="container">
            <Link
              to={"/our-work"}
              className="communityOutreachDayheader d-flex gap-2 align-items-center"
            >
              <MdKeyboardDoubleArrowLeft />
              All Programs
            </Link>
            <div className="row">
              <div className="col-md-12 mt-5">
                <h2 className="communityOutreachDaytitle">
                  {ApiDataGetprogram?.data?.title}
                </h2>
              </div>

              <div className="col-lg-8 mt-4">
                {/* <img
                  src={base_url_image + ApiDataGetprogram?.data?.image}
                  alt="Community Event"
                  className="w-100 rounded-2 mb-3"
                /> */}
                <div className="d-flex justify-content-center mb-3">
                  <div className="programImgSec">
                    <div className="programImg">
                      <img
                        src={base_url_image + ApiDataGetprogram?.data?.image}
                        alt="Hovered Program"
                        className="img-fluid "
                      />

                    </div>
                    <img
                      src={programAfter}
                      alt="programAfter"
                      className="programAfter"
                      style={{bottom:'-16px'}}
                    />
                    <div className="overlay"></div>
                  </div>
                </div>
                <p
                  className="communityOutreachDaypara mb-4"
                  dangerouslySetInnerHTML={{
                    __html: ApiDataGetprogram?.data?.long_description,
                  }}
                ></p>
              </div>
              <div className="programs1 col-lg-4 mt-4">
                {ApiDataGetprogramlist?.data?.map((data, index) => (
                  <div
                    type="button"
                    onClick={() => handleroute(data?.slug)}
                    key={index}
                    className="item c-pointer d-flex justify-content-between align-items-center my-3"
                  >
                    <h5
                      className={`mb-0 ${
                        ApiDataGetprogram?.data?.title == data?.title
                          ? ""
                          : "text-dark"
                      }`}
                    >
                      {data?.title}
                    </h5>
                    <button className="btn d-flex align-items-center">
                      <MdArrowOutward
                        className={`ms-2 ${
                          ApiDataGetprogram?.data?.title == data?.title
                            ? ""
                            : "text-dark"
                        }`}
                        size={20}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Sponsor />
        </section>
      </Layout>
    </>
  );
}

export default Transitionalagedyouthshelter;
