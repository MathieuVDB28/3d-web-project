import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;
export function Office(props) {
    const gltf = useGLTF("./scene.gltf");
    const ref = useRef();
    const tl = useRef();
    const scroll = useScroll();

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() => {
        tl.current = gsap.timeline();
        // Car Rotation
        tl.current.to(
            ref.current.rotation,
            { duration: 1, x: 0, y: 0, z: 0 },
            0
        );
        tl.current.to(
            ref.current.rotation,
            { duration: 1, x: 0, y: 0, z: 0 },
            1
        );

        // Car movement
        tl.current.to(
            ref.current.position,
            {
                duration: 1,
                x: -3,
                y: -1,
                z: -1,
            },
            0
        );
        tl.current.to(
            ref.current.position,
            {
                duration: 1,
                x: 0.5,
                y: -1,
                z: -1
            },
            1
        );
    }, []);

    useLayoutEffect(() => {
        gltf.scene.traverse((object) => {
            if (object.isMesh) {
                object.material.color.setStyle(props.color); // Utiliser la couleur des props
            }
        });
    }, [gltf, props.color]);

    return (
        <group
            {...props}
            dispose={null}
            ref={ref}
            position={[0.5, -1, -1]}
            rotation={[0, -Math.PI / 3, 0]}
        >
            <primitive object={gltf.scene} />
        </group>
    );
}

useGLTF.preload("./scene.gltf");