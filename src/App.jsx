// My mistakes here before 
// The main issues in the previous code were:

//Typo in Geometry Name:

//You used <cyclinderGeometry />, which is a misspelling. The correct component is <cylinderGeometry />. This typo prevented the geometry from rendering correctly because cyclinderGeometry does not exist in three.js or @react-three/fiber.
//Color Formatting:

//For the background color, args={['F0F0F0']} was missing the # symbol at the start. It should be args={['#F0F0F0']}, as hex colors need the # prefix to be recognized correctly.
//Excessive Light Intensity:

//The light intensity was set to 10, which might be too bright depending on the setup. Setting it to a lower value, like 1, provides a more balanced lighting. You can still tweak this based on the visual effect you want, but it’s often good to start with lower intensities and adjust from there.'''

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Component for the rotating cylinder
const RotatingCylinder = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <cylinderGeometry args={[1, 1, 2, 32]} />
      <meshStandardMaterial color="#468585" emissive="#1b3a4b" emissiveIntensity={0.5} />
    </mesh>
  );
};

// Component for lighting setup
const Lighting = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={1.2} color={0x9cDBa6} castShadow />
  </>
);

// Component for canvas and controls
const App = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 3, 5], fov: 60 }}
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <Lighting />
      <color attach="background" args={['#F0F0F0']} />
      <RotatingCylinder />
      <gridHelper args={[10, 10]} position={[0, -1, 0]} />
    </Canvas>
  );
};

export default App;


