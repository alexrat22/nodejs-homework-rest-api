const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, UKRNET_MAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: UKRNET_MAIL };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
