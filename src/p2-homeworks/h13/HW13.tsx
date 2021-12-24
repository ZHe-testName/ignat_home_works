import React, { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from '../h10/bll/store';
import { sendFormTC, switchIsShureAC } from './bll/requestReducer';
import c from './HW13.module.css';

const Request = () => {
    const isSuccess = useSelector<AppStoreType, boolean>(state => state.request.form.success);
    const msg = useSelector<AppStoreType, string>(state => state.request.errorMsg);

    const dispatch = useDispatch();

    const onChangeHandler = () => {
        dispatch(switchIsShureAC(!isSuccess));
    };

    const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(sendFormTC(isSuccess))
    };

    return (
        <div className={c.formWrap}>
            <form
                onSubmit={e => onSubmitHandle(e)}>
                <label>
                    <input 
                        onChange={onChangeHandler}
                        type="checkbox"
                        name="checkshure"
                        checked={isSuccess} />
                    Are you shure?
                </label>

                <button>Send</button>
            </form>

            {
                msg
                    &&
                    <div className={c.popup}>
                        <span>
                            {msg}
                        </span>
                    </div>
            }
        </div>
    );
};

export default Request;