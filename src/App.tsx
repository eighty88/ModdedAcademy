import React from 'react';
import './App.css';
// @ts-ignore
import {HashRouter, Route, Switch, Link } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

function App() {
    return (
        <div className="App">
            <AnimatePresence exitBeforeEnter>
                <HashRouter>
                    <div className="MenuBar">
                        <Link to="/"><img src={"avaritia-icon.png"} width={100} height={100} alt="ICON"/></Link>
                        <Link to="/"><h1>Modded<br/>マイクラ学園</h1></Link>

                        <div className="MenuContainer">
                            <div className="MenuItem">教員一覧</div>
                            <div className="MenuItem">学科一覧</div>
                            <div className="MenuItem">歴史</div>
                            <div className="MenuItem">参加する</div>
                        </div>
                    </div>

                </HashRouter>
            </AnimatePresence>
        </div>
    );
}

export default App;
