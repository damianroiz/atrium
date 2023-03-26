const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});

module.exports = transporter;

router.post("/contact", (req, res) => {
  try {
    const name = req.body.name;
    const telephone = req.body.telephone
    const email = req.body.email;
    const message = req.body.message;
    const emailTemplate = {
      from: name,
      to: "**************@gmail.com",
      subject: "Contact Form Submission",
      html: `
      <h3>E-mail sent from website</h3>
      <p>Name: ${name}</p>
              <p>Telephone: ${telephone}</p>
              <p>Email: ${email}</p>
              <p>Message: ${message}</p>
            `
  };
  
  transporter.sendMail(emailTemplate, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send({
        sucess: false,
        message: 'Something went wrong. Please try again',
      });
    } else {
      console.log("Ready to Send")
      res.send({ 
        success: true,
        message: 'Thank you for contacting us. We will get back to you shortly' 
      });
    }
  });
} catch (error) {
  
  res.status(500).send({
    sucess: false,
    message: 'Something went wrong. Try again later'
  });
}

});
