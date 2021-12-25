import { requestAPI } from './../dal/pequestAPI';
import { Dispatch } from "redux";

enum FormActionsCreratorType {
    CHANGE_IS_SHURE, 
    SET_ERROR_MSG,
    SET_ERROR_INFO,
};

export type FormType = {
    success: boolean,
};

type FormStateType = {
    form: FormType,
    errorMsg: string,
    errorInfo: string,
};

const initState: FormStateType = {
    form: {
        success: false,
    },

    errorMsg: '',
    errorInfo: '',
};

type ActionsReturnType = ReturnType<typeof switchIsShureAC>
                        | ReturnType<typeof setErrorMsgAC>
                        | ReturnType<typeof setErrorInfoAC>;

type SendFormActionType = {
    type: FormActionsCreratorType.CHANGE_IS_SHURE,
    isShure: boolean,
};

type SetErrorMsgActionType = {
    type: FormActionsCreratorType.SET_ERROR_MSG,
    msg: string,
};

type SetErrorInfoActionType = {
    type: FormActionsCreratorType.SET_ERROR_INFO,
    info: string,
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
                    errorMsg: '',
                    errorInfo: '',
                };
        }

        case FormActionsCreratorType.SET_ERROR_MSG: {
            return {
                    ...state,
                    errorMsg: action.msg,
                };
        }

        case FormActionsCreratorType.SET_ERROR_INFO: {
            return {
                    ...state,
                    errorInfo: action.info,
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

export const setErrorInfoAC = (info: string): SetErrorInfoActionType => {
    return {type: FormActionsCreratorType.SET_ERROR_INFO, info};
}; 

export const sendFormTC = (value: boolean) => {
    return (dispatch: Dispatch) => {
        const form: FormType = {
            success: value,
        };

        requestAPI.sendForm(form)
                    .then(data => {
                        dispatch(setErrorMsgAC(data.errorText));

                        dispatch(setErrorInfoAC(data.info));
                    })
                    .catch(err => {
                        dispatch(setErrorMsgAC(err.response.data.errorText));

                        dispatch(setErrorInfoAC(err.response.data.info));
                    });
    };
};