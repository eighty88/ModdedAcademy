import {motion} from "framer-motion";
import {Variants} from "../Animate";
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars';
import {DepartmentList} from "../data/departmentlist";
import DepartmentData from "../components/department";

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
                    学科・部一覧
                </h1>
                {(() => {
                    // @ts-ignore
                    const items = [];
                    // @ts-ignore
                    for (let i = 1; DepartmentList[i] !== undefined; i++) {
                        // @ts-ignore
                        items.push(<div>{ DepartmentData(DepartmentList[i].name, DepartmentList[i].n) }</div>);
                    }
                    // @ts-ignore
                    return <div>{ items }</div>
                })()}
            </motion.div>
        </Scrollbars>
    );
}