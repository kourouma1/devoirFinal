import mongoose from "mongoose";

export default mongoose.connect("mongodb://localhost:27017/devoirNodjs")
.then(()=>{
    console.log("La connexion est bien etablie");
})
.catch((erro)=>{
    console.log("erreur de connexion a la bdd :",error);
    
});