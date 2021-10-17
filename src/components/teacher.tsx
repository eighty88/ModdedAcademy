import {IconContext} from "react-icons";
import {GiTeacher} from "react-icons/all";

export default function TeacherData(name: string, dp: string, race: string, age: number, ss: string) {
    return (
        <div style={{
        }}>
            <IconContext.Provider value={{size: '10em'}}>
                <div style={{
                    display: "inline-block",
                    margin: '50px',
                }}>
                    <GiTeacher/>
                </div>
                <div style={{
                    display: "inline-block",
                    fontSize: '25px',
                    lineHeight: '35px'
                }}>
                    名前: {name}<br />
                    担当: {dp}<br />
                    種族: {race}<br/>
                    年齢: {age}歳<br/>
                    特技: {ss}
                </div>
            </IconContext.Provider>
        </div>
    )
}