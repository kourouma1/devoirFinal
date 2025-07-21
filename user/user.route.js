import { Router } from "express";
import UserController from "./user.controller.js";
import validationMiddleware from "../commun/midlleware/validation.js";
import userSchema from "./validation/user.validator.js";
import  verifyToken  from "../commun/midlleware/auth.verfie.js";

const router = Router();

router.get("/",UserController.getAll);
router.post("/",validationMiddleware(userSchema),UserController.create);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.update);
router.delete("/:id",UserController.delete);
router.post("/auth", UserController.auth);

export default router;