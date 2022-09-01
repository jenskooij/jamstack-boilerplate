# A JAMStack boilerplate
Gratefully using 
- [Eleventy](https://11ty.dev)
- [Bulma](https://bulma.io)
- [Netlify (Lambda)](https://netlify.com)


## Usage
```
npm install
npm run serve
```
- This will serve your Eleventy site by default on `localhost:8080`
- This will serve your Netlify Lambda functions on `localhost:9000`


## File structure

Below are the main folders and files you need to know about when starting

```
.eleventy.js -- The config for Eleventy
└── src
    ├── clientside-js   -- Each *.js file in here will be bundled and compressed to script.js
    ├── lambda          -- Files exposing lambda functions when deploying on Netlify 
    ├── sass            -- Sass files, compile to style.css Has default configuration for Bulma
    └── views           -- Eleventy views folder
        ├── _data       -- Eleventy data folder 
        ├── _includes   -- Eleventy includes folder
        └── index.njk   -- Main starting point
```

Created by [Jens Kooij](https://jenskooij.nl)