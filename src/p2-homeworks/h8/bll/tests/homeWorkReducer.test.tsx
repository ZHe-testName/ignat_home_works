import React from 'react'
import { UserType } from '../../HW8'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Kat', age: 3},
        {_id: 1, name: 'Johney', age: 66},
        {_id: 2, name: 'Simon', age: 16},
        {_id: 3, name: 'Freddy', age: 44},
        {_id: 4, name: 'HULK', age: 40},
        {_id: 5, name: 'Ira', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'});

    expect(newState[0].age).toBe(3);
    expect(newState[5].age).toBe(66);
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'});

    expect(newState[0].age).toBe(66);
    expect(newState[5].age).toBe(3);
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18});

    expect(newState.length).toBe(4);
})
