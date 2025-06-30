import * as nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASS,
  },
});

if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASS){
  console.log('Missing ENV entries EMAIL_USER and EMAIL_APP_PASS,sending emails wont work')
}

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    await transporter.sendMail({
      from: `"DSA Assessment AI" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
    console.log("Email sent to", to);
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};
