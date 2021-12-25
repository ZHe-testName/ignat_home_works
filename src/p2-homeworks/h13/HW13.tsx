import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../h10/bll/store';
import { sendFormTC, switchIsShureAC } from './bll/requestReducer';
import c from './HW13.module.css';

const Request = () => {
    const isSuccess = useSelector<AppStoreType, boolean>(state => state.request.success);
    const msg = useSelector<AppStoreType, string>(state => state.request.errorMsg);
    const info = useSelector<AppStoreType, string>(state => state.request.errorInfo);

    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(switchIsShureAC(e.currentTarget.checked));
    };

    const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(sendFormTC(isSuccess))
    };

    return (
        <div className={c.formWrap}>
             {
                msg
                    &&
                    <div className={c.popup}>
                        <span>
                            {msg}
                        </span>

                        <span className={c.info}>
                            {info}
                        </span>
                    </div>
            }

            <form
                onSubmit={e => onSubmitHandle(e)}>
                <label>
                    <input 
                        onChange={e => onChangeHandler(e)}
                        type="checkbox"
                        name="checkshure"
                        checked={isSuccess} />
                    Are you shure?
                </label>

                <button>Send</button>
            </form>
        </div>
    );
};

export default Request;