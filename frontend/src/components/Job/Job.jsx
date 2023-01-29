import React from "react";
import "./Job.scss";
import pic from "../../assests/user-profile.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Buttons from "../Buttons/Button";
import Container from "../Container/Container";
import { useHistory } from "react-router-dom";

const Job = ({ jobs }) => {
  const {
    _id,
    address,
    compname,
    contact,
    description,
    education,
    email,
    experience,
    img,
    jobtype,
    novacancy,
    responsibilities,
    salaryRange,
    skills,
    title,
    website,
  } = jobs ? jobs : "";
  const history = useHistory();
  return (
    <div className="job-main">
      <div className="company-logo">
        <span>
          <img src={img ? img : pic} alt="pic" width={80} height={80} />
        </span>
        <p>
          <span>{title ? title : "Not Available"}</span>
          <br />
          <span className="company-name">{compname}</span>
        </p>
      </div>
      <div className="address">
        <p>
          <AddLocationIcon className="icon" />
        </p>
        <p>{address ? address : "Not Available"}</p>
      </div>
      <div>
        <p className="job-type">{jobtype ? jobtype : "Not Available"}</p>
      </div>
      <div>
        <Buttons
          text="view detail"
          className="job-apply btn"
          onClick={() => history.push(`/jobdetail/${_id}`)}
        />
      </div>
    </div>
  );
};

export default Job;
