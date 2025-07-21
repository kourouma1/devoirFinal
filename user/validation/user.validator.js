import yup from "yup";

const userSchema = yup.object().shape({
   
    email: yup.string().email().required("L'email est requis"),
    nom: yup.string("Le nom doit contenir au moins 2 caractères").min(2,"La valeur doit contenir au moins 2 caractères").required("Le nom est requis"),
});

export default userSchema;
