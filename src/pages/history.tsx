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
                <div>
                    {(() => {
                        // @ts-ignore
                        const items = [];

                        Histories.forEach(
                            (item) => {
                                items.push(
                                    <dl>
                                        <dt>
                                            {item.date.toString().substring(0, 4)}年{item.date.toString().substring(4, 6)}月
                                        </dt>
                                        <dd>
                                            <h2> {item.title} </h2>
                                            <p> {item.text.split('\n').map((str, index) => (
                                                <React.Fragment key={index}><br/>{str}</React.Fragment>))} </p>
                                        </dd>
                                    </dl>
                                )
                            }
                        )
                        // @ts-ignore
                        return <div>{ items }</div>
                    })()}
                </div>
            </motion.div>
        </Scrollbars>
    );
}