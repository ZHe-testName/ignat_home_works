import { UsersArrayType } from './../HW8';

export type ActionType = {
    type: string,
    payload?: string | number, 
};

export const homeWorkReducer = (state: UsersArrayType, action: ActionType): UsersArrayType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up'){
                return [...state].sort((a, b) => a.age - b.age);
            };

            if (action.payload === 'down'){
                return [...state].sort((a, b) => b.age - a.age);
            };

            return state;
        }

        case 'check': {
            return state.filter(el => el.age >= 18);
        }
        
        default: return state
    }
}