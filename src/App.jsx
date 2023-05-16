import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experiences";
import {Environment} from "@react-three/drei";

function App() {
    return (
        <Canvas
            camera={{
                fov: 64,
                position: [2.3, 1.5, 2.3],
            }}
        >
            <Experience />
            <Environment preset="sunset" />
        </Canvas>
    );
}

export default App;
