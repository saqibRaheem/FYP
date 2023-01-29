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
import { getJobById, blockJob } from "../Lib/User.helper.js";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import AppliedJobModal from "../components/AppliedJobModal/AppliedJobModal";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import "./Pages.scss";
import moment from "moment";
const JobDetail = () => {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appliedId, setAppliedId] = useState("");
  const [jobDate, setjobDate] = useState("");
  const user = useSelector((state) => state.status);

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
    appliedCandidates,
    isBlock,
    category,
    createdAt,
  } = !loading && job[0];

  const { id } = useParams();

  useEffect(() => {
    getJobById(id, setJob, setLoading);
  }, []);

  const isApplied = () => {
    const filteredId = appliedCandidates?.find((id) => id === user?.user?._id);
    setAppliedId(filteredId);
  };
  useEffect(() => {
    isApplied();
  }, [appliedCandidates]);

  if (loading) {
    return (
      <div className="loading">
        <Loader />
      </div>
    );
  }
  return (
    <div className="jobdetail">
      <Header />
      <FormSlider text="Job Detail" />
      <Container>
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <div className="jobbox">
              <div className="card">
                <div>
                  <h3 className="title">Description</h3>
                  <hr />
                  <p>{description}</p>
                  <h3 className="title h3top">Responsilities</h3>
                  <hr />
                  <p>
                    {responsibilities && parse(JSON.parse(responsibilities))}
                  </p>
                  <h3 className="title h3top">Minimum Qualification</h3>
                  <hr />
                  <ul>
                    <li>{education}</li>
                  </ul>
                  <h3 className="title h3top">No of Vacancies</h3>
                  <hr />
                  <ul>
                    <li>{novacancy}</li>
                  </ul>
                  <h3 className="title h3top">Required Skills</h3>
                  <hr />
                  <ul>
                    <li>{skills}</li>
                  </ul>
                  <h3 className="title h3top">Address</h3>
                  <hr />
                  <ul>
                    <li>{address}</li>
                  </ul>
                  <h3 className="title h3top">Contact No</h3>
                  <hr />
                  <ul>
                    <li>{contact}</li>
                  </ul>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className="jobbox_right">
              <div className="title">
                <h2>Job Overview</h2>
              </div>
              <div className="company_detail_top">
                <img src={img} alt="" width={80} height={80} />
                <h4>{compname}</h4>
                <p>{jobtype}</p>
                <hr />
              </div>
              <div className="company_detail_bottom">
                <ul>
                  <li>
                    <span>
                      <CalendarTodayIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Posted Date</div>
                    <div className="posted_date">
                      {moment(createdAt).fromNow()}
                    </div>
                  </li>
                  <li>
                    <span>
                      <InfoIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Title</div>
                    <div className="posted_date">{title}</div>
                  </li>
                  <li>
                    <span>
                      <MonetizationOnIcon width={30} height={30} />
                    </span>
                    <div className="info-content">Salary</div>
                    <div className="posted_date">{salaryRange}</div>
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
                    <div className="info-content">Experience</div>
                    <div className="posted_date">
                      {experience} {experience === 1 ? "year" : "years"}
                    </div>
                  </li>
                </ul>
                {user?.role === "student" || !user?.loginStatus ? (
                  <div className="apply">
                    <AppliedJobModal
                      appliedId={appliedId}
                      jobTitle={title}
                      jobId={_id}
                      userId={[...appliedCandidates, user?.user?._id]}
                      loginStatus={user.loginStatus}
                    />
                  </div>
                ) : user?.role === "admin" ? (
                  <div className="apply">
                    <Buttons
                      text={isBlock ? "unblock" : "Block"}
                      onClick={() => {
                        blockJob(_id, isBlock ? false : true);
                      }}
                    />
                  </div>
                ) : (
                  <div className="apply">
                    <Link
                      to={{
                        pathname: "/appliedstudents",
                        state: appliedCandidates,
                      }}
                    >
                      <Buttons text="Applied Candidates"></Buttons>
                    </Link>
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

export default JobDetail;
