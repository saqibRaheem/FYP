const express = require("express");
const router = new express.Router();
const Users = require("../dbmodels/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const SECRET_KEY = "hIHkthjUhuvfhuiyvnjy7yii9trefhon";
const { emailSender } = require("../emailSender/emailSender");
router.post("/signup", (req, res) => {
  const { stdId, uname, email, password, role, allow } = req.body;
  console.log(req.body);
  if (!email || !password || !role || !allow) {
    return res.status(400).send("Kindly fill all the fields");
  } else {
    Users.findOne({ email: email })
      .then(userExist => {
        if (userExist) {
          return res.status(400).send("User Already Exists");
        } else {
          const user = new Users({
            stdId,
            uname,
            email,
            password,
            role,
            allow
          });
          user
            .save()
            .then(() => {
              res.status(200).send("User register successfully");
              console.log("User register");
            })
            .catch(err => {
              res.status(500).send({ err: "Registration failed" });
            });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res.status(400).send("Kindly fill all the fields");
    } else {
      const login = await Users.findOne({ email: email });
      if (login) {
        const passMatch = await bcrypt.compare(password, login.password);
        console.log("login", req.headers.login);

        if (!passMatch) {
          res.status(400).send("Invalid credentials");
        } else {
          console.log("passMatch", login);
          if (!login.isBlock) {
            const token = jwt.sign(
              {
                id: login._id,
                email: login.email,
                role: login.role
              },
              "hIHkthjUhuvfhuiyvnjy7yii9trefhon"
            );
            res.cookie("jwtoken", token, {
              maxAge: 8640000000000,
              httpOnly: true,
            });
            const decodeData = jwt.verify(
              token,
              "hIHkthjUhuvfhuiyvnjy7yii9trefhon"
              );
            res
              .status(200)
              .send({ message: "Login successfully", data: login });
          } else {
            res
              .status(401)
              .send("You are not allow to login please contact to admin");
          }
        }
      } else {
        res.status(400).send("Invalid credentials");
      }
    }
  } catch (err) {
    res.status(400).send("Operations Failed");
    console.log(err)
  }
});

module.exports = router;
