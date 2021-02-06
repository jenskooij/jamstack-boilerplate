require('dotenv').config();

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  lambdaUrl: (process.env.URL ? process.env.URL + '/.netlify/functions' : 'http://localhost:9000'),
  siteName: "Site Name",
  siteDescription:
    "Description",
  authorName: "Jens Kooij",
  twitterUsername: "jenskooij", // no `@`
  socialImage: "social.jpg",
  splashImage: "splash.jpg", // The same as social, only 512px
  appleTouchIcon: "appletouch.jpg"
};