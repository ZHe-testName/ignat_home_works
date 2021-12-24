import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import { changeThemeAC, ThemeStringType } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme); // useSelector

    const dispatch = useDispatch();
    // useDispatch, onChangeCallback

    const onChangeCallback = (val: ThemeStringType) => {
        dispatch(changeThemeAC(val));
    };

    return (
        <div className={s[theme] + ' ' + s.wrap}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio 
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}/>

            <hr/>
        </div>
    );
}

export default HW12;
