var nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "saininks2013@gmail.com",
    pass: "",
  },
});
var mailOptions = {
  from: "saininks2013@gmail.com",
  to: "saininks2013@gmail.com",
  subject: "test node  mail",
  test: "hello saini bhai how r u?",
};
transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("mail has been send", info.response);
  }
});
