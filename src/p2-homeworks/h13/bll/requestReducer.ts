import { requestAPI } from './../dal/pequestAPI';
import { Dispatch } from "redux";

enum FormActionsCreratorType {
    CHANGE_IS_SHURE, 
    SET_ERROR_MSG,
};

export type FormType = {
    success: boolean,
};

type FormStateType = {
    form: FormType,
    errorMsg: string,
};

const initState: FormStateType = {
    form: {
        success: false,
    },

    errorMsg: '',
};

type ActionsReturnType = ReturnType<typeof switchIsShureAC>
                        | ReturnType<typeof setErrorMsgAC>;

type SendFormActionType = {
    type: FormActionsCreratorType.CHANGE_IS_SHURE,
    isShure: boolean,
};

type SetErrorMsgActionType = {
    type: FormActionsCreratorType.SET_ERROR_MSG,
    msg: string,
};

export const requestReducer = (state: FormStateType = initState, action: ActionsReturnType): FormStateType => {
    switch (action.type) {
        case FormActionsCreratorType.CHANGE_IS_SHURE: {
            return {
                    ...state,
                    form: {
                        ...state.form,
                        success: action.isShure,
                    },
                };
        }

        case FormActionsCreratorType.SET_ERROR_MSG: {
            return {
                    ...state,
                    errorMsg: action.msg,
                };
        }

        default: return state;
    }
};

export const switchIsShureAC = (isShure: boolean): SendFormActionType => {
    return {type: FormActionsCreratorType.CHANGE_IS_SHURE, isShure};
}; 

export const setErrorMsgAC = (msg: string): SetErrorMsgActionType => {
    return {type: FormActionsCreratorType.SET_ERROR_MSG, msg};
}; 

export const sendFormTC = (value: boolean) => {
    return (dispatch: Dispatch) => {
        const form: FormType = {
            success: value,
        };

        requestAPI.sendForm(form)
                    .then(data => {
                        dispatch(setErrorMsgAC(data.errorText));
                    })
                    .catch(err => {
                        dispatch(setErrorMsgAC(err.response.statusText));
                    });
    };
};