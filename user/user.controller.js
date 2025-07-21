import UserService from "./user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
  static create = async (req, res) => {
    const { nom, email} = req.body;
    let { password } = req.body;
    try {
      password = await bcrypt.hash(password, 10); // Hash the password before saving
      console.log(password);
      const response = await UserService.create({ nom, email, password });
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  };

  static getAll = async (req, res) => {
    try {
      const response = await UserService.getAll();
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).send("erreur survenu lor de la recuperation.");
    }
  };

  static getById = async (req, res) => {
    const id = req.params.id;
    
    try {
      const response = await UserService.getById(id);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  static update = async(req,res)=>{
    const { nom, email } = req.body;
    const id = req.params.id
    try {
      const response = await UserService.update(id,{nom,email});
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static delete = async(req,res)=>{
    const id = req.params.id;
    
    try {
        const response = await UserService.delete(id);
        return res.status(200).json({message:"utilisateur bien supprimer"})
    } catch (error) {
        return res.status(500).json({ message:error.message });
    }
  }

  static auth = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserService.auth(email);
      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Mot de passe incorrect" });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      //console.log(token);
      return res.status(200).json({ user, token });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  };
}

export default UserController;
