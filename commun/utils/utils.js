import mongoose from "mongoose";
class Utils{
    static isValidObjectId(id) {
        return mongoose.Types.ObjectId.isValid(id);
    }
}

export default Utils;