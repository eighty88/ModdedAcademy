import {motion} from "framer-motion";
import {Variants} from "../Animate";
import React from 'react';
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars';

import './chronology.css'
import {EventList} from "../data/event";

export default function Events() {
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
                    年間行事
                </h1>
                <div>
                    {(() => {
                        // @ts-ignore
                        const items = [];

                        EventList.forEach(
                            (item) => {
                                items.push(
                                    <dl>
                                        <dt>
                                            {item.date}月
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