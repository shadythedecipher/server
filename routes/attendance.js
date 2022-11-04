const express= require("express");
const Attendance= require("../models/attendance");

const attendanceRouter =express.Router();

attendanceRouter.post("/api/takeAttendance",async(req ,res)=>{
    const { name, Classname, Subjectname,StatusOFAttendance } = req.body;
    let attendance= new Attendance({
        name,
        Classname,
        Subjectname,
        StatusOFAttendance
    });  
     attendance.save(attendance);
 
    console.log(attendance);
      return res.send("hi");
});
module.exports= attendanceRouter;