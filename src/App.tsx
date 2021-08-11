import React, {useState} from 'react';

import './App.css';
import {Second} from "./components/Second/Second";
import {Remote} from "./components/Remote/Remote";

function App () {

    const startinit = (): number => {
        if (localStorage) {
            const initStartValue = localStorage.getItem ('start')
            if (typeof initStartValue === 'string') {
                return +initStartValue
            }
        } else {
            return 0
        }
        return 0
    }


    const init = (): number => {
        if (localStorage) {
            const initValue = localStorage.getItem ('max')
            if (typeof initValue === 'string') {
                return +initValue
            }
        } else {
            return 0
        }
        return 0
    }

    const [counter, setCounter] = useState (() => startinit());
    const counterUpp = () => {
        setCounter (counter + 1)
    }



    const reset = () => {
        setCounter (()=>startinit())
    }

const setNewCounter = (num: number) => {
    setCounter(num)
}



    return (
        <div className="App">
            <div className={"remote"}>
                <Remote setNewCounter={setNewCounter}  init={init} startinit={startinit}/>
            </div>
            <div className={"counter"}>
                <Second counter={counter} max={init} start={startinit} counterUpp={counterUpp} reset={reset}/>
            </div>

        </div>
    );
}

export default App;
