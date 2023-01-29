const express = require("express");
const router = new express.Router();
const Users = require("../dbmodels/users");
const Job = require("../dbmodels/jobs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { emailSender } = require("../emailSender/emailSender");
const SECRET_KEY = "hIHkthjUhuvfhuiyvnjy7yii9trefhon";

router.get("/getAllJobs", async (req, res) => {
  const jobs = await Job.find();
  if (!jobs) {
    throw new Error("No job found ");
  } else {
    res.status(200).send(jobs);
  }
});
router.get("/getuserdata/:role", async (req, res) => {
  const { role } = req.params;
  const user = await Users.find({ role: role });
  if (!user) {
    res.send(err, { message: "data is not available" });
  } else {
    res.status(200).send(user);
  }
});
router.get("/getJobById/:id", async (req, res) => {
  const job = await Job.find({ _id: req.params.id });
  if (!job) {
    throw new Error("No job found ");
  } else {
    res.status(200).send(job);
  }
});

router.get("/getJobByLimit", async (req, res) => {
  const job = await Job.find().skip(0).limit(4);
  if (!job) {
    throw new Error("No job found ");
  } else {
    res.status(200).send(job);
  }
});

router.post("/contactUs", async (req, res) => {
  const { email, message, name } = req.body;
  if (!email || !message || !name) return;
  try {
    const success = await emailSender(email, message, name, res);
    if (success) {
      res.status(200).send("Successfully sent");
    }
  } catch (er) {
    throw new Error("No job found ");
  }
});

router.get("/getJobsLenght", async (req, res) => {
  try {
    const totalJobs = await Job.find();
    res.status(200).send({count:totalJobs.length});
  } catch (er) {
    throw new Error("No job found ");
  }
});

router.get("/getStudentsLenght", async (req, res) => {
  try {
    const totalStudents = await Users.find({role: "student"});
    res.status(200).send({count:totalStudents.length});
  } catch (er) {
    throw new Error("No job found ");
  }
});

router.get("/getCompaniesLenght", async (req, res) => {
  try {
    const totalCompanies = await Users.find({role: "company"});
    res.status(200).send({count:totalCompanies.length});
  } catch (er) {
    throw new Error("No job found ");
  }
});
module.exports = router;
