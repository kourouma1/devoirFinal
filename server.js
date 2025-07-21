import "./commun/config/db.js" // IGNORE
import serveur from "./app.js";
import dotenv from "dotenv";
dotenv.config();

serveur.listen(process.env.PORT, (error) => {
  if (!error) {
    console.log("Le serveur est en ecoute sur le port 3000:");
  }
});
