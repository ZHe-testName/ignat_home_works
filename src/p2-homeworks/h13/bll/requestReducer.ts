import { requestAPI } from './../dal/pequestAPI';
import { Dispatch } from "redux";

const SWTCH_IS_SHURE = 'SWTCH_IS_SHURE', 
    SET_ERROR_MSG = 'SET_ERROR_MSG',
    SET_ERROR_INFO = 'SET_ERROR_INFO';

export type FormType = {
    success: boolean,
};

type FormStateType = {
    form?: FormType,
    success: boolean,
    errorMsg: string,
    errorInfo: string,
};

const initState: FormStateType = {
    // form: {
    //     success: false,
    // },

    success: false,

    errorMsg: '',
    errorInfo: '',
};

type ActionsReturnType = ReturnType<typeof switchIsShureAC>
                        & ReturnType<typeof setErrorMsgAC>
                        & ReturnType<typeof setErrorInfoAC>;

type SendFormActionType = {
    type: string,
    isShure: boolean,
};

type SetErrorMsgActionType = {
    type: string,
    msg: string,
};

type SetErrorInfoActionType = {
    type: string,
    info: string,
};

export const requestFormReducer = (state: FormStateType = initState, action: ActionsReturnType): FormStateType => {
    switch (action.type){
        case SWTCH_IS_SHURE: {
            return {
                ...state,
                success: action.isShure,
            };
        }

        case SET_ERROR_MSG: {
            return {
                ...state,
                errorMsg: action.msg,
            };
        }

        case SET_ERROR_INFO: {
            return {
                ...state,
                errorInfo: action.info,
            };
        }

        default: {
            return state;
        }
    };
};

export const switchIsShureAC = (isShure: boolean): SendFormActionType => {
    return {type: SWTCH_IS_SHURE, isShure} as const;
}; 

export const setErrorMsgAC = (msg: string): SetErrorMsgActionType => {
    return {type: SET_ERROR_MSG, msg} as const;
}; 

export const setErrorInfoAC = (info: string): SetErrorInfoActionType => {
    return {type: SET_ERROR_INFO, info};
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