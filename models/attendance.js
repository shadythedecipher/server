const mongoose = require("mongoose");

const attendanceSchema= mongoose.Schema({

    name: {
        required: true,
        type: String,
        trim: true,
        default: "INF/D/2019/0000",
      },
      Classname: {
        required: true,
        type: String,
        trim: true,
      },
       Subjectname: {
        required: true,
        type: String,
        trim: true,
      },
        StatusOFAttendance: {
        required: true,
        type: String,
        trim: true,
      },
      
      
})
const Attendance= mongoose.model("Attendance", attendanceSchema);
module.exports=Attendance;