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
const material = new THREE.MeshLambertMaterial({ color: 0xaa0000 });
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



//resize
class Resize {
    constructor() {
        this.renderer = null
    }
    start(renderer) {
        this.renderer = renderer
        window.removeEventListener('resize', this.resize)
        window.addEventListener('resize', this.resize)
    }
    stop() {
        window.removeEventListener('resize', this.resize)
    }
    resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}


const resize = new Resize()



resize.start(renderer)
scene.add(light)
scene.add(cube);
cube.material.color.set(0xFFFFFF);

cameraContainer.position.z = 5
cameraContainer.position.set(0, 2, 15)
camera.lookAt(cube.position)
// camera.rotation.z = Math.PI / 2
setInterval(() => {
    // cameraContainer.rotation.y += 0.01
    if(flagGo) goAhead()
    renderer.render(scene, camera);
}, 1000 / 60);

let display = document.querySelector('.display')

let flagGo = false
function goAhead(){
    var pLocal = new THREE.Vector3( 0, 0, -1 );
    var pWorld = pLocal.applyMatrix4( camera.matrixWorld );
    pWorld.sub( camera.position ).normalize()//.multiplyScalar(0.1);
    display.innerHTML =` ${pWorld.x}  ${pWorld.y}  ${pWorld.z}`
    cameraContainer.position.add(pWorld)
}

function handleMotion(e) {
    let deg = -(e.accelerationIncludingGravity.y / 9.8) * 90
    deg = (Math.abs(deg) < 10) ? 0 : deg
    cameraContainer.rotation.y += 0.001 * deg
    flagGo = false
    cube.material.color.set(0xFFFFFF);
    if(e.accelerationIncludingGravity.x <4.5 && e.accelerationIncludingGravity.z >4.5) {
        cube.material.color.set(0xFF0000);
        flagGo = true
    }
}


window.addEventListener("devicemotion", handleMotion)