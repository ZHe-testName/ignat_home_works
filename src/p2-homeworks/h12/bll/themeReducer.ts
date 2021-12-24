export type ThemeStringType = 'dark' | 'red' | 'some';

enum ThemeActionsCreratorType {
    CHANGE_THEME, 
};

type ThemeStateType = {
    theme: ThemeStringType,
};

const initState: ThemeStateType = {
    theme: "some",
};

type ActionsReturnType = ReturnType<typeof changeThemeAC>;

type ChangeThemeActionType = {
    type: ThemeActionsCreratorType.CHANGE_THEME,
    newTheme: ThemeStringType,
};

export const themeReducer = (state: ThemeStateType = initState, action: ActionsReturnType): ThemeStateType => { // fix any
    switch (action.type) {
        case ThemeActionsCreratorType.CHANGE_THEME: {
            return {
                ...state,
                theme: action.newTheme,
            };
        }

        default: return state;
    }
};

export const changeThemeAC = (newTheme: ThemeStringType): ChangeThemeActionType => {
    return {type: ThemeActionsCreratorType.CHANGE_THEME, newTheme};
}; // fix any