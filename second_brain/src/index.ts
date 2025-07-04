
import express from "express";
import jwt from "jsonwebtoken";
import { ContenModel, LinkModel, UserModel } from "./db";
import { JWT_PASSWORD } from './config';
import { UserMiddleware } from './middleware';
import { random } from "./utils";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); 


app.post("/api/v1/signup" , async (req,res)=>{
    
    const username = req.body.username;
    const password = req.body.password;
    try{
        await UserModel.create({
            username,
            password
        })
        res.json({
            message : "user created"
        })
    } catch(error){
        res.json({
            message: "error occur"
        })
    }
})


app.post("/api/v1/signin", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const existingUser  = await UserModel.findOne({
        username,
        password 
    })
    if(existingUser){
        const token  = jwt.sign({
            id : existingUser._id
        },JWT_PASSWORD)
        res.json({
            token
        })
    } else{
        res.status(403).json({
            message : "incorrect credential"
        })
    }

})


app.post("/api/v1/content",UserMiddleware  ,async (req,res)=>{
    const link = req.body.link;
    const type = req.body.type;
    await ContenModel.create({
        link, 
        type,
        title : req.body.title,
        //@ts-ignore
        userId : req.userId,
        tags : []
    })

     res.json({
        message : "content added"
    })
})


app.get("/api/v1/content",UserMiddleware, async (req,res)=>{
    // @ts-ignore
    const userId = req.userId;
    const content = await ContenModel.find({
        userId : userId
    }).populate("userId","username")   // this populate was give the data of the user also which wrtie the contend 

    res.json({
        content
    })
})


app.delete("/api/v1/content",UserMiddleware,async (req,res)=>{
    //@ts-ignore
    const ContentId = req.ContentId;
    await ContenModel.deleteMany({
       ContentId : ContentId,
       //@ts-ignore
       userId : req.userId
    })
     res.json({
        message : "deleted"
     })
})

app.post("/api/v1/brain/share" , UserMiddleware, async (req,res)=>{
    const share = req.body.share;
     if(share){
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId : req.userId
        });

        if(existingLink){
            res.json({
                hash :existingLink.hash
            })
            return;
        }

       const hash = random(10);

       await LinkModel.create({
            // @ts-ignore
            userId : req.userId,
            hash : hash
        })
        res.json({
              hash
        })

     } else{

       await LinkModel.deleteOne({
        // @ts-ignore
            userId: req.userId
        })
        res.json({
        message : "remove link"
     })
     }

     res.json({
        message : "updated shared link"
     })
})


app.get("/api/v1/brain/:shareLink", async (req,res)=>{
     const hash = req.params.shareLink;
      
    const link = await LinkModel.findOne({
         hash
     })

     if(!link){
        res.status(411).json({
            message : "Sorry incorrect input"
        })
        return;
     }

     //userID
     const content = await ContenModel.find({
        userId : link.userId
     })
     const user = await UserModel.findOne({
        _id : link.userId,
     })
     if(!user){
        res.status(411).json({
            message : "user not found , erorr was ideally happen"
        })
        return;
     }

     res.json({
        username : user.username,
        content : content 
     })
})

app.listen(3000);