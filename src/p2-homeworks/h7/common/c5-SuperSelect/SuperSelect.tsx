import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';
import classes from './sSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[],
    onChangeOption?: (option: string) => void,
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options = [],
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options?.map((el, i)=> <option key={i}>{el}</option>); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e);

        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select 
            className={classes.select}
            onChange={onChangeCallback} 
            {...restProps}>

                {mappedOptions}

        </select>
    )
}

export default SuperSelect
