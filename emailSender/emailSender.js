var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "sheikhahmerali75@gmail.com",
    pass: ""
  },
  secure: true
});
exports.emailSender = (email, message, name, res) => {
  console.log("running email");
  const mailData = {
    from: email, // sender address
    to: "sheikhahmerali75@gmail.com", // list of receivers
    subject: `You have recieved a mail from ${name}`,
    text: "That was easy!",
    html: `<b>Hello! </b><br>${message} <br/>`
    // html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
  };
  const mailData1 = {
    from: "sheikhahmerali75@gmail.com", // sender address
    to: email, // list of receivers
    subject: `You have recieved a mail from DIHE`,
    text: "That was easy!",
    html: `<b>Hello! </b><br>Thanks for contacting us, we will back to you soon <br/>`
    // html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
  };
  transporter.sendMail(mailData, function(err, info) {
    if (err) console.log(err);
    else {
      console.log(info);
      transporter.sendMail(mailData1, function(err, info) {
        if (err) console.log(err);
        else {
          console.log(info);
          res.status(200).send("Successfully sent");
        }
      });
    }
  });
};
