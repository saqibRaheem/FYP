import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import JobDetail from "./pages/JobDetail";
import Jobs from "./pages/Jobs";
import Student from "./pages/Students";
import Company from "./pages/Company";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import userStatus,{getAllStudents} from "./store/action/index";
import { userProfile,getusers } from "./Lib/User.helper";
import AdminJob from "./pages/AdminJobs";
import AdminStudent from "./pages/AdminStudents";
import AdminCompany from "./pages/AdminCompany";
import StudentDetail from "./pages/StudentDetail";
import CompanyDetail from "./pages/CompanyDetail";
import Jobbycategory from "./pages/JobbyCategory";
import Contact from "./pages/Contact";
import Students from "./pages/Students";
import AppliedStudents from "./pages/AppliedStudents";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.status);
  useEffect(() => {
    userProfile(dispatch, userStatus);
    user.role === "company" && getusers("student", false,false , dispatch, getAllStudents);
  }, [user.role]);
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        {!user.loginStatus ? (
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/jobs" component={Jobs} />
              <Route path="/contact" component={Contact} />
              <Route path="/jobdetail/:id" component={JobDetail} />
              <Route path="/companydetail/:id" component={CompanyDetail} />
              <Route path="/companies" component={Company} />
              <Route path="/jobbycategory" component={Jobbycategory} />
              {/* <Route path="*" >
              <Redirect to="/"/>
              </Route> */}
            </Switch>
          </>
        ) : null}
        {user.loginStatus && user.role ? (
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/jobs" component={Jobs} />
              <Route path="/contact" component={Contact} />
              <Route path="/companies" component={Company} />
              <Route path="/students" component={Student} />
              <Route path="/adminjob" component={AdminJob} />
              <Route path="/adminstudent" component={AdminStudent} />
              <Route path="/admincompany" component={AdminCompany} />
              <Route path="/studentdetail/:id" component={StudentDetail} />
              <Route path="/jobdetail/:id" component={JobDetail} />
              <Route path="/companydetail/:id" component={CompanyDetail} />
              <Route path="/jobbycategory" component={Jobbycategory} />
              <Route path="/appliedstudents" component={AppliedStudents} />
              <Route path="/students" component={Students} />

              {/* <Route path="*" >
              <Redirect to="/"/>
              </Route> */}
            </Switch>
          </>
        ) : null}
      </Router>
    </div>
  );
}

export default App;
