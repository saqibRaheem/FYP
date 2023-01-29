const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var UserSchema = new mongoose.Schema({
  stdId: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  uname: {
    type: String,
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  cgpa: {
    type: Number,
  },
  skills: {
    type: String,
  },
  igrade: {
    type: String,
  },
  mgrade: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  professionaltitle: {
    type: String,
  },
  school_educ: {
    type: String,
  },
  inter_educ: {
    type: String,
  },
  education: {
    type: String,
  },
  degree_program: {
    type: String,
  },
  bio: {
    type: String,
  },
  role: {
    type: String,
  },
  address: {
    type: String,
  },
  tworkingexp: {
    type: String,
  },
  website: {
    type: String,
  },
  aboutcompany: {
    type: String,
  },
  phone: {
    type: String,
  },
  qualification: {
    type: String,
  },
  dob: {
    type: String,
  },
  companyname: {
    type: String,
  },
  ownername: {
    type: String,
  },
  tagline: {
    type: String,
  },
  employeesno: {
    type: String,
  },
  category: {
    type: String,
  },
  workingtime: {
    type: String,
  },
  allow: {
    type: Boolean,
  },
  fb: {
    type: String,
  },
  twitter: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  google: {
    type: String,
  },
  work_exp: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  isBlock: {
    type: Boolean,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

var Student = mongoose.model("User", UserSchema);
module.exports = Student;
