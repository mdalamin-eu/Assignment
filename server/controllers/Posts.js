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

//AllPosts
exports.getAllPosts = async(req, res) => {
    const posts=await Post.find({});

    if(!posts){
        return res.status(404).sned({
            errors:[{title:"Post found error", detail:"Post not found"}]
        })
    }
    res.send(posts)
}