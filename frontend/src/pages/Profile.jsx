import React from "react";
import UserSidebar from "../components/Sidebar/UserSidebar";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FormSlider from "../components/FormSlider/FormSlider";
import PostJob from "../pages/PostJob";
import ChangePassword from "../components/ChangePassword/ChangePassword";
import EditProfile from "../components/EditProfile/EditProfile";
import StudentProfile from "../components/StudentProfile/StudentProfile";
import AdminJob from "./AdminJobs";
import AdminStudent from "./AdminStudents";
import AdminCompany from "./AdminCompany";
import CompanyJob from "../pages/CompanyJob";
import BlockStudent from "../pages/BlockStudents";
import BlockJobs from "../pages/BlockJobs";
import BlockCompany from "../pages/BlockCompany";
import { useSelector } from "react-redux";
import "./Pages.scss";
export default function Profile() {
  const role = useSelector((state) => state.status.role);
  const [component, setComponent] = React.useState(
    role === "admin" ? "adminjob" : "profile"
  );
  return (
    <div>
      <Header />
      <FormSlider text="profile" />
      <Container>
        <div className="user-profile-main">
          <UserSidebar setComponent={setComponent} component={component} />
          {component === "changePassword" ? (
            <ChangePassword />
          ) : component === "editProfile" ? (
            <EditProfile />
          ) : component === "postjob" ? (
            <PostJob />
          ) : component === "prevjob" ? (
            <CompanyJob />
          ) : component === "blockstudent" ? (
            <BlockStudent />
          ) : component === "blockjobs" ? (
            <BlockJobs />
          ) : component === "adminjob" ? (
            <AdminJob />
          ) : component === "adminstudent" ? (
            <AdminStudent />
          ) : component === "admincompany" ? (
            <AdminCompany />
          ) : component === "blockcompany" ? (
            <BlockCompany />
          ) : (
            <StudentProfile />
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
