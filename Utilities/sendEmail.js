const nodemailer = require('nodemailer');

const contactUsForm = async (req, res, next) => {
    try {
      const name = req.body.name;
      const email = req.body.email;
      const message = req.body.message;
      if (name && email && message) {
        const { SENDER_EMAIL, SENDER_PASSWORD } = process.env;
        let authData = nodemailer.createTransport({
          // host: "smtp.gmail.com",
          host: "smtp.zoho.in",
          port: 465,
          secure: true,
          auth: {
            user: SENDER_EMAIL,
            pass: SENDER_PASSWORD,
          },
        });
        authData
          .sendMail({
            from: "",
            to: "",
            subject: "Contact Us - Query",
            text: "Some testing sample",
            html:
              "<h3>Name:- " +
              `${name}` +
              "</h3>" +
              "<h3>Email:- " +
              `${email}` +
              "</h3>" +
              "<h3>Message:-" +
              `${message}` +
              "</h3>",
          })
          .then((result) => {
            res.status(200).json({
              result: "We will contact you soon",
            });
          })
          .catch((err) => next(err));
      } else {
        res.status(401).json({
          message: "Some error occured"
        });
      }
    } catch (err) {
      next(err);
    }
  };