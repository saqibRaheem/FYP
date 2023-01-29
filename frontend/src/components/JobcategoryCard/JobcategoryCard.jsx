import React, { useState, useEffect } from "react";
import "./JobcategoryCard.scss";
import Container from "../Container/Container";
import CodeSharpIcon from "@mui/icons-material/CodeSharp";
import BusinessIcon from "@mui/icons-material/Business";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
// import { getAllJobs } from "../../Lib/User.helper";
import { useHistory } from "react-router-dom";
// import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
const JobcategoryCard = () => {
  const history = useHistory();
  // const [jobs, setJobs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [filterJobs, setFilterJobs] = useState([]);
  // const [filterKeywords, setFilterKeywords] = useState("");

  // useEffect(() => {
  //   getAllJobs(setJobs, setLoading);
  // }, []);
  return (
    <Container>
      <div className={`${"category_text"}`}>
        <h2>JOB CATEGORIES</h2>
        <br />
        <p>
          All the DIHE students can find jobs according to their fields and
          skills. DIHE-RM makes it easy. DIHE does not believe only provide a
          quality education. We believe a better job after passing from this
          university. DIHE is providing quality education with it DIHE is also
          providing opportunities to our students for getting their dream jobs
          in different corporates
        </p>
      </div>
      <div className={`${"servicediv"}`}>
      <AnimationOnScroll delay='100' animateIn="animate__slideInUp">
        <div
          className={`${"service"}`}
          onClick={() =>
            history.push({
              pathname: "/jobbycategory",
              state: "IT and Communications Technology",
            })
          }
        >

          <div className={`${"insidediv"}`}>
            <div>
              <button>
                <CodeSharpIcon className={`${"icons"}`} />
              </button>
            </div>
            <div>
              <h4>Web &amp; Software dev</h4>
            </div>
          </div>
        </div>
        
</AnimationOnScroll>
<AnimationOnScroll delay='200' animateIn="animate__slideInUp">

        <div
          className={`${"service"}`}
          onClick={() =>
            history.push({
              pathname: "/jobbycategory",
              state: "Industrial manufacturing",
            })
          }
        >
          <div className={`${"insidediv"}`}>
            <div>
              <button>
                <BusinessIcon className={`${"icons"}`} />
              </button>
            </div>
            <div>
              <h4>Industrial</h4>
            </div>
          </div>
        </div>

</AnimationOnScroll>
<AnimationOnScroll delay='300' animateIn="animate__slideInUp">

        <div
          className={`${"service"}`}
          onClick={() =>
            history.push({
              pathname: "/jobbycategory",
              state: "Food and Beverages",
            })
          }
        >
          <div className={`${"insidediv"}`}>
            <div>
              <button>
                <DinnerDiningIcon className={`${"icons"}`} />
              </button>
            </div>
            <div>
              <h4>Food Science</h4>
            </div>
          </div>
        </div>
</AnimationOnScroll>
<AnimationOnScroll delay='400' animateIn="animate__slideInUp">

        <div
          className={`${"service"}`}
          onClick={() =>
            history.push({
              pathname: "/jobbycategory",
              state: "Services",
            })
          }
        >
          <div className={`${"insidediv"}`}>
            <div>
              <button>
                <LocalPoliceIcon className={`${"icons"}`} />
              </button>
            </div>
            <div>
              <h4>Services</h4>
            </div>
          </div>
        </div>
</AnimationOnScroll>
      </div>
    </Container>
  );
};

export default JobcategoryCard;
