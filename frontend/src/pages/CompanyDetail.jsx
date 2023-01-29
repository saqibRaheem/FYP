import { useEffect, useState } from "react";
import FormSlider from "../components/FormSlider/FormSlider";
import Footer from "../components/Footer/Footer";
import Grid from "@mui/material/Grid";
import Container from "../components/Container/Container";
import user from "../assests/user-profile.png";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";
import GradeIcon from "@mui/icons-material/Grade";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Buttons from "../components/Buttons/Button";
import Header from "../components/Header/Header";
import { getStudentById, blockUser,getusers } from "../Lib/User.helper.js";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import AppliedJobModal from "../components/AppliedJobModal/AppliedJobModal";
import { useSelector } from "react-redux";
import "./Pages.scss";
import parse from "html-react-parser";

const CompanyDetail = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appliedId, setAppliedId] = useState("");
  const user = useSelector((state) => state.status);
  const {
    aboutcompany,
    address,
    allow,
    category,
    companyname,
    dob,
    email,
    employeesno,
    google,
    isBlock,
    linkedin,
    ownername,
    phone,
    profilePic,
    stdId,
    tagline,
    twitter,
    uname,
    website,
    workingtime,
    _id,
  } = !loading && student[0];

  const { id } = useParams();

  useEffect(() => {
    getusers("company", setStudent, setLoading);
  }, []);

  // const isApplied = () => {
  //   const filteredId = appliedCandidates?.find(id => id === user);
  //   setAppliedId(filteredId);
  // };

  // useEffect(() => {
  //   isApplied();
  // }, [appliedCandidates]);
  // if (loading) {
  //   return (
  //     <div className="loading">
  //       <Loader />
  //     </div>
  //   );
  // }
  return (
    <div className="jobdetail">
      <Header />
      <FormSlider text="Company Details" />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <div className="jobbox">
              <div className="card">
                <div>
                  <h3 className="title">Tagline</h3>
                  <hr />
                  <p>{tagline}</p>
                  <h3 className="title h3top">About us</h3>
                  <hr />
                  {aboutcompany && parse(JSON.parse(aboutcompany))}
                  <h3 className="title h3top">No of Employees</h3>
                  <hr />
                  <ul>
                    <li>{employeesno}</li>
                  </ul>
                  <h3 className="title h3top">Working Time</h3>
                  <hr />
                  <ul>
                    <li>{workingtime}</li>
                  </ul>
                  <h3 className="title h3top">Website</h3>
                  <hr />
                  <ul>
                    <li>{website}</li>
                  </ul>
                  <h3 className="title h3top">Contact No</h3>
                  <hr />
                  <ul>
                    <li>{phone}</li>
                  </ul>
                  <h3 className="title h3top">Address</h3>
                  <hr />
                  <ul>
                    <li>{address}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="jobbox_right">
              <div className="title">
                <h2>Company Overview</h2>
              </div>
              <div className="company_detail_top">
                <img src={profilePic} alt="" width={80} height={80} />
                <h4>{companyname}</h4>
                {/* <p>{jobtype}</p> */}
                <hr />
              </div>
              <div className="company_detail_bottom">
                <ul>
                  <li>
                    <span>
                      <CalendarTodayIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Established Date</div>
                    <div className="posted_date">{dob}</div>
                  </li>
                  <li>
                    <span>
                      <CategoryIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Category</div>
                    <div className="posted_date">{category}</div>
                  </li>
                  <li>
                    <span>
                      <GradeIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Owner Name</div>
                    <div className="posted_date">{ownername}</div>
                  </li>
                </ul>
                {user.role === "admin" && <div className="apply">
                  <Buttons
                    text={isBlock ? "unblock" : "Block"}
                    onClick={() => {
                      blockUser(_id, isBlock ? false : true);
                    }}
                  />
                </div>}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default CompanyDetail;
