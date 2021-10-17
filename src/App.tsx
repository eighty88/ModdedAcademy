import React from 'react';
import './App.css';
// @ts-ignore
import {HashRouter, Route, Switch, Link } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
// @ts-ignore
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 0;
    padding-bottom: 0;
    display: block;
`;

function App() {
    return (
        <div className="App">
            <AnimatePresence exitBeforeEnter>
                <HashRouter>
                    <div className="MenuBar">
                        <Link to="/"><img src={"logo.png"} width={80} height={80} style={{padding:'10px'}} alt="ICON"/></Link>
                        <Link to="/"><h1>Modded<br/>マイクラ学園</h1></Link>

                        <div className="MenuContainer">
                            <Link to="/" className="MenuItem">教員一覧</Link>
                            <Link to="/" className="MenuItem">学科一覧</Link>
                            <Link to="/" className="MenuItem">歴史</Link>
                            <Link to="/" className="MenuItem">参加する</Link>
                        </div>
                    </div>
                    <Container>

                    </Container>
                </HashRouter>
            </AnimatePresence>
        </div>
    );
}

export default App;
