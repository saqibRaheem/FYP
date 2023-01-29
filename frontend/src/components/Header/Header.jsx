import React, { useState, useEffect, useRef } from "react";
import Container from "../Container/Container";
import Button from "../Buttons/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useHistory } from "react-router-dom";
import { UseWindowSize } from "../../hooks/UseWidth";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Lib/User.helper";
import userStatus from "../../store/action/index";
import "./Header.scss";
const Header = ({ textColor }) => {
  const [showHeader, setShowHeader] = useState(false);
  const [height, setHeight] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.status);
  const useWith = UseWindowSize();
  useEffect(() => {
    if (useWith?.width > 900) {
      setShowHeader(false);
    }
  }, [useWith?.width]);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setHeight(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div
      className={`${
        height > 40 && useWith?.width > 900
          ? "header-main-sticky"
          : "header-main"
      }`}
    >
      <Container>
        <div className="hamburger" onClick={() => setShowHeader(prev => !prev)}>
          <MenuIcon color="white" className="menu-icon" />
        </div>
        <div
          className={`${
            !showHeader && useWith?.width > 900
              ? "header"
              : showHeader && useWith?.width < 900
              ? "header"
              : "header-none"
          }`}
        >
          <div className="header-left">
            <h3>Recruitment System</h3>
            <ul className={textColor && "nav-text-color"}>
              <Link to="/" className="route-link">
                <li> Home </li>
              </Link>
              {user.loginStatus && (
                <Link to="/profile" className="route-link">
                  <li> Profile </li>
                </Link>
              )}
              {(user.role === "student" || !user.loginStatus) && (
                <Link to="/jobs" className="route-link">
                  <li> Jobs </li>
                </Link>
              )}

              {(user.role === "student" || !user.loginStatus) && (
                <Link to="/companies" className="route-link">
                  <li> Companies </li>
                </Link>
              )}
              {(user.role === "company") && (
                <Link to="/students" className="route-link">
                  <li> Students </li>
                </Link>
              )}
              {(user.role === "student" || user.role === "company" || !user.loginStatus) && (
                <Link to="/contact" className="route-link">
                  <li>Contact</li>
                </Link>
              )}
            </ul>
          </div>
          <div className="header-right">
            {!user.loginStatus ? (
              <>
                <Link to="login">
                  <Button text="login" customClass="navBtn" />
                </Link>
                <Link to="signup">
                  <Button
                    text="register"
                    Icon={<PersonOutlineIcon />}
                    customClass="navBtn"
                  />
                </Link>
              </>
            ) : (
              <Button
                text="Logout"
                customClass="navBtn"
                onClick={() => logout(dispatch, userStatus, history)}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Header;
