import React from 'react';
import './App.css';
// @ts-ignore
import {HashRouter, Route, Switch} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

function App() {
    return (
        <div className="App">
            <div className="MenuBar">
                <img src={"avaritia-icon.png"} width={100} height={100} alt="ICON"/>
                <h1>Modded<br/>マイクラ学園</h1>
            </div>
            <AnimatePresence exitBeforeEnter>
                <HashRouter>
                </HashRouter>
            </AnimatePresence>
        </div>
    );
}

export default App;
