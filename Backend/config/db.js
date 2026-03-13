const mongoose = require("mongoose");
const dns = require("dns");
const dnsPromises = dns.promises;

const connectDB = async () => {
  try {
    // Debug: show the MONGO_URI being used (mask the password)
    const rawUri = process.env.MONGO_URI || "";
    const maskedUri = rawUri.replace(/(mongodb(?:\+srv)?:\/\/[^:]+:)([^@]+)(@.*)/, (m, p1, p2, p3) => p1 + "***" + p3);
    console.log("Using MONGO_URI:", maskedUri);
    try {
      // Check percent-encoding validity in the userinfo portion
      const userInfoMatch = rawUri.match(/mongodb(?:\+srv)?:\/\/([^:]+):([^@]+)@/);
      if (userInfoMatch) {
        const encodedPwd = userInfoMatch[2];
        if (encodedPwd.includes("%") && !/%[0-9A-Fa-f]{2}/.test(encodedPwd)) {
          console.warn("MONGO_URI password contains '%' that is not percent-encoded correctly.");
        }
        try {
          // decodeURIComponent will throw if malformed
          decodeURIComponent(encodedPwd);
          console.log("Password percent-decoding OK (decoded for check only).");
        } catch (e) {
          console.warn("Password percent-decoding failed:", e.message);
        }
      }
    } catch (e) {
      console.warn("Error while inspecting MONGO_URI:", e && e.message ? e.message : e);
    }
    // Log which DNS servers Node is using for troubleshooting
    try {
      console.log('Node DNS servers:', dns.getServers());
    } catch (e) {
      console.warn('Failed to read dns.getServers():', e && e.message ? e.message : e);
    }

    // Attempt an SRV resolve from inside the running process. If it fails and
    // a fallback URI is provided in `MONGO_FALLBACK_URI`, use that instead.
    let uriToConnect = process.env.MONGO_URI;
    try {
      const srvHostMatch = (process.env.MONGO_URI || '').match(/mongodb(?:\+srv)?:\/\/[^@]+@([^\/\?]+)/);
      const srvName = srvHostMatch ? `_mongodb._tcp.${srvHostMatch[1]}` : '_mongodb._tcp.cluster0.uyw4ik6.mongodb.net';
      try {
        const records = await dnsPromises.resolveSrv(srvName);
        console.log('SRV resolve ok', records);
      } catch (srvErr) {
        console.warn('SRV resolve failed:', srvErr && srvErr.message ? srvErr.message : srvErr);
        if (process.env.MONGO_FALLBACK_URI) {
          uriToConnect = process.env.MONGO_FALLBACK_URI;
          console.log('Using MONGO_FALLBACK_URI from environment.');
        } else {
          console.log('No MONGO_FALLBACK_URI set — continuing with original MONGO_URI (may fail).');
        }
      }
    } catch (e) {
      console.warn('Error while attempting SRV check:', e && e.message ? e.message : e);
    }

    await mongoose.connect(uriToConnect, {
      serverSelectionTimeoutMS: 10000,
      family: 4,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection error:", error && error.message ? error.message : error || "<no error object>");
    try {
      console.error("Error details:", error || "<no error object>");
    } catch (logErr) {
      console.error("Failed to log error details:", logErr || "<no error object>");
    }
    // Do not exit the process here to allow debugging (nodemon will not stop).
    // If you want the app to exit on DB failure in production, re-enable process.exit(1).
  }
};

module.exports = connectDB;