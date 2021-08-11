import React from 'react';
import {Button} from '../Buttons/Button';
import {Display} from "../Display/Display";
import styles from "./Second.module.css"


type  SecondPropsType = {
    counter: number
    counterUpp: () => void
    reset: () => void
    max:()=> number
    start:()=> number

}

export const Second = (props: SecondPropsType) => {





    return (
        <div className={styles.second}>
            <Display max={props.max} counter={props.counter}/>
            <div className={styles.buttonWrap}>

                <Button onClickHandler={props.counterUpp} dis={props.counter >= props.max()}>inc</Button>
                <Button onClickHandler={props.reset} dis={props.counter < props.start()+1}>reset</Button>


            </div>
        </div>
    );
};


