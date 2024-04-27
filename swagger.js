const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "E-commerce CMS",
    description: "E-commerce CMS REST API",
  },
  host: `localhost:${process.env.PORT}`,
};

const outputFile = "./swagger-output.json";
// assuming your routes are located in app.js
const routes = ["./index.js"];
swaggerAutogen(outputFile, routes, doc);
