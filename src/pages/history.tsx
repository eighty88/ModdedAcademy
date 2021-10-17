import { motion } from "framer-motion";
import {Variants} from "../Animate";

import './history.css'

export default function History() {
    return (
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
                <dt>1919年7月</dt>
                <dd>
                    <h2>創設</h2>
                    <p>なぜこの日になってしまったのか。<br />とりあえず日を隠していい感じにする</p>
                </dd>
                <dt>2021年10月</dt>
                <dd>
                    <h2>いもとり氏学長代理就任</h2>
                    <p>第22代目学長の逮捕に伴って<br />立候補制で学長代理に就任</p>
                </dd>
            </dl>
        </motion.div>
    );
}