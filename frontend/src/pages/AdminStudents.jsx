import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import StudentCard from "../components/UserCard/UserCard";
import { getusers } from "../Lib/User.helper";
import Grid from "@mui/material/Grid";
import Container from "../components/Container/Container";

const AdminStudent = () => {
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(false);
  const [filterJobs, setFilterJobs] = useState([]);
  const [filterKeywords, setFilterKeywords] = useState("");
  useEffect(() => {
    getusers("student", setUser, setLoading);
  }, []);
  const filterArray = () =>
    user.filter((val) => {
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
            {filterArray()?.map((user, index) => {
              return (
                <Grid item md={12} xs={12}>
                  {!user.isBlock && <StudentCard user={user} />}
                </Grid>
              );
            })}
          </Grid>
        )}
      </div>
    </Container>
  );
};
export default AdminStudent;
