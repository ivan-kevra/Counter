const initialState = {
    count: 0,
    maxValue: 10,
    startValue: 0

};
export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        case 'RESET-COUNT':
            return {...state, count: state.startValue};
        case 'SET-START-VALUE':
            return {...state, startValue: action.startValue};
        case 'SET-MAX-VALUE':
            return {...state, maxValue: action.maxValue};
        default:
            return state;
    }
}

export const incrementAC = (count: number) => ({type: 'INCREMENT', count} as const)
export const resetCountAC = (count: number) => ({type: 'RESET-COUNT', count} as const)
export const setStartValueAC = (startValue: number) => ({type: 'SET-START-VALUE', startValue} as const)
export const setMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)

export type InitialStateType = typeof initialState

type ActionsType = ReturnType<typeof incrementAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setMaxValueAC>