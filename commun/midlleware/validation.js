import yup from "yup";

const validationMiddleware = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate(req.body, { abortEarly: false });
            next();
        } catch (error) {
            res.status(400).json({
                message: "Erreur de validation : " + error.errors,
            });
        }
    };
}

export default validationMiddleware;
