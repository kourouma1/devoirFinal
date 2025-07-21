import { Schema,model } from "mongoose";
import { string } from "yup";

const UserSchema = new Schema({
    nom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
);

const UserModel=model("User",UserSchema);
export default UserModel;