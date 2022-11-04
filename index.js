const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const attendanceRouter= require("./routes/attendance")

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://shadythebeast:shady123@cluster0.c6lhtu9.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);
app.use(attendanceRouter);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection To the online Sua Database Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
