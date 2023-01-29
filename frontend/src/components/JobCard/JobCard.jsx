import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Container from "../Container/Container";
import "./JobCard.scss";
import Button from "../Buttons/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getJobByLimit } from "../../Lib/User.helper";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getJobByLimit(setJobs);
  }, []);
  const history = useHistory();

  return (
    <Container>
      <div className="maindiv">
        <h2> RECENT JOBS</h2>
    <hr />
        <div className="cardmain">
          {jobs&& jobs?.map(values => {
            return (
              <div className="card">
                <div className="topdiv">
                  <div className="imghead">
                    <div className="leftdiv">
                      <span>{values.jobtype}</span>
                    </div>
                    <div className="rightdiv">
                      <FavoriteBorderIcon style={{ color: "#23c0e9" }} />
                    </div>
                  </div>
                  <div className="image">
                    <img src={values.img} />
                  </div>
                </div>
                <div className="bottomdiv">
                  <div>
                    <h3>{values.compname}</h3>
                    <p>{values.address}</p>
                    <Button
                      text="View Job"
                      className="btns btn"
                      onClick={() => history.push(`/jobdetail/${values._id}`)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default JobCard;
