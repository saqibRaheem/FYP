import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import JobsCard from "../components/Job/Job";
import { getAllJobs } from "../Lib/User.helper";
import Grid from "@mui/material/Grid";
import Container from "../components/Container/Container";
const BlockJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterJobs, setFilterJobs] = useState([]);
  const [filterKeywords, setFilterKeywords] = useState("");
  useEffect(() => {
    getAllJobs(setJobs, setLoading);
  }, []);

  const filterArray = () =>
    jobs.filter(val => {
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
              <p>No Job Found</p>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {filterArray()?.map((job, index) => {
              return (
                <Grid item md={12} xs={12}>
                  {job.isBlock && <JobsCard jobs={job} />}
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </Container>
  );
};
export default BlockJobs;
