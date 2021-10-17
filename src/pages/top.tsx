import {motion} from "framer-motion";
import {Variants} from "../Animate";
// @ts-ignore
import styled from "styled-components";
// @ts-ignore
import {Scrollbars} from 'react-custom-scrollbars';

const Button = styled.a`
    background-color: transparent;
    border: 1px solid black;
    display: block;
    font-size: 3rem;
    font-weight: lighter;
    color: black;
    padding-top: 25px;
    font-family: 'Open Sans', sans-serif;
    height: 7rem;
    width: 40rem;
    transition: all .3s ease-in-out;
    text-align: center;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        cursor: pointer;
    }
`;

export default function TopPage() {
    return (
        <Scrollbars style={{width: '80vw', height: 'auto'}}>
            <motion.div
                initial={"initial"}
                animate={"enter"}
                exit={"exit"}
                variants={Variants}
                style={{
                    height: '30vh',
                    textAlign: 'center',
                }}
            >
                <h1 style={{
                    textAlign: "center",
                    verticalAlign: "middle",
                    fontWeight: "lighter",
                    lineHeight: '90px',
                    fontSize: "75px",
                    marginTop: "150px",
                    marginBottom: '75px',
                }}>
                    Welcome to<br/>
                    Minecraft Modded Academy!
                </h1>

                <Button href='https://discord.com/invite/nVGDSwGrYX'>Join our Discord</Button>
            </motion.div>
        </Scrollbars>
    )
}