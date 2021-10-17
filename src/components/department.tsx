import {IconContext} from "react-icons";

export default function DepartmentData(name: string, n: string) {
    return (
        <div style={{
        }}>
            <IconContext.Provider value={{size: '10em'}}>
                <div style={{
                    display: "inline-block",
                    fontSize: '25px',
                    lineHeight: '35px',
                    fontWeight: 'lighter'
                }}>
                    <div style={{ fontSize: '40px', display: 'inline-block', margin: '50px'}}>{name}</div>
                    <div style={{ display: 'inline-block'}}>定員: {n}</div>
                </div>
            </IconContext.Provider>
        </div>
    )
}