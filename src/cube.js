//canvas
const canvas = document.querySelector('canvas#c');

//scene
const scene = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const cameraContainer = new THREE.Object3D();
scene.add(cameraContainer);
cameraContainer.add(camera);




//renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap




//cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xaa0000 });
const material = new THREE.MeshLambertMaterial( { color: 0xaa0000 } );
const cube = new THREE.Mesh(geometry, material);


//light

const light = new THREE.AmbientLight(0x404040); // soft white light


const targetObject = new THREE.Object3D();
scene.add(targetObject);
targetObject.position.set(3, 2, 1)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.name = "directionalLight";
directionalLight.position.set(0, 5, 0); //default; light shining from top
directionalLight.castShadow = true; // default false
directionalLight.target = targetObject;

//Set up shadow properties for the light
directionalLight.shadow.mapSize.width = 512; // default
directionalLight.shadow.mapSize.height = 512; // default
directionalLight.shadow.camera.near = 0.5; // default
directionalLight.shadow.camera.far = 500; // default
// const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
// scene.add( helper );
// const helper2 = new THREE.CameraHelper( directionalLight.shadow.camera );
// scene.add( helper2 );

light.add(directionalLight);


scene.add(light)
scene.add(cube);
cameraContainer.position.z = 5
cameraContainer.position.set(0,2,3)
camera.lookAt(cube.position)
camera.rotation.z = Math.PI / 2
setInterval(() => {
    // cameraContainer.rotation.y += 0.01
    renderer.render(scene, camera);
}, 1000 / 60);

function handleMotion(e) {
    let deg = (e.accelerationIncludingGravity.y/9.8)*90
    // deg = -Math.round(-10)
    cameraContainer.rotation.y += 0.001 * deg
}
window.addEventListener("devicemotion", handleMotion)