import React, {useState} from 'react';

import './App.css';
import {Second} from "./components/Second/Second";
import {Remote} from "./components/Remote/Remote";

function App () {
    const [counter, setCounter] = useState (0);
    const counterUpp = () => {
        setCounter (counter + 1)
    }


    const reset = () => {
        setCounter (0)
    }

    return (
        <div className="App">
            <div className={"remote"}>
                <Remote/>
            </div>
            <div className={"counter"}>
                <Second counter={counter} counterUpp={counterUpp} reset={reset}/>
            </div>

        </div>
    );
}

export default App;
