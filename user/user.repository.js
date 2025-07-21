import UserModel from "./models/user.model.js";

class UserRepository {
  static create = async (data) => {
    const response = await UserModel.create(data);
    return response;
  };
  static getAll = async () => {
    const response = await UserModel.find();
    return response;
  };
  static getById = async (id) => {
    const response = await UserModel.findById(id);
    return response;
  };
  static update = async (id, data) => {
    const response = await UserModel.updateOne({ _id: id }, data);
    return response;
  };
  static delete = async (id) => {
    const response = await UserModel.findByIdAndDelete(id);
    return response;
  };
  static getByEmail = async (email) => {
    const response = await UserModel.findOne({ email });
    return response;
  };
}

export default UserRepository;
