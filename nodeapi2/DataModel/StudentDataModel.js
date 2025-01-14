let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;
mongooseObj.connect("mongodb://127.0.0.1/mernstack19"); 
let studentSchema = new schemaObj({
    studentName : {type: String, required : true},
    password: {type:String, required : true},
    email: String,
    mobile: Number
}
)
let StudentModel = mongooseObj.model("student", studentSchema);
module.exports = StudentModel;