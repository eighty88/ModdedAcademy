import { motion } from "framer-motion";
import {Variants} from "../Animate";
// @ts-ignore
import styled from "styled-components";

const Button = styled.a`
    background-color: transparent;
    border: 1px solid black;
    display: block;
    font-size: 4rem;
    font-weight: lighter;
    color: black;
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
                fontSize: "75px",
                marginTop: "75px",
                marginBottom: '75px',
            }}>
                Welcome to<br />
                Minecraft Modded Academy!
            </h1>

            <Button href='https://discord.com/invite/nVGDSwGrYX'>Join our Discord</Button>
        </motion.div>
    )
}