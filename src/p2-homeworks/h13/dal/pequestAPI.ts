import axios from 'axios';
import { FormType } from "../bll/requestReducer";

const requestInstance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
});

export const requestAPI = {
    sendForm(form: FormType){
        return requestInstance.post('', form)
                                .then(res => res.data);
    },
};