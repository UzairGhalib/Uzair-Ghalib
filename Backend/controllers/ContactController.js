const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

exports.submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Save contact to DB
  try {
    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();
  } catch (error) {
    console.error("DB SAVE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Database save error",
      error: error.message,
    });
  }

  // Send notification email
  try {
    await sendEmail({ name, email, subject, message });
  } catch (error) {
    console.error("EMAIL SEND ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Email sending failed",
      error: error.message,
    });
  }

  return res.status(200).json({
    success: true,
    message: "Message sent successfully",
  });
};

exports.submitVisit = async (req, res) => {
  const { path, referrer } = req.body || {};

  const visitInfo = {
    name: "Visitor",
    email: "noreply@portfolio",
    subject: `Portfolio visit: ${path || "/"}`,
    message: `A visitor opened your portfolio.\nPath: ${path || "/"}\nReferrer: ${referrer || "-"}\nIP: ${req.ip}\nUser-Agent: ${req.get(
      "user-agent"
    )}`,
  };

  try {
    await sendEmail(visitInfo);
  } catch (error) {
    console.error("VISIT EMAIL ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Visit notification failed",
      error: error.message,
    });
  }

  return res.status(200).json({ success: true, message: "Visit notified" });
};