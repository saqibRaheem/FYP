const mongoose = require("mongoose");

var JobsSchema = new mongoose.Schema({
	email: {
		type: String,
	},
	title: {
		type: String,
	},
	img: {
		type: String,
	},
	education: {
		type: String,
	},
	compname: {
		type: String,
	},
	description: {
		type: String,
	},
	skills: {
		type: String,
	},
	website: {
		type: String,
	},
	experience: {
		type: String,
	},
	contact: {
		type: String,
	},
	jobtype: {
		type: String,
	},
	compid: {
		type: String,
	},
	novacancy: {
		type: Number,
	},
	address: {
		type: String,
	},
	salaryRange: {
		type: Number,
	},
	responsibilities: {
		type: Object,
	},
	appliedCandidates: {
		type: Array,
	},
	allow: {
		type: Boolean,
	},
	isBlock: {
		type: Boolean,
	},
	category: {
		type: String,
	},
	createdAt: {
		type: String,
	},
});

var Jobs = mongoose.model("Job", JobsSchema);
module.exports = Jobs;
