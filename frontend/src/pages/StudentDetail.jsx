import { useEffect, useState } from "react";
import FormSlider from "../components/FormSlider/FormSlider";
import Footer from "../components/Footer/Footer";
import Grid from "@mui/material/Grid";
import Container from "../components/Container/Container";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DateRangeIcon from "@mui/icons-material/DateRange";
import InfoIcon from "@mui/icons-material/Info";
import GradeIcon from "@mui/icons-material/Grade";
import WcIcon from "@mui/icons-material/Wc";
import Buttons from "../components/Buttons/Button";
import Header from "../components/Header/Header";
import { getStudentById, blockUser } from "../Lib/User.helper.js";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import { useSelector } from "react-redux";
import "./Pages.scss";
const StudentDetail = () => {
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appliedId, setAppliedId] = useState("");
  const user = useSelector((state) => state.status);
  const {
    _id,
    work_exp,
    uname,
    tworkingexp,
    twitter,
    stdId,
    skills,
    school_educ,
    profilePic,
    professionaltitle,
    phone,
    mgrade,
    linkedin,
    lastname,
    inter_educ,
    igrade,
    google,
    isBlock,
    gender,
    firstname,
    email,
    education,
    dob,
    degree_program,
    cgpa,
    bio,
    age,
    address,
  } = !loading && student[0];

  const { id } = useParams();

  useEffect(() => {
    getStudentById(id, setStudent, setLoading);
  }, []);

  return (
    <div className="jobdetail">
      <Header />
      <FormSlider text="Student Details" />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <div className="jobbox">
              <div className="card">
                <div>
                  <h3 className="title">Bio</h3>
                  <hr />
                  <p>{bio}</p>
                  <h3 className="title h3top">Working Experience</h3>
                  <hr />
                  {work_exp && parse(JSON.parse(work_exp))}
                  <h3 className="title h3top">Qualification</h3>
                  <hr />
                  <ul>
                    <li>{education}</li>
                  </ul>
                  <h3 className="title h3top">Specialization</h3>
                  <hr />
                  <ul>
                    <li>{degree_program}</li>
                  </ul>
                  <h3 className="title h3top">CGPA</h3>
                  <hr />
                  <ul>
                    <li>{cgpa}</li>
                  </ul>
                  <h3 className="title h3top">Inter / A-level grade</h3>
                  <hr />
                  <ul>
                    <li>{igrade}</li>
                  </ul>
                  <h3 className="title h3top">Matric / 0-level grade</h3>
                  <hr />
                  <ul>
                    <li>{mgrade}</li>
                  </ul>
                  <h3 className="title h3top">Skills</h3>
                  <hr />
                  <ul>
                    <li>{skills}</li>
                  </ul>
                  <h3 className="title h3top">Age</h3>
                  <hr />
                  <ul>
                    <li>{age}</li>
                  </ul>
                  <h3 className="title h3top">Email</h3>
                  <hr />
                  <ul>
                    <li>{email}</li>
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
                <h2>Student Overview</h2>
              </div>
              <div className="company_detail_top">
                <img src={profilePic} alt="" width={80} height={80} />
                <h4>{firstname + " " + lastname}</h4>
                <hr />
              </div>
              <div className="company_detail_bottom">
                <ul>
                  <li>
                    <span>
                      <CalendarTodayIcon width={30} height={30} />
                    </span>
                    <div className="info-content">ID</div>
                    <div className="posted_date">{stdId}</div>
                  </li>
                  <li>
                    <span>
                      <InfoIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Title</div>
                    <div className="posted_date">{professionaltitle}</div>
                  </li>
                  <li>
                    <span>
                      <DateRangeIcon width={30} height={30} />
                    </span>
                    <div className="info-content">DOB</div>
                    <div className="posted_date">{dob}</div>
                  </li>
                  <li>
                    <span>
                      <WcIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Gender</div>
                    <div className="posted_date">{gender}</div>
                  </li>
                  <li>
                    <span>
                      <GradeIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Experience</div>
                    <div className="posted_date">
                      {tworkingexp} {tworkingexp === 1 ? "year" : "years"}
                    </div>
                  </li>
                </ul>
                {user.role === "admin" && (
                  <div className="apply">
                    <Buttons
                      text={isBlock ? "unblock" : "Block"}
                      onClick={() => {
                        blockUser(_id, isBlock ? false : true);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default StudentDetail;
