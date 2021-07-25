import React from 'react';
import {Button} from "../Buttons/Button";
import {Input} from "../Input";

export const Remote =() => {
 return (
        <div>
            <div className={"inputs"}>
                <div className={"max_wrap"}>
                    <span>max value</span>
                    <Input/>
                </div>
                <div className={"start_wrap"}>
                    <span>start value</span>
                    <Input/>
                </div>
            </div>
         <Button onClickHandler={() => console.log("object")} dis={false}> Set  </Button>
        </div>
    );
};

