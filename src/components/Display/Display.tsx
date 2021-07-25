import React from 'react';
import styles from "./Display.module.css"

type  DisplayPropsType = {
    counter: number


}


export const Display =(props:DisplayPropsType) => {
 return (
        <div className={styles.display}>
            <span className={props.counter===5 ? styles.number : ""}>{props.counter}</span>
        </div>
    );
};

