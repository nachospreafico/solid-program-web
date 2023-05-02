const admin = require("firebase-admin");
const axios = require("axios");
const serviceAccount = require("./solid-program-firebase-admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = {
  admin,
  axios,
};
