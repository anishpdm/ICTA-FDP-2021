var mongoose=require("mongoose")
var MongooseSchema=mongoose.Schema

var studentSchema=new MongooseSchema(
    {
    name:String,
    rollno:Number,
    admno:Number,
    college:String
}
)
var studentModel=mongoose.model("students",studentSchema)

module.exports={studentModel}