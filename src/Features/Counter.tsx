import React, {ChangeEvent} from 'react';
import style from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {incrementAC, resetCountAC, setMaxValueAC, setStartValueAC} from "./counterReducer";

export const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)

    const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+event.currentTarget.value))
    };
    const handleStartValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+event.currentTarget.value))
    };
    const resetCount = () => {
        dispatch(resetCountAC(startValue))
    };
    const addCountHandler = () => {
        if (count < maxValue) {
            dispatch(incrementAC(count));
        }
    };

    return (
        <div className={style.body}>
            <div className={style.settings}>
                <div className={style.value}>
                    <span>Max Value:</span>
                    <input type="number" id="max-value" value={maxValue} onChange={handleMaxValueChange}/>
                </div>
                <div className={style.value}>
                    <span>Start Value:</span>
                    <input type="number" id="start-value" value={startValue} onChange={handleStartValueChange}/>
                </div>
            </div>

            <div className={style.counter}>
                <div className={style.count}>Count: {count}</div>
                <div className={style.buttons}>
                    <button onClick={resetCount} className={style.button}>Reset</button>
                    <button onClick={addCountHandler} className={style.button}>Increment</button>
                </div>

            </div>
        </div>
    );
};

