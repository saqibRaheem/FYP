// import { useEffect,useState } from "react";
// import JobCard from "../components/JobCard/JobCard";

// import {getusers} from "../Lib/User.helper"
// import UserCard from "../components/UserCard/UserCard"
// const Company = () => {
//   const [companies,setCompanies] = useState([])
//   useEffect(()=>{
//     getusers("student",setCompanies)
//   },[])
//   return (
//     <>
//     <Header/>
//       <FormSlider text="companies" />
//       <div style={{margin: "40px 0"}}>
//         <JobCard />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Company;

import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import JobsCard from "../components/Job/Job";
import { getusers } from "../Lib/User.helper";
import Grid from "@mui/material/Grid";
import Container from "../components/Container/Container";
import CompanyCard from "../components/UserCard/UserCard";
import Footer from "../components/Footer/Footer";
import FormSlider from "../components/FormSlider/FormSlider";
import Header from "../components/Header/Header";
const Company = () => {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState([]);

  const [loading, setLoading] = useState(false);
  const [filterJobs, setFilterJobs] = useState([]);
  const [filterKeywords, setFilterKeywords] = useState("");
  useEffect(() => {
    getusers("company", setCompany, setLoading);
  }, []);
  const filterArray = () =>
    company.filter(val => {
      if (filterKeywords === "") {
        return val;
      } else if (
        Object.values(val)
          ?.join(" ")
          ?.toLowerCase()
          ?.includes(filterKeywords?.toLowerCase())
      ) {
        return val;
      }
    });
  return (
    <>
      <Header />
      <FormSlider text="companies" />
      <Container>
        <div className="alljobs" style={{margin: "70px 0"}}>
          <div>
            <SearchBar
              setFilterKeywords={setFilterKeywords}
              filterKeywords={filterKeywords}
              jobSearch
            />
          </div>
          {!filterArray().length ? (
            <Grid container spacing={2} sx={{ mt: 5, mb: 5 }}>
              <Grid item md={12} xs={12} justifyContent="center" display="flex">
                <p>No User Found</p>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              {filterArray()?.map((company, index) => {
                return (
                  <Grid item md={12} xs={12}>
                    {<CompanyCard user={company}  company/>}
                  </Grid>
                );
              })}
            </Grid>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Company;
