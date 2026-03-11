const transporter = require("../config/gmail");

const sendEmail = async (data) => {
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: process.env.EMAIL_USER,
		replyTo: data.email,
		subject: `Portfolio Contact: ${data.subject || "No subject"} - ${data.name}`,
		text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
		html: `
			<p><strong>Name:</strong> ${data.name}</p>
			<p><strong>Email:</strong> ${data.email}</p>
			<p><strong>Message:</strong></p>
			<p>${String(data.message).replace(/\n/g, "<br/>")}</p>
		`,
	};

	try {
		const info = await transporter.sendMail(mailOptions);
		console.log("Email sent:", info.messageId || info.response || info);
	} catch (error) {
		console.error("sendEmail error:", error);
		throw error;
	}
};

module.exports = sendEmail;