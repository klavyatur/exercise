const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// import routes
app.use(cors());

const PORT = 3000;

// parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
})

// bad route error handling. Will default back to index.html
app.use((req, res) => {
  console.log('this is a bad route');
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

// start server
app.listen(PORT, () => console.log(`Server running at ${PORT}`));

module.exports = app;