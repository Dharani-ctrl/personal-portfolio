import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function Education() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational
          
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Qualification Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022 - 2026"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Dhanalakshmi Srinivasan College of Engineering,Coimbatore
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
           Bachelor of Engineering
          </h4>
          <p>
           Computer Science and Engineering - 82%(upto 4th sem)
           
           Coimbatore-Tamilnadu
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            Government Higher Secondary School
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Higher Secondary Certificate
          </h4>
          <p>
           Maths-Computer-80%
           Salem-Tamilnadu

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2019 - 2020"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">Government Higher Secondary School</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
          Secondary School Leaving Certificate
          </h4>
          <p>
             Tamil,English,Maths,Science,Social Science -78%
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default Education;
