import React from 'react';
import './App.css';
// @ts-ignore
import {HashRouter, Route, Switch, Link } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
// @ts-ignore
import styled from "styled-components";
import TopPage from "./pages/top";
import History from "./pages/history";

const Container = styled.div`
    width: 100%;
    display: flex;
    height: 100vh;
    margin : 0 auto;
    padding : 0;
    position: fixed;
    top: 0;
`;

const H1 = styled.h1`
    height: 100px;
    font-size: 24px;
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
    display: inline-block;
    background: -webkit-linear-gradient(0deg, #ACB6E6, #86FDE9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: normal;
    letter-spacing: 3px;
`;

function App() {
    return (
        <div className="App">
            <AnimatePresence exitBeforeEnter>
                <HashRouter>
                    <div className="MenuBar">
                        <Link to="/"><img src={"logo.png"} width={80} height={80} style={{padding:'10px'}} alt="ICON"/></Link>
                        <Link to="/"><H1>Minecraft<br />Modded<br />Academy</H1></Link>

                        <div className="MenuContainer">
                            <Link to="/" className="MenuItem">教員一覧</Link>
                            <Link to="/" className="MenuItem">学科一覧</Link>
                            <Link to="/history" className="MenuItem">歴史</Link>
                            <a href="https://discord.com/invite/nVGDSwGrYX" className="MenuItem">参加する</a>
                        </div>
                    </div>
                    <Container>
                        <div className="Container-Background" />
                        <div className="Page">
                            <Switch>
                                <Route path="/" exact component={TopPage} />
                                <Route path="/history" component={History} />
                            </Switch>
                        </div>
                    </Container>
                </HashRouter>
            </AnimatePresence>
        </div>
    );
}

export default App;
