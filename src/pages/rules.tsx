import {motion} from "framer-motion";
import {Variants} from "../Animate";
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars';
import {Rule} from "../data/rule";

// @ts-ignore
import styled from "styled-components";

const DIV = styled.div`
    margin-left: 50px;
    padding: 15px;
    font-weight: lighter;
    font-size: 2em;
`

export default function Rules() {
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
                    校則
                </h1>
                {(() => {
                    // @ts-ignore
                    const items = [];
                    // @ts-ignore
                    for (let i = 0; Rule[i] !== undefined; i++) {
                        // @ts-ignore
                        items.push(<DIV>{ Rule[i] }</DIV>);
                    }
                    // @ts-ignore
                    return <div>{ items }</div>
                })()}
            </motion.div>
        </Scrollbars>
    );
}