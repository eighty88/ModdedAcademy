import React from 'react';
import './App.css';
// @ts-ignore
import {HashRouter, Route, Switch, Link } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
// @ts-ignore
import styled from "styled-components";

const Container = styled.div`
    z-index: -10;
    width: 100%;
    display: flex;
    height: 100vh;
    margin : 0 auto;
    padding : 0;
    position: fixed;
    top: 0;
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
                            <a href="https://discord.com/invite/nVGDSwGrYX" className="MenuItem">参加する</a>
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
