    import Joi from "joi";

    export const  userValidator = Joi.object({
        username: Joi.string().required().messages({
            "any.required": "field is required",
            "string.empty": "Field cannot be empty"
        })
    });