import React, { useEffect, useState } from 'react'
import availabletagline from "../../Assets/images/availabletagline.png";

const Stats = ({ApiDatastats}) => {
    
    // setStatsData(ApiDatastats?.data?.filter((stats)=>stats.show_in_web == 1 ))
    const [statsData, setStatsData] = useState();
    useEffect(() => {
        if (ApiDatastats?.data) {
            const filteredData = ApiDatastats.data.filter((stats) => stats.show_in_web == 1);
            console.log('Filtered stats:', filteredData);
    
            if (filteredData.length > 0) {
                setStatsData(filteredData[0]); // Update your state with filtered data
            }
        } else {
            console.log('ApiDatastats is not yet available or data is empty');
        }
    }, [ApiDatastats]);
    

    
    
  return (
    <div className="container text-center mb-4">
                <h2
                  className="helptagline fw-bold mb-3"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  Help is{" "}
                  <span className="text-success position-relative">
                    Available{" "}
                    <img className="availabletagline" src={availabletagline} />
                  </span>
                </h2>
                <p
                  className=" mb-4"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  We've been helping people find their way home since 1989.
                </p>
                <div
                  className="row "
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <div className="heplcard  col-md-4 mb-3 mb-md-0">
                    <div className="stat-card   py-4 px-3 shadow-sm rounded h-100">
                      <h3 className="helped fw-bold text-success">{statsData?.number}</h3>
                      <p className="mb-0">{statsData?.help}</p>
                    </div>
                  </div>
                  <div className=" heplcard col-md-4 mb-3 mb-md-0">
                    <div className="stat-card   py-4 px-3 shadow-sm rounded h-100">
                      <h3 className="helped fw-bold text-primary">{statsData?.value}</h3>
                      <p className="mb-0">{statsData?.title}</p>
                      {/* <p className="mb-0">Individuals Helped Last Year</p> */}
                    </div>
                  </div>
                  <div className="heplcard col-md-4">
                    <div className="stat-card   py-4 px-3 shadow-sm rounded h-100">
                      <h3 className="helped fw-bold text-warning">{statsData?.percentage}</h3>
                      <p className="mb-0">{statsData?.guide}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
  )
}

export default Stats
