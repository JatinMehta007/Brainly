"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = exports.ContenModel = exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://admin:jatin@cluster0.pbdobtk.mongodb.net/brainly");
const UserSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
});
exports.UserModel = mongoose_1.default.model('Users', UserSchema);
// const tagsSchema = new mongoose.Schema({
//     type : {type : String , required : true ,unique : true},
// })
// const Tag = mongoose.model('Tag', tagsSchema);
// module.exports = Tag;
const ContentSchema = new mongoose_1.default.Schema({
    link: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Tag' }],
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Users', required: true }
});
exports.ContenModel = mongoose_1.default.model('Content', ContentSchema);
const LinkSchema = new mongoose_1.default.Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Users', required: true, unique: true }
});
exports.LinkModel = mongoose_1.default.model("Links   ", LinkSchema);
