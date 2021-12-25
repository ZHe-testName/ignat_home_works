const SWITC_IS_LOADING = 'SWITC_IS_LOADING';

export type StateType = {
    isLoading: boolean,
};

type ActionType = {
    type: string,
    isLoading: boolean,
};

const initState: StateType = {
    isLoading: false,
}

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => { 
    switch (action.type) {
        case SWITC_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }

        default: {
            return state;
        }
    }
}

export const loadingAC = (isLoading: boolean): ActionType => ({type: SWITC_IS_LOADING, isLoading}) // fix any