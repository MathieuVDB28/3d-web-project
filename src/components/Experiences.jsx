import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";
import {useState} from "react";

export const Experience = () => {
    const [color, setColor] = useState("#000000");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Overlay />
                <Office color={color} />
            </ScrollControls>
        </>
    );
};
