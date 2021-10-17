import {motion} from "framer-motion";
import {Variants} from "../Animate";
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars';
import TeacherData from "../components/teacher";
import {TeacherList} from "../data/teacherlist";

export default function Teachers() {
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
                    教師一覧
                </h1>
                {(() => {
                    // @ts-ignore
                    const items = [];
                    // @ts-ignore
                    for (let i = 1; TeacherList[i] !== undefined; i++) {
                        // @ts-ignore
                        items.push(<div>{ TeacherData(TeacherList[i].name, TeacherList[i].dp, TeacherList[i].race, TeacherList[i].age, TeacherList[i].ss) }</div>);
                    }
                    // @ts-ignore
                    return <div>{ items }</div>
                })()}
            </motion.div>
        </Scrollbars>
    );
}