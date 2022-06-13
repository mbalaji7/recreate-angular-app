// Importing express and Body-parser
const express = require("express");
const BodyParser = require("body-parser");

// Use express to route incoming requests based on the path that is given

// Creating an instance of express
const app = express();

// Use body parser to analyse the incoming request that is in JSON
app.use(BodyParser.json());

// This is a method to accept all requests with specific headers
// This is also used to access request from different port numbers
app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATH, OPTIONS"
  );
});

// This will update the page with pre-populated posts
app.use("/api/posts", (request, response, next) => {
  const post = [
    {
      id: "falsssdassd",
      title: "This is the first title",
      content: "This is the first content",
    },
    {
      id: "falsssdasa",
      title: "This is the second title",
      content: "This is the second content",
    },
  ];
  return response.status(200).json({
    message: "Updating the posts...",
    posts: posts,
  });
});

module.exports = app;
