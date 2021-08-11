import React from 'react';


type  InputPropsType = {
    start?: number
    max?: number
}

export const Input = (props:InputPropsType) => {
    return (
        <div>
            <input style={{textAlign: "center"}} value={props.start} />
        </div>
    );
}

