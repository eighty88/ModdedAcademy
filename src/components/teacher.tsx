import {IconContext} from "react-icons";
import {GiTeacher} from "react-icons/all";

export default function TeacherData(name: string, dp: string, race: string, age: number, ss: string) {
    return (
        <div>
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
                    lineHeight: '35px',
                    fontWeight: 'lighter'
                }}>
                    名前: {name}<br />
                    担当: {dp}<br />
                    種族: {race}<br/>
                    解説: {ss}
                </div>
            </IconContext.Provider>
        </div>
    )
}