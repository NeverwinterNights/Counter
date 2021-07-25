import React from 'react';
import { Button } from '../Buttons/Button';
import {Display} from "../Display/Display";



type  SecondPropsType = {
    counter: number
    counterUpp: () => void
    reset: () => void

}

export const Second =(props:SecondPropsType) => {



    return (
        <div>
            <Display counter={props.counter} />
            <div className={"buttonWrap"}>


              <Button  onClickHandler={props.counterUpp} dis={props.counter===5}>inc</Button>
                <Button  onClickHandler = {props.reset} dis={props.counter<1}>reset</Button>


            </div>
        </div>
    );
};


