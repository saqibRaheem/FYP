import React, { useState } from "react";
import "./SearchBar.scss";
export default function SearchBar({
  jobSearch,
  setFilterKeywords,
  searchJobs,
  filterKeywords
}) {
  return (
    <div className={`${jobSearch && "jobSearch"} ${"search-bar"}`}>
      <input
        type="text"
        placeholder="Search Keywords.."
        onChange={e => {
          setFilterKeywords(e.target.value);
        }}
        value={filterKeywords}
      />
      {/* <button onClick={()=>setFilterKeywords("")}>{jobSearch? "Clear"  :"Search"}</button> */}
    </div>
  );
}
