import React from 'react';
import {useForm} from "react-hook-form";
import {create} from "../services/api.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../validators/user.validator";

type FormProps = {
    username: string
}

const Form = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<FormProps>({mode: 'all', resolver: joiResolver(userValidator)});

    const customHandler = (formData: FormProps) => {
        console.log(formData)
        create(formData).then(responce => console.log(responce))
        reset()

    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input type="text" {...register('username')} />
                {errors.username && <p>{errors.username.message}</p>}
                <button> save</button>
            </form>
        </div>
    );
};

export default Form; 