import React from "react";
import "./UserCard.scss";
import pic from "../../assests/user-profile.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Buttons from "../Buttons/Button";
import Container from "../Container/Container";
import { useHistory } from "react-router-dom";
import StudentProfile from "../StudentProfile/StudentProfile";
const UserCard = ({ user, company }) => {
  const {
    profilePic,
    firstname,
    lastname,
    companyname,
    email,
    stdId,
    address,
    website,
    _id,
  } = user ? user : company;
  const history = useHistory();
  return (
    <div className="job-main user-card">
      <div className="company-logo">
        <span>
          <img
            src={profilePic ? profilePic : pic}
            alt="pic"
            width={80}
            height={80}
          />
        </span>
        <p>
          <span>
            {firstname
              ? firstname + " " + lastname
              : companyname
              ? companyname
              : "Not Available"}
          </span>
          <br />
          <span className="company-name">{email}</span>
        </p>
      </div>
      <div className="address">
        <p>
          <AddLocationIcon className="icon" />
        </p>
        <p>{address ? address : "Not Available"}</p>
      </div>
      <div>
        <p className="job-type">
          {stdId ? stdId : website ? website : "Not Available"}
        </p>
      </div>
      <div>
        <Buttons
          text="view detail"
          className="job-apply btn"
          onClick={() =>
            companyname || website
              ? history.push(`/companydetail/${_id}`)
              : history.push(`/studentdetail/${_id}`)
          }
        />
      </div>
    </div>
  );
};

export default UserCard;
