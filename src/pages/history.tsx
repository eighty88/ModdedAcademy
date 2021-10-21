import {motion} from "framer-motion";
import {Variants} from "../Animate";
import React from 'react';
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars';

import './chronology.css'
import {Histories} from "../data/history";

export default function History() {
    return (

        <Scrollbars style={{width: '80vw', height: 'auto'}}>
            <motion.div
                initial={"initial"}
                animate={"enter"}
                exit={"exit"}
                variants={Variants}
            >
                <h1 style={{
                    textAlign: "left",
                    verticalAlign: "middle",
                    fontWeight: "lighter",
                    fontSize: "75px",
                    margin: "75px",
                }}>
                    学園の歴史
                </h1>
                <dl>
                    {(() => {
                        // @ts-ignore
                        const items = [];

                        Histories.forEach(
                            item => {
                                items.push(<>
                                    <dt>
                                        { item.date.toString().substring(0, 4) }年{ item.date.toString().substring(4, 6) }月
                                    </dt>
                                    <dd>
                                        <h2> { item.title } </h2>
                                        <p> { item.text.split('\n').map((str, index) => (<React.Fragment key={index}><br />{str}</React.Fragment>))} </p>
                                    </dd>
                                </>)
                            }
                        )
                        // @ts-ignore
                        return <div>{ items }</div>
                    })()}
                </dl>
                <dl>
                    <dt>1919年7月</dt>
                    <dd>
                        <h2>創設</h2>
                        <p>なぜこの日になってしまったのか。<br/>とりあえず日を隠していい感じにする</p>
                    </dd>
                    <dt>2021年??月</dt>
                    <dd>
                        <h2>いもとり氏学長代理就任</h2>
                        <p>第22代目学長の逮捕に伴って<br/>立候補制で<s>適当に</s>募集をかけたところ<br/>一人だけだったため学長代理に就任<br />何書いたらいいかわからなかったのでとりあえず適当な作り話</p>
                    </dd>
                </dl>
            </motion.div>
        </Scrollbars>
    );
}