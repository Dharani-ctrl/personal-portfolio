import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
//import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";
import { UpcomingOutlined } from "@mui/icons-material";

function Experience() {
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
          <h1>Experience</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2023 "
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            <strong>NoviTech R&D Private Limited</strong>
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Web Development-Intern
          </h6>
          <p>• I have Successfully Completed 1 month of internship program in Web Development.</p>
          <p>• Developed a mini project such as Userinterface, Responsible webpage, Navigation Interaction etc.</p>


          
          
        </VerticalTimelineElement>

        



      
       
      </VerticalTimeline>


      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2024 "
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            <strong>Adaovi</strong>
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Web Development-Internship
          </h6>
          <p>• I have Successfully Completed 2-month of internship program in Web Development.</p>
          <p>• Developed a mini project such as "CRUD operation using ReactJs" and "BMI calculator using js".</p>
        </VerticalTimelineElement>

        



      
        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<UpcomingOutlined />}
        />
      </VerticalTimeline>



    </div>
  );
}

export default Experience;
