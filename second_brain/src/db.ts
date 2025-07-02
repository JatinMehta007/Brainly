
import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb+srv://admin:jatin@cluster0.pbdobtk.mongodb.net/brainly");

const UserSchema = new mongoose.Schema({
    username : {type : String, required : true, unique : true},
    password : {type : String , required : true, },
});

export const UserModel = mongoose.model('Users', UserSchema);

// const tagsSchema = new mongoose.Schema({
//     type : {type : String , required : true ,unique : true},
// })

// const Tag = mongoose.model('Tag', tagsSchema);
// module.exports = Tag;



const ContentSchema = new mongoose.Schema({
    link  : { type : String, required : true},
    type :  { type : String , required : true },
    title : { type : String , required : true},
    tags  : [{ type : mongoose.Schema.Types.ObjectId, ref : 'Tag'}],
    userId : {type : mongoose.Schema.Types.ObjectId, ref : 'Users' , required : true}
})
 
export const ContenModel = mongoose.model('Content', ContentSchema);

const LinkSchema = new  mongoose.Schema({
    hash : { type : String, required : true },
    userId : {type : mongoose.Schema.Types.ObjectId, ref : 'Users', required : true, unique : true}
})

export const LinkModel = mongoose.model("Links   ", LinkSchema); 