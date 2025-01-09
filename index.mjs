import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
dotenv.config();
//import conn.mjs to connect to db
import db from "./db/conn.mjs";

//import routes
import brainEntries from "./routes/brain.mjs";
import calendarEntries from "./routes/entry.mjs";
import todoEntries from "./routes/todo.mjs";
import users from "./routes/user.mjs";

//Enable CORS

const PORT = process.env.PORT || 5052;

const app = express();

//Middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.send("<h1>Calendar api</h1><ol>endpoints: <li>todos</li></ol>");
});

//fill in my endpoint routes - but they will be in their own folders
app.use("/api/braindump", brainEntries);
app.use("/api/calendar", calendarEntries);
app.use("/api/todo", todoEntries);
app.use("/api/users", users);
//default, catch all routes
app.get("/*", (req, res) => {
  res.redirect("/");
});

//Globar handling error
// Global error handling after the routes
app.use((err, _req, res, next) => {
  res.status(500).send("there was an issue on the server");
});

//Start express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
