import React from "react";
import Container from "../Container/Container";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="footer-main">
      <Container>
        <div className="footer">
          <div className="col-4 col-1">
            <h3>Recruitment System</h3>
            <ul>
              <li>
                <i>
                  <Link to="/">home</Link>
                </i>{" "}
              </li>
              <li>
                <i>
                  <Link to="/jobs">jobs</Link>
                </i>{" "}
              </li>
              <li>
                <i>
                  <Link to="/companies">Companies</Link>
                </i>{" "}
              </li>
              <li>
                <i>
                  <Link to="/contact">contacts</Link>
                </i>{" "}
              </li>
            </ul>
            <span>
              <FacebookIcon className="social-icon" />
            </span>
            <span>
              <GoogleIcon className="social-icon" />
            </span>
            <span>
              <TwitterIcon className="social-icon" />
            </span>
            <span>
              <InstagramIcon className="social-icon" />
            </span>
            <p>
              Lorem Ipsum is simply dummy text of printing and type setting
              industry. Lorem Ipsum been industry standard dummy text ever since
              Lorem Ipsum is simply dummy text of printing and type setting
              industry. Lorem Ipsum been industry standard dummy text ever since
            </p>
          </div>
          {/* <div className="col-4">
            <h3>quick links</h3>
            <ul>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                home{" "}
              </li>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                jobs{" "}
              </li>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                contacts{" "}
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3>for students</h3>
            <ul>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                student dashboard{" "}
              </li>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                apply jobs{" "}
              </li>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>
                my account{" "}
              </li>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                add a resume{" "}
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3>for company</h3>
            <ul>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                company dashboard{" "}
              </li>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                browse candidates{" "}
              </li>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>
                my account{" "}
              </li>
              <li>
                <span>
                  <DoubleArrowIcon className="arrow-icon" />
                </span>{" "}
                add job{" "}
              </li>
            </ul>
          </div> */}
        </div>
      </Container>
    </div>
  );
}
