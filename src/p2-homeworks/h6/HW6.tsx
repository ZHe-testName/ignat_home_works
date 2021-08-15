import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

import classes from './hw6.module.css';

function HW6() {
    const editableSpanKey = 'editable-span-value';
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>(editableSpanKey, value)
    }
    const restore = () => {
        const value = restoreState<string>(editableSpanKey, '');

        setValue(value)
    }

    return (
        <div className={classes.hw6Class}>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />

                <div
                    className={classes.pencil}></div>
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
