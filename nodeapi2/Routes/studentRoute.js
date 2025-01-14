const express = require('express') //import package
const studentRouter = express.Router({strict:true, caseSensitive: true}) // a separate route table to create and handle our api's
const studentDataModel = require('../DataModel/StudentDataModel');


studentRouter.post("/apistudent/signinup",(req, res)=>{

    let studentObj = req.body; //student object passed in the body of sigininup api
    console.log("studentObj", studentObj)

    studentDataModel.findOne({studentName:req.body.studentName}).then((existingStudent)=>{
        
        if(existingStudent){//student exists so send the student details - sign in
            
            res.send(existingStudent)            
        }
        else//student doesn't exists so create one and create one - sign up
        {
            let studentSchemaObj = new studentDataModel(req.body);//for new student

            studentSchemaObj.save().then((newStudent)=>{//will get _id once document is created
                console.log("successful signup ", newStudent);
                res.send(newStudent) 
            }).catch((err1)=>{
                console.log("err signup", err1);
                res.send("error while sign up")
            })
        }        

    }).catch((error)=>{
        console.log("Error while fetching existing student", error)
        res.send("Error while fetching existing student")
    })   
})

studentRouter.get("/apistudent/students",(req, res)=>{

    studentDataModel.find()//find all the students from students collection and send back
    .then((students)=>{
        res.send(students)
    })
    .catch((errr)=>{
        console.log(errr)
        res.send("Error while fetching students")
    })
});

module.exports = studentRouter;