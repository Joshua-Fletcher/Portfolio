var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(300,window.innerWidth/window.innerHeight,1,10000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("black");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();
});


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

//mesh.position.set(-2,-2,-2)
// mesh.rotation.set(45,0,0);
//mesh.scale.set(1,2,1);

var geometry = new THREE.SphereGeometry(1,64,64);
var material = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
material.map = THREE.ImageUtils.loadTexture('Earth-Map.jpg');
material.bumpMap = THREE.ImageUtils.loadTexture('Earch-bumpMap.jpg');
material.bumpScale = .05;
material.specularMap = THREE.ImageUtils.loadTexture('Earth-greyMap.jpg')
material.specular  = new THREE.Color('black')
var mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);




var light = new THREE.PointLight(0xFFFFFF,100,1000);
light.position.set(-100,-100,-250);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF,100,1000);
light.position.set(-100,-100,-400);
scene.add(light);



mesh.rotation.x -= .003;
    mesh.rotation.y -= .001;

var render = function() {
    requestAnimationFrame(render);

    mesh.rotation.y -= .0025;
    mesh.rotation.x += .000001;

    renderer.render(scene, camera);
}



render();



window.addEventListener('click', onMouseMove);