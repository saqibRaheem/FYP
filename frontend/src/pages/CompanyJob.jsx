import React, { useEffect, useState } from "react";
import "./Pages.scss";
import Job from "../components/Job/Job";
import { useSelector } from "react-redux";
import { getJob } from "../Lib/User.helper";
import Grid from "@mui/material/Grid";

const CompanyJob = () => {
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.status.user);
    useEffect(() => {
      getJob(setData, user._id);
    }, []);
  return (
    <Grid container>
      <Grid xs={12} className="getjob">
       {data?.map((values)=> <Job jobs={values} />) }
      </Grid>
    </Grid>
  );
};
export default CompanyJob;
