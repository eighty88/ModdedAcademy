import { motion } from "framer-motion";
import {Variants} from "../Animate";
// @ts-ignore
import styled from "styled-components";

const Button = styled.button`
    background-color: transparent;
    border: 1px solid black;
    font-size: 4rem;
    font-weight: normal;
    color: black;
    font-family: 'Open Sans', sans-serif;
    height: 7rem;
    width: 40rem;
    transition: all .3s ease-in-out;
    text-align: center;
    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
    }
`


export default function TopPage() {
    return (
        <motion.div
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
                fontSize: "75px",
                marginTop: "75px",
                marginBottom: '75px',
            }}>
                Welcome to<br />
                Minecraft Modded Academy!
            </h1>

            <Button>Join Discord</Button>
        </motion.div>
    )
}