import {
    counterReducer,
    incrementAC,
    InitialStateType,
    resetCountAC,
    setMaxValueAC,
    setStartValueAC
} from "./counterReducer";

describe('counterReducer', () => {
    let startState: InitialStateType;
    beforeEach(() => {
        startState = {
            count: 0,
            maxValue: 10,
            startValue: 0
        };
    });

    test('count should be incremented', () => {
        const action = incrementAC(1);
        const endState = counterReducer(startState, action);
        expect(endState.count).toBe(1);
    });

    test('count should be reset', () => {
        const action = resetCountAC(0);
        const endState = counterReducer(startState, action);
        expect(endState.count).toBe(0);
    });

    test('max value should be set', () => {
        const action = setMaxValueAC(20);
        const endState = counterReducer(startState, action);
        expect(endState.maxValue).toBe(20);
    });

    test('start value should be set', () => {
        const action = setStartValueAC(5);
        const endState = counterReducer(startState, action);
        expect(endState.startValue).toBe(5);
    });
});