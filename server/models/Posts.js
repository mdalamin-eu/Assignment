const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const PostSchema = new Schema({

    text:{
        type:String,
        required:true
    },

    data:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("Post", PostSchema);