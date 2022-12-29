import React from 'react';
import './App.css';


type CounterPropsType = {
    setCount: (count: number) => void
    count: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const onClickHandler = () => {
        props.setCount(props.count + 1)
    }
    const onClickResetHandler = () => {
        props.setCount(0)
    }
    return (
        <div className={'body'}>
            <div className={props.count === 5 ? 'countDisabled' : 'count'}>{props.count}</div>
            <div className={'buttons'}>
                <button onClick={onClickHandler} className={props.count === 5 ? 'inc' : ''}  disabled={props.count === 5 && true}>inc</button>
                <button onClick={onClickResetHandler} className={props.count === 0 ? 'reset' : ''}  disabled={props.count === 0 && true}>reset</button>
                <button>Set</button>
            </div>
        </div>
    );
};

