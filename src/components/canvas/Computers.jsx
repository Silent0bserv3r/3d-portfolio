import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
	const computer = useGLTF("./desktop_pc/scene.gltf");
	const mesh = useRef();
	return (
		<mesh rotation-y={Math.PI * 0.13} ref={mesh}>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.7 : 0.75}
				position={isMobile ? [0, -3, -1] : [0, -3.5, -1.5]}
				rotation={[-0.01, 0, -0.02]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const media = window.matchMedia("(max-width: 500px)");
		setIsMobile(media.matches);

		const handleMediaChange = (event) => {
			setIsMobile(event.matches);
		};

		media.addEventListener("change", handleMediaChange);

		return () => {
			media.removeEventListener("change", handleMediaChange);
		};
	}, []);
	return (
		<Canvas
			shadows
			camera={{ position: isMobile ? [30, 3, 5] : [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
