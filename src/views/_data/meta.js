require('dotenv').config();

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  lambdaUrl: (process.env.URL ? process.env.URL + '/.netlify/functions' : 'http://localhost:9000'),
  siteName: "Site Name",
  siteDescription:
    "Description",
  authorName: "Jens Kooij",
  twitterUsername: "jenskooij", // no `@`
  socialImage: "favicons/social.png",
  favicon: "favicons/favicon.png",
  faviconIco: "favicons/favicon.ico",
  tileColor: "#50333b"
};