export type ThemeStringType = 'dark' | 'red' | 'some';

const CHANGE_THEME = 'CHANGE_THEME';

type ThemeStateType = {
    theme: ThemeStringType,
};

const initState: ThemeStateType = {
    theme: "some",
};

type ActionsReturnType = ReturnType<typeof changeThemeAC>;

type ChangeThemeActionType = {
    type: string,
    newTheme: ThemeStringType,
};

export const themeReducer = (state: ThemeStateType = initState, action: ActionsReturnType): ThemeStateType => { 
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.newTheme,
            };
        }

        default: {
            return state;
        }
    }
};

export const changeThemeAC = (newTheme: ThemeStringType): ChangeThemeActionType => {
    return {type: CHANGE_THEME, newTheme};
};