import { useEffect, useState } from "react";
import FormSlider from "../components/FormSlider/FormSlider";
import Footer from "../components/Footer/Footer";
import Grid from "@mui/material/Grid";
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import { getAllJobs } from "../Lib/User.helper.js";
import Loader from "../components/Loader/Loader";
import "./Pages.scss";
import JobsCard from "../components/Job/Job";
import SearchBar from "../components/SearchBar/SearchBar";
const Jobs = () => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filterJobs, setFilterJobs] = useState([]);
	const [filterKeywords, setFilterKeywords] = useState("");

	useEffect(() => {
		getAllJobs(setJobs, setLoading);
	}, []);

	const filterArray = () =>
		jobs.filter((val) => {
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

	if (loading) {
		return (
			<div className="loading">
				<Loader />
			</div>
		);
	}

	return (
		<div>
			<Header />
			<FormSlider text="Jobs" />
			<Container>
				<div>
					<SearchBar
						jobSearch
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
					<Grid container spacing={2} sx={{ mt: 5, mb: 5 }}>
						{filterArray()?.map((job, index) => {
							return (
								<Grid item md={12} xs={12}>
									<JobsCard jobs={job} />
								</Grid>
							);
						})}
					</Grid>
				)}
			</Container>
			<Footer />
		</div>
	);
};

export default Jobs;
