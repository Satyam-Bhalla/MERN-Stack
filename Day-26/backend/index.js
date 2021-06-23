// Import Statements
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const HttpError = require("./utils/http-error");

// Configuration statements
const port = 3333;
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Role"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// Methods
app.get("/list", (req, res) => {
  res.status(200).send(
    JSON.stringify({
      list: [
        { id: 1, item: "Fruits" },
        { id: 2, item: "Vegetables" },
      ],
    })
  );
});

app.post("/list", (req, res) => {
  res.status(200).send({
    list: [
      { id: 1, item: "bread" },
      { id: 2, item: "grapes" },
    ],
  });
});

// Error Handling
app.use((req, res, next) => {
  const error = new HttpError("Page not found", 404);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code);
  res.json({
    message: error.message || "Unknown error occured",
    code: error.code,
  });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
