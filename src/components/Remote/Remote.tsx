import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Buttons/Button";
import styles from "./Remote.module.css"


type  RemotePropsType = {
    init: () => number
    startinit: () => number
    setNewCounter: (num:number) => void
}

export const Remote = (props: RemotePropsType) => {


    const [max, setMax] = useState (() => props.init ());
    const [start, setStart] = useState (() => props.startinit ());


    const startHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart (+e.currentTarget.value)
    }
    const maxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax (+e.currentTarget.value)

    }

    const setItems = () => {
        localStorage.setItem ('max', JSON.stringify (max));
        localStorage.setItem ('start', JSON.stringify (start));
        props.setNewCounter(start)

    }


    return (
        <div className={styles.remote}>
            <div className={styles.inputs}>
                <div className={styles.max_wrap}>
                    <span>max value</span>
                    <input style={{textAlign: "center"}} value={max} onChange={maxHandler}/>
                </div>
                <div className={styles.start_wrap}>
                    <span>start value</span>

                    <input style={{textAlign: "center"}} value={start} onChange={startHandler}/>
                </div>
            </div>
            <Button onClickHandler={setItems} dis={max === start || start > max}> Set </Button>
        </div>
    );
};

