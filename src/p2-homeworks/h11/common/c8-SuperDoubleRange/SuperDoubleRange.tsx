import { Slider } from 'antd'
import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void,
    value?: [number, number],
    defaultValue: [number, number],
    max?: number,
    min?: number,
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, max = 100, min = 0, defaultValue
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <Slider range defaultValue={defaultValue} value={value} onChange={onChangeRange} min={min} max={max}/>
    )
}

export default SuperDoubleRange
