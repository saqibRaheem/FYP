import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import JobsCard from "../components/Job/Job";
import { getusers } from "../Lib/User.helper";
import Grid from "@mui/material/Grid";
import Container from "../components/Container/Container";
import CompanyCard from "../components/UserCard/UserCard";

const AdminCompany = () => {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState([]);

  const [loading, setLoading] = useState(false);
  const [filterJobs, setFilterJobs] = useState([]);
  const [filterKeywords, setFilterKeywords] = useState("");
  useEffect(() => {
    getusers("company", setCompany, setLoading);
  }, []);

  const filterArray = () =>
    company.filter((val) => {
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
    <Container>
      <div className="alljobs">
        <div>
          <SearchBar
            setFilterKeywords={setFilterKeywords}
            filterKeywords={filterKeywords}
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
                  {!company.isBlock && <CompanyCard user={company} />}
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </Container>
  );
};
export default AdminCompany;
