import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import c from './hw11.module.css';

type DoubleRangeValuesType = [number, number];

function HW11() {
    const [value1, setValue1] = useState(20)
    const [valueForDouble, setValueForDouble] = useState<DoubleRangeValuesType>([20, 40]);

    function onChangeRange (range: number){
        setValue1(range);
    };

    function onChangeDoubleRange (value: DoubleRangeValuesType){
        setValueForDouble(value);
    };

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={c.superRange}>
                <span className={c.values}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChangeRange={onChangeRange}
                />
            </div>

            <div className={c.doubleSuperRange}>
                <div>
                    <span className={c.values}>{valueForDouble[0]}</span>
                    <span className={c.values}>{valueForDouble[1]}</span>
                </div>

                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                    onChangeRange={onChangeDoubleRange}
                    defaultValue={valueForDouble}
                    value={valueForDouble}
                    max={300}
                />
                
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
