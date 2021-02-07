require('dotenv').config();

module.exports = {
  url: process.env.URL || "http://localhost:8080",
  lambdaUrl: (process.env.URL ? process.env.URL + '/.netlify/functions' : 'http://localhost:9000'),
  siteName: "Jens Kooij",
  siteDescription:
    "Website van Jens Kooij, een developer uit Vlaardingen met ervaring in Java, PHP, Bloomreach, JAMStack, Spring Boot, Software Architecture en meer. ",
  authorName: "Jens Kooij",
  twitterUsername: "jenskooij", // no `@`
  socialImage: "social.jpg",
  splashImage: "splash.jpg", // The same as social, only 512px
  appleTouchIcon: "appletouch.jpg"
};