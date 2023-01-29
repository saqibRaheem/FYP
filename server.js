const express = require("express");
const cors = require("cors");
const cookie = require("cookie-parser");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const jwt = require("jsonwebtoken");
const Users = require("./dbmodels/users");
const Job = require("./dbmodels/jobs");
const app = express();
require("./dbconn/dbconn");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const authRoutes = require("./auth/authroutes");
const userRoutes = require("./userroutes/user-routes");
// dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 4000;
const SECRET_KEY = "hIHkthjUhuvfhuiyvnjy7yii9trefhon";

app.use(cookie());
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://diherecruitment.herokuapp.com",
      "https://fyp-2-dihe-crm.vercel.app",
      "http://diherecruitment.surge.sh"
    ],
    credentials: true
  })
);
app.use(morgan("dev"));


app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/", express.static(path.resolve(path.join(__dirname, "./frontend/build"))));
app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname + "/frontend/build/index.html")
  );
});
app.use(function(req, res, next) {
  console.log(req.cookies.jwtoken);
  if (!req.cookies.jwtoken) {
    res.status(401).send("include http-only credentials with every request");
    return;
  }
  jwt.verify(req.cookies.jwtoken,     "hIHkthjUhuvfhuiyvnjy7yii9trefhon", function(err, decodedData) {
    if (!err) {
      const issueDate = decodedData.iat * 1000;
      const nowDate = new Date().getTime();
      const diff = nowDate - issueDate;
      console.log("diff", diff);
      if (diff > 30000000000000) {
        res.status(401).send("token expired");
      } else {
        var token = jwt.sign(
          {
            id: decodedData.id,
            email: decodedData.email,
            role: decodedData.role
          },
          "hIHkthjUhuvfhuiyvnjy7yii9trefhon"
        );

        res.cookie("jwtoken", token, {
          maxAge: 8640000000000,
          httpOnly: true
        });
        req.body.jwtoken = decodedData;
        req.headers.jwtoken = decodedData;
        next();
      }
    } else {
      res.status(401).send("invalid token");
    }
  });
});

// app.use(express.static(path.join(__dirname, "frontend", "build")));
// app.use(express.static("/frontend/build"));

// app.get("*", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
// });

app.post("/userupdate", async (req, res) => {
  try {
    const user = req.body.id;
    if (!user) {
      return res.status(400).send("id is not present");
    } else {
      const upadateUser = await Users.findByIdAndUpdate(user, req.body, {
        new: true
      });
      res.status(200).send(upadateUser);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});
app.get("/profile", (req, res) => {
  console.log("profile", req.body.jwtoken);
  Users.findById(
    req.body.jwtoken.id,
    "stdId tworkingexp email work_exp password firstname lastname uname age profilePic gender cgpa skills dob igrade mgrade imageURL professionaltitle school_educ inter_educ education degree_program bio role  website phone qualification  allow fb twitter linkedin google address category workingtime employeesno companyname ownername tagline aboutcompany",
    function(err, doc) {
      if (!err) {
        res.send({
          status: 200,
          profile: doc
        });
      } else {
        res.status(500).send({
          message: "ervser error"
        });
      }
    }
  );
});

app.post("/changePassword", async (req, res) => {
  let { newPassword, oldPassword } = req.body;
  if (!newPassword || !oldPassword) {
    return res.status(400).send("Please Fill All Required Fields");
  }
  try {
    const user = await Users.findById(req.body.jwtoken.id, "email password");
    if (user) {
      const passMatch = await bcrypt.compare(oldPassword, user.password);
      if (passMatch) {
        const bycrptPass = await bcrypt.hash(newPassword, 12);
        const updatePass = await Users.updateOne(
          { email: user.email },
          { password: bycrptPass }
        );
        if (updatePass) {
          res.status(200).send("Password successfully updated");
        } else {
          res.status(400).send("Something went wrong");
        }
      } else {
        res.status(400).send("Old password is wrong");
      }
    } else {
      res.status(400).send("User not found");
    }
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

app.post("/updateProfilePic", async (req, res) => {
  let { profilePic } = req.body;
  console.log("profile pic", profilePic);
  if (!profilePic) {
    return res.status(400).send("Please Fill All Required Fields");
  }
  try {
    const user = await Users.findById(req.body.jwtoken.id, "email password");
    if (user) {
      const updatePic = await Users.updateOne(
        { email: user.email },
        { profilePic: profilePic }
      );
      if (updatePic) {
        res.status(200).send("Profile pic successfully updated");
      } else {
        res.status(400).send("Something went wrong");
      }
    } else {
      res.status(400).send("User not found");
    }
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
});

app.post("/logout", (req, res) => {
  // res.clearCookie("jwtoken");
  // res.send("JWT Clear");
  res.cookie("jToken", " ", {
    maxAge: 86_400_000,
    httpOnly: true,
  });
  res.status(200).send({
    message: "Logout Succesfully !",
  });
});

app.post("/postjob", async (req, res) => {
  const {
    email,
    title,
    img,
    compname,
    description,
    skills,
    website,
    experience,
    contact,
    jobtype,
    compid,
    novacancy,
    address,
    salaryRange,
    education,
    responsibilities,
    allow,
    category
  } = req.body;
  const user = await new Job({
    email,
    title,
    img,
    compname,
    description,
    skills,
    website,
    experience,
    contact,
    jobtype,
    compid,
    novacancy,
    address,
    salaryRange,
    education,
    responsibilities,
    allow,
    category,
    createdAt: new Date()
  });
  user
    .save()
    .then(() => {
      res.send({ status: 200, message: "Job created" });
    })
    .catch(err => {
      console.log("err", err);
      res.status(500).send({ err: "Registration failed" });
    });
});

app.get("/getjob/:compid", async (req, res) => {
  const { compid } = req.params;
  console.log("compid", compid);
  const jobs = await Job.find({ compid: compid });
  if (!jobs) {
    res.send(err, { message: "data is not available" });
  } else {
    res.send({
      data: jobs,
      status: 200
    });
  }
});

app.get("/getStudentById/:id", async (req, res) => {
  const student = await Users.find({ _id: req.params.id });
  if (!student) {
    throw new Error("No student found ");
  } else {
    res.status(200).send(student);
  }
});
app.post("/applyForJob", async (req, res) => {
  const { userId, jobId } = req.body;
  if (!userId) {
    return res.status(400).send("User Id is required");
  }
  const job = await Job.findByIdAndUpdate(jobId, { appliedCandidates: userId });

  if (!job) {
    throw new Error("No job found ");
  } else {
    res.status(200).send("Applied");
  }
});

app.post("/blockJob", async (req, res) => {
  const { isBlock, jobId } = req.body;
  if (!jobId) {
    return res.status(400).send("User Id is required");
  }
  const job = await Job.findByIdAndUpdate(jobId, { isBlock: isBlock });

  if (!job) {
    throw new Error("No job found ");
  } else {
    res.status(200).send("updated");
  }
});

app.post("/blockUser", async (req, res) => {
  const { isBlock, userId } = req.body;
  if (!userId) {
    return res.status(400).send("User Id is required");
  }
  const job = await Users.findByIdAndUpdate(userId, { isBlock: isBlock });

  if (!job) {
    throw new Error("No user found ");
  } else {
    res.status(200).send("updated");
  }
});

app.listen(port, () => {
  console.log("server is running");
});
