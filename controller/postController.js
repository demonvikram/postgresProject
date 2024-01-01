const Post=require("../model/posts")
const User=require("../model/user")

const createPost=async (req,res)=>{
    try {
        const { username , title , description } =req.body
        const newPost=await Post.create({
            username,
            title,
            description
        })

        if(!newPost){
            return res.status(401).json({
                message:'no post created',
            })
        }
        return res.status(200).json({
            message:'created successfully',
            post:newPost
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            error:error.message
        })
    }
}

module.exports={createPost}