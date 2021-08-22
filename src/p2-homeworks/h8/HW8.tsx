import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

import classes from './hw8.module.css';

export type UserType = {
    _id: number,
    name: string,
    age: number,
};

export type UsersArrayType = Array<UserType>;

const initialPeople = [
    {_id: 0, name: 'Kat', age: 3},
    {_id: 1, name: 'Johney', age: 66},
    {_id: 2, name: 'Simon', age: 16},
    {_id: 3, name: 'Freddy', age: 44},
    {_id: 4, name: 'HULK', age: 40},
    {_id: 5, name: 'Ira', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UsersArrayType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div 
            key={p._id}
            className={classes.userRow}>
            <span>
                {p.name}
            </span>

            <span>
                {p.age}
            </span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}));
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}));
    const filter = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}));

    return (
        <>
            <hr/>
            homeworks 8
            <div className={classes.main}>

                {/*should work (должно работать)*/}
                {finalPeople}

                <div className={classes.buttonsBlok}>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    <div><SuperButton onClick={filter}>18 filter</SuperButton></div>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </>
    )
}

export default HW8
