// const express = require("express");
// // const mongoose = require("mongoose");
// const authRouter = require("./routes/auth");
// const attendanceRouter= require("./routes/attendance")

// // INIT
// const PORT = process.env.PORT || 7000;
// const app = express();
// // const DB =
// //   "mongodb+srv://shadythebeast:shady123@cluster0.c6lhtu9.mongodb.net/?retryWrites=true&w=majority";
// authRouter.get("/", async (req, res) => {

//   return res.status(700).json({msg:"hi there"});
// });
// // middleware
// app.use(express.json());
// app.use(authRouter);
// app.use(attendanceRouter);
const df = "juma";
console.log("jusdmdfcvvcvgdga");



const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hellofgf Wocrld');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});



// mongoose
//   .connect(DB)
//   .then(() => {
//     console.log("Connection To the online Sua Database Successful");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// app.listen(PORT, "0.0.0.0", () => {
//   console.log(`connected afdt port ${PORT}`);
// });
