import {IconContext} from "react-icons";

export default function DepartmentData(name: string, n: number) {
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
                    <h2>{name}</h2>
                    定員: {n}
                </div>
            </IconContext.Provider>
        </div>
    )
}