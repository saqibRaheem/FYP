import { useState } from "react";
import userProfile from "../../assests/user-profile.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import HistoryIcon from "@mui/icons-material/History";
import { updateProfilePic } from "../../Lib/User.helper";
import "./UserSidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import userStatus from "../../store/action/index";
import Fallback from "../../assests/fallback.png";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../firebase';

export default function UserSidebar({ setComponent, component }) {
  const [text, setText] = useState(false);
  const [updatedPic, setUpdatedPic] = useState("");
  const user = useSelector(state => state.status.user);
  const role = useSelector(state => state.status.role);
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState(null);
const [progresspercent, setProgresspercent] = useState(0);
  const updatePic = file => {
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed",
    (snapshot) => {
      const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgresspercent(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log(downloadURL)
        setImgUrl(downloadURL)
        updateProfilePic(downloadURL);
      setUpdatedPic(downloadURL);

      });
    }
  );

    // var reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = function () {
    //   console.log("sf",reader)
    //   setUpdatedPic(reader.result);
    // };
  };
  return (
    <div>
      <div
        className="sidebar-main"
        style={{ width: role === "admin" && "270px" }}
      >
        {role !== "admin" && (
          <label>
            <input
              type="file"
              hidden
              onChange={e => updatePic(e?.target?.files[0])}
            />
            <div
              className="user-profile-pic"
              onMouseEnter={() => setText(true)}
              onMouseLeave={() => setText(false)}
            >
              <img
                src={
                  updatedPic
                    ? updatedPic
                    : user.profilePic
                    ? user.profilePic
                    : Fallback
                }
                alt="user-profile-pic"
                width="260"
                height="260"
              />
              {text && <div className="pic-text">Change Profile Pic</div>}
              <div className="user-name">
                {role === "student" ? user?.firstname : user?.companyname}
              </div>
            </div>
          </label>
        )}
        <div className="link-btn">
          {role !== "admin" && (
            <div
              className={` ${"btns"} ${component === "profile" && "active"}`}
              onClick={() => setComponent("profile")}
            >
              <span>
                <AccountCircleOutlinedIcon className="btns-icon" />
              </span>
              <span className="btn-text">profile</span>
            </div>
          )}
          {role !== "admin" && (
            <div
              className={` ${"btns"} ${
                component === "editProfile" && "active"
              }`}
              onClick={() => setComponent("editProfile")}
            >
              <span>
                <PersonOutlineOutlinedIcon className="btns-icon" />
              </span>
              <span className="btn-text">Edit Profile</span>
            </div>
          )}
          {role === "company" && (
            <div
              className={` ${"btns"} ${component === "prevjob" && "active"}`}
              onClick={() => setComponent("prevjob")}
            >
              <span>
                <HistoryIcon className="btns-icon" />
              </span>
              <span className="btn-text">Previous Jobs</span>
            </div>
          )}

          {role === "company" && (
            <div
              className={` ${"btns"} ${component === "postjob" && "active"}`}
              onClick={() => setComponent("postjob")}
            >
              <span>
                <PersonOutlineOutlinedIcon className="btns-icon" />
              </span>
              <span className="btn-text">Post Job</span>
            </div>
          )}

          {role === "admin" && (
            <div
              className={` ${"btns"} ${component === "adminjob" && "active"}`}
              onClick={() => setComponent("adminjob")}
            >
              <span>
                <PersonOutlineOutlinedIcon className="btns-icon" />
              </span>
              <span className="btn-text">All Jobs</span>
            </div>
          )}

          {role === "admin" && (
            <div
              className={` ${"btns"} ${component === "blockjobs" && "active"}`}
              onClick={() => setComponent("blockjobs")}
            >
              <span>
                <PersonOutlineOutlinedIcon className="btns-icon" />
              </span>
              <span className="btn-text">Block Jobs</span>
            </div>
          )}
          {role === "admin" && (
            <div
              className={` ${"btns"} ${
                component === "adminstudent" && "active"
              }`}
              onClick={() => setComponent("adminstudent")}
            >
              <span>
                <AccountCircleOutlinedIcon className="btns-icon" />
              </span>
              <span className="btn-text">All Students</span>
            </div>
          )}
          {role === "admin" && (
            <div
              className={` ${"btns"} ${
                component === "blockstudent" && "active"
              }`}
              onClick={() => setComponent("blockstudent")}
            >
              <span>
                <PersonOutlineOutlinedIcon className="btns-icon" />
              </span>
              <span className="btn-text">Block Students</span>
            </div>
          )}
          {role === "admin" && (
            <div
              className={` ${"btns"} ${
                component === "admincompany" && "active"
              }`}
              onClick={() => setComponent("admincompany")}
            >
              <span>
                <BusinessIcon className="btns-icon" />
              </span>
              <span className="btn-text">All Company</span>
            </div>
          )}

          {role === "admin" && (
            <div
              className={` ${"btns"} ${
                component === "blockcompany" && "active"
              }`}
              onClick={() => setComponent("blockcompany")}
            >
              <span>
                <BusinessIcon className="btns-icon" />
              </span>
              <span className="btn-text">Block Company</span>
            </div>
          )}

          <div
            className={` ${"btns"} ${
              component === "changePassword" && "active"
            }`}
            onClick={() => setComponent("changePassword")}
          >
            <span>
              <LockOpenOutlinedIcon className="btns-icon" />
            </span>
            <span className="btn-text">change password</span>
          </div>
        </div>
      </div>
    </div>
  );
}
