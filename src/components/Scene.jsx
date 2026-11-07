import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';

const bagShape = new THREE.Shape();
bagShape.moveTo(-0.65, 0.58);
bagShape.lineTo(0.65, 0.58);
bagShape.lineTo(0.78, -0.62);
bagShape.quadraticCurveTo(0.79, -0.72, 0.68, -0.72);
bagShape.lineTo(-0.68, -0.72);
bagShape.quadraticCurveTo(-0.79, -0.72, -0.78, -0.62);
bagShape.closePath();

const handleCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-0.52, 0.52, 0.04),
  new THREE.Vector3(-0.5, 0.96, 0.07),
  new THREE.Vector3(-0.3, 1.13, 0.07),
  new THREE.Vector3(0, 1.18, 0.07),
  new THREE.Vector3(0.3, 1.13, 0.07),
  new THREE.Vector3(0.5, 0.96, 0.07),
  new THREE.Vector3(0.52, 0.52, 0.04)
]);

function ToteBag() {
  return (
    <group position={[0, -0.12, 0]} rotation={[0.02, -0.35, 0]} scale={1.15}>
      <mesh castShadow receiveShadow position={[0, 0, -0.14]}>
        <extrudeGeometry args={[bagShape, {
          depth: 0.28,
          bevelEnabled: true,
          bevelThickness: 0.045,
          bevelSize: 0.035,
          bevelSegments: 3,
          curveSegments: 12
        }]} />
        <meshStandardMaterial color="#d5c5a9" roughness={0.82} />
      </mesh>
      <mesh castShadow position={[0, 0.02, 0.19]}>
        <tubeGeometry args={[handleCurve, 64, 0.045, 12, false]} />
        <meshStandardMaterial color="#735c43" roughness={0.68} />
      </mesh>
      {[-0.51, 0.51].map(x => (
        <mesh key={x} position={[x, 0.48, 0.22]}>
          <boxGeometry args={[0.12, 0.13, 0.045]} />
          <meshStandardMaterial color="#a28f76" metalness={0.55} roughness={0.36} />
        </mesh>
      ))}
      <mesh position={[0, -0.02, 0.19]}>
        <boxGeometry args={[0.035, 0.28, 0.018]} />
        <meshStandardMaterial color="#8c775d" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.1, 0.2]}>
        <boxGeometry args={[0.18, 0.035, 0.02]} />
        <meshStandardMaterial color="#8c775d" roughness={0.8} />
      </mesh>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="scene" role="img" aria-label="Rotating 3D Threadline tote bag. Drag to rotate.">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 1.5]} shadows>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 5, 5]} intensity={2} castShadow />
        <ToteBag />
        <ContactShadows position={[0, -1.05, 0]} opacity={0.28} blur={2.2} scale={4.5} />
        <Environment preset="studio" />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.65}
        />
      </Canvas>
    </div>
  );
}
