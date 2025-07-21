import Utils from "../commun/utils/utils.js";
import UserRepository from "./user.repository.js";

class UserService {
    static create = async(data)=>{
        if (!data.nom || !data.email || !data.password) {
            throw new Error("Nom, email et mot de passe sont requis");
        }
        if (UserRepository.getByEmail(data.email)) {
            throw new Error("Un utilisateur avec cet email existe déjà");
        }
        const response = UserRepository.create(data);
        return response;
    }

    static getAll = async()=>{
        const response = await UserRepository.getAll();
        return response;
    }
    static getById = async(id)=>{
         if (!Utils.isValidObjectId(id)) {
            throw new Error("L'id est invalide")
        }
        const response =await UserRepository.getById(id);
        if (!response) {
            throw new Error("L'utilisateur n'existe pas !");
        }
        return response;
    }
    static update = async(id,data)=>{
        if (!Utils.isValidObjectId(id)) {
            throw new Error("L'id est invalide")
        }
        const response = await UserRepository.update(id,data);
        return response;
    }
    static delete = async(id)=>{
        if (!Utils.isValidObjectId(id)) {
            throw new Error("L'id est invalide")
        }
        const isExite = await UserRepository.getById(id);
        if (!isExite) {
            throw new Error("l'utilisateur n'exist pas ou a deja ete supprimer !")
        }
        const response = await UserRepository.delete(id)
        return response;
    }

    // mettre en place la methode dauthentification
    static auth = async(email) => {
        if (!email) {
            throw new Error("Email requis");
        }
        const user = await UserRepository.getByEmail(email);
        if (!user) {
            throw new Error("Utilisateur non trouvé");
        }
        
        return user;
    }
}

export default UserService;