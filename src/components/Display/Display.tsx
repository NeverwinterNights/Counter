import React from 'react';
import styles from "./Display.module.css"

type  DisplayPropsType = {
    counter: number
    max:()=> number

}


export const Display =(props:DisplayPropsType) => {
 return (
        <div className={styles.display}>
            <span className={props.counter===props.max() ? styles.number : ""}>{props.counter}</span>
        </div>
    );
};

