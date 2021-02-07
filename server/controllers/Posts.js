const Post = require('../models/Posts')

exports.post= async(req, res) => {
    try{
        newPost= new Post({
            text:req.body.text,
        });
        await newPost.save();
        res.send(newPost)
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Something went wrong");
    }
}