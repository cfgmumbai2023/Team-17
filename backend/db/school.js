const moongoose=require("mongoose")
const {Schema}=moongoose;

const SchoolSchema=new Schema({
    name:{
        type:"string",
        required:true
    },
    address:{
        type:String
    }
    // teacher:[
    //     {
    //         type:Schema.Types.ObjectId,
    //         ref:"Teacher"
    //     }
    // ]
});
module.exports=moongoose.model("School",SchoolSchema)