require('dotenv').config();

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  lambdaUrl: (process.env.URL ? process.env.URL + '/.netlify/functions' : 'http://localhost:9000'),
  siteName: "Site Name",
  siteDescription:
    "Description",
  authorName: "Jens Kooij",
  twitterUsername: "jenskooij", // no `@`
  socialImage: "img/favicons/social.png",
  favicon: "img/favicons/favicon.png",
  faviconIco: "img/favicons/favicon.ico",
  tileColor: "#50333b"
};