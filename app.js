import express from "express";
import rateLimit from "express-rate-limit";
import userRoute from "./user/user.route.js";
import AppConfig from "./commun/config/app.config.js";
const serveur = express();
serveur.use(express.json());

// // Un delimiteur de nombre de requetes par IP
// const Ipautoriser = ["192.168.1.116"];
// const gardienReq = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: (req) => {
//     if (req.path.includes("/api/v1/user")) return 1000;
//     if (req.path.includes("/api")) return 100;
//     return 200;
//   },
//   skip: (req) => req.ip === Ipautoriser.includes(req.ip),
//   handler: (req, res) =>
//     res.status(429).json({ message: "Stop tu reviens dans 5 minutes" }),
// });

serveur.use(AppConfig.prefix + "/user", userRoute);

//serveur.use(gardienReq);

export default serveur;
