import {motion} from "framer-motion";
import {Variants} from "../Animate";
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars';

export default function Departments() {
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
                    学科一覧
                </h1>

            </motion.div>
        </Scrollbars>
    );
}