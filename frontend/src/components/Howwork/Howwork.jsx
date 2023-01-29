import React from "react";
import "./Howwork.scss";
import Container from "../Container/Container";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SearchIcon from "@mui/icons-material/Search";
import TouchAppIcon from "@mui/icons-material/TouchApp";
const Howwork = () => {
  return (
    <div className={`${"main"}`}>
      <Container>
        <div className={`${"header-section"}`}>
          <h2>HOW DIHE-RM WORKS?</h2>
          <p>
            DIHE-RM specially developed for the students and company. Students
            search their dream job and company can hire ideal candidates.
          </p>
        </div>

        <div className={`${"body-section"}`}>
          <div className={`${"working-process"}`}>
            <span>
              <PersonOutlineIcon className={`${"process-icon"}`} />
            </span>
            <h4>Create an Account</h4>
            <p>
              First step create an account and get authentication for further
              process without autnentication user can't acsess DIHE-RM
              functionalities.
            </p>
          </div>

          <div className={`${"working-process"}`}>
            <span>
              <WorkOutlineIcon className={`${"process-icon"}`} />
            </span>
            <h4>Post Jobs</h4>
            <p>
              After authentication each company can access their dashboard from
              their companies can post a job and see the applicants to the job.
            </p>
          </div>
          <div className={`${"working-process"}`}>
            <span>
              <SearchIcon className={`${"process-icon"}`} />
            </span>
            <h4>Search Jobs</h4>
            <p>
              DIHE students need authentication through login. After it each
              student will get a dashboard for maintaining their profile and can
              search jobs.
            </p>
          </div>
          <div className={`${"working-process"}`}>
            <span>
              <TouchAppIcon className={`${"process-icon"}`} />
            </span>
            <h4>Apply</h4>
            <p>
              Dihe students can easily apply to the job according to their
              qualification and skills. To apply just click apply button and
              upload their CVs.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Howwork;
