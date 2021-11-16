const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();

const route = require("./router/route/toDoroutes");

const appMidlleware = (req, res, next) => {
  console.log("appMidlleware");
  next();
};

app.use(appMidlleware);
app.use(cors());
app.use(morgan("dev"));


app.use("/", route);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`our server run on port ${PORT}`);
});
