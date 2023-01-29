import React, { useEffect, useState } from "react";
import Header from "./../components/Header/Header";
import Slider from "./../components/Slider/Slider";
import GroupButton from "../components/GroupButton/GroupButton";
import JobCard from "../components/JobCard/JobCard";
import JobcategoryCard from "../components/JobcategoryCard/JobcategoryCard";
import Counter from "../components/Counter/Counter";
import Howwork from "../components/Howwork/Howwork";
import Message from "../components/Message/Message";
import Students from "./Students";
import Footer from "../components/Footer/Footer";
import Company from "./Company";
import Browsejob from "./BrowseJobs";
import JobDetail from "./JobDetail";
import PostJob from "./PostJob";
import Loader from "../components/Loader/Loader";
import {getJobsLenght,getCompaniesLenght,getStudentsLenght} from "../Lib/User.helper"
export default function Home() {
  const [studentsCount,setStudentsCount] = useState(0)
  const [jobsCount,setJobsCount] = useState(0)
  const [companiesCount,setCompaniesCount] = useState(0)
  useEffect(()=>{
    getJobsLenght(setJobsCount)
    getStudentsLenght(setStudentsCount)
    getCompaniesLenght(setCompaniesCount)
  },[])
  return (
    <div>
      <Header />
      <Slider />
      {/* <GroupButton /> */}
      <JobCard />
      <JobcategoryCard />
      <Counter companiesCount={companiesCount} jobsCount={jobsCount} studentsCount={studentsCount} />
      <Howwork />
      <Message />
      <Footer />
    </div>
  );
}
