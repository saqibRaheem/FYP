import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import parse from "html-react-parser";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./StudentProfile.scss";
import { useSelector } from "react-redux";
const StudentProfile = () => {
  const user = useSelector((state) => state.status.user);
  const role = useSelector((state) => state.status.role);

  return (
    <div className="student-profile-main">
      <div className="student-profile">
        <div className="student-profile-wrapper-1">
          <h3>
            {role === "student"
              ? user?.firstname + user?.lastname
              : user?.companyname}
          </h3>
          <span>{role === "student" ? user?.stdId : user?.tagline}</span>
          <span>{role === "student" && user.professionaltitle}</span>
        </div>
        <div className="student-profile-wrapper-2">
          <div>
            <HomeOutlinedIcon />
            <span>{user.address}</span>
          </div>
          <div>
            <EmailOutlinedIcon /> <span>{user.email}</span>{" "}
          </div>
          <div>
            <PhoneAndroidOutlinedIcon /> <span>{user.phone}</span>{" "}
          </div>
          {role === "student" && (
            <div>
              <HomeOutlinedIcon /> <span>{user.tworkingexp} Year Exp.</span>{" "}
            </div>
          )}
        </div>
      </div>
      {role === "student" && (
        <div className="user-info-col">
          <div className="info-header">
            <h3>Career</h3>
          </div>
          <div className="user-detail">
            <p>{user.bio}</p>
          </div>
        </div>
      )}
      <div className="user-info-col">
        <div>
          <div className="info-header">
            <h3>{role === "student" ? "Education" : "Company Information"}</h3>
          </div>
          <div className="user-info-container">
            <div>
              <div className="user-detail">
                <span>{role === "student" ? "University" : "Category"} </span>
                <p>{role === "student" && user?.education}</p>
                <p>
                  {role === "student" ? user?.degree_program : user?.category}
                </p>
              </div>
              <div className="user-detail">
                <span>
                  {role === "student" ? "Intermidate" : "No of Employees"}
                </span>

                <p>
                  {role === "student" ? user?.inter_educ : user?.employeesno}
                </p>
              </div>
              <div className="user-detail">
                <span> {role === "student" ? "School" : "Website"}</span>
                <p>{role === "student" ? user?.school_educ : user?.website}</p>
              </div>
              {role === "company" && (
                <div className="user-detail">
                  <span> {role === "company" && "Workingtime"}</span>
                  <p>{role === "company" && user?.workingtime}</p>
                </div>
              )}
            </div>
            {role === "student" && (
              <div>
                <div className="user-detail">
                  <span>CGPA</span>
                  <p>{user?.cgpa}</p>
                </div>
                <div className="user-detail">
                  <span>Inter Grade</span>
                  <p>{user?.igrade}</p>
                </div>
                <div className="user-detail">
                  <span>Matric Grade</span>
                  <p>{user?.mgrade}</p>
                </div>
              </div>
            )}

            <div></div>
          </div>
        </div>
      </div>
      <div className="user-info-col">
        <div className="info-header">
          <h3>
            {role === "student" ? "Work & Experience" : "Company Summary"}
          </h3>
        </div>
        <div className="user-detail">
          {role === "student"
            ? user?.work_exp && parse(JSON.parse(user?.work_exp))
            : user?.aboutcompany && parse(JSON.parse(user?.aboutcompany))}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
