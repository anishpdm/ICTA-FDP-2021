var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
var {studentModel}=require("./studentModel")

// Initialisation

var app=express()

// Middlewares
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://icta:icta@cluster0.ppfwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.get('/',(req,res)=>{

    res.send("hello")
})

app.get('/college',(req,res)=>{
    res.json({status:'success'})
})

app.post('/read',async(req,res)=>{
var studentData=req.body
var student=new studentModel(studentData)
var result=await student.save()
res.json(result)
})


app.get('/viewall',async(req,res)=>{
    var result=await studentModel.find()
    res.json(result)

})




app.listen(3000, ()=>{
    console.log("App is Running on http://localhost:3000")
} )




