import { motion } from "framer-motion";
import {Variants} from "../Animate";


export default function TopPage() {
    return (
        <motion.div
            variants={Variants}
            style={{
                height: '30vh',
            }}
        >
            <h1>Welcome to<br />Minecraft Modded Academy!</h1>
        </motion.div>
    )
}