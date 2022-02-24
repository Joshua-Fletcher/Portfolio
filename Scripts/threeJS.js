var artifactCanvas = document.getElementById("artifactCanvas");
var date;
var date2;
var date3;
var cameraPos = 5;

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(300,window.innerWidth/window.innerHeight,1,10000);
camera.position.z = cameraPos;

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("artifactCanvas")});
renderer.setClearColor("black");
renderer.setSize(window.innerWidth,window.innerHeight);
console.log(window.innerHeight);
console.log(window.innerWidth);

//document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight;

    if(window.width > 1200){
        cameraPos = 4;
        camera.position.z = cameraPos;
    }


    camera.updateProjectionMatrix();
});

const mouse = {
    x: 0,
    y: 0
}


//var raycaster = new THREE.Raycaster();
//var mouse = new THREE.Vector2();

//mesh.position.set(-2,-2,-2)
// mesh.rotation.set(45,0,0);
//mesh.scale.set(1,2,1);

var geometry = new THREE.SphereGeometry(1,64,64);
var material = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
material.map = THREE.ImageUtils.loadTexture('Images/UV-Earth-Map.jpg');
material.bumpMap = THREE.ImageUtils.loadTexture('Images/Earch-bumpMap.jpg');
material.bumpScale = .05;
material.specularMap = THREE.ImageUtils.loadTexture('Images/Earth-greyMap.jpg')
material.specular  = new THREE.Color('black')
var mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);

const geometry2 = new THREE.SphereGeometry(.1,64,64);
var material2 = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
const mesh2 = new THREE.Mesh(geometry2,material2);
const mesh2obj = new THREE.Object3D();
mesh2obj.add(mesh2);
mesh.add(mesh2obj);
mesh2obj.position.x = 1.5;

// const geometry3 = new THREE.SphereGeometry(.1,64,64);
// var material3 = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
// const mesh3 = new THREE.Mesh(geometry3,material3);
// const mesh3obj = new THREE.Object3D();
// mesh3obj.add(mesh3);
// mesh.add(mesh3obj);
// mesh3obj.position.x = 1.8;

// const geometry4 = new THREE.SphereGeometry(.1,64,64);
// var material4 = new THREE.MeshPhongMaterial({color: 0xFFFFFF});
// const mesh4 = new THREE.Mesh(geometry4,material4);
// const mesh4obj = new THREE.Object3D();
// mesh4obj.add(mesh4);
// mesh.add(mesh4obj);
// mesh4obj.position.x = 1.6;



var light = new THREE.PointLight(0xFFFFFF,100,1000);
light.position.set(-100,-100,-250);
scene.add(light);

var light = new THREE.PointLight(0xFFFFFF,100,1000);
light.position.set(-100,-100,-500);
scene.add(light);


const ambientLight = new THREE.AmbientLight(0xffffff,.1);
scene.add(ambientLight);

const group = new THREE.Group();
group.add(mesh);
scene.add(group);



mesh.position.y += 1;
mesh.position.x +=0;



addEventListener('mousemove', () => {

        mouse.x = (event.clientX / innerWidth) * 2.2 - 1;
        mouse.y = -(event.clientY / innerHeight) * 2.2 + 1;

})



var render = function() {
    requestAnimationFrame(render);

    mesh.rotation.y -= .0025;
    mesh.rotation.x += .000001;

   // mesh2obj.position.y += .001 ;
    date = Date.now() * .001;
    mesh2obj.position.x = Math.cos(date) * 1.7;
    mesh2obj.position.y = Math.sin(date) * 1.5;
    // date2 = Date.now() * .002;
    // mesh3obj.position.x = Math.cos(date2) * 2;
    // mesh3obj.position.y = Math.sin(date2) * 1.5;
    // date3 = Date.now() * .00233;
    // mesh4obj.position.x = Math.cos(date3) * 1.7;
    // mesh4obj.position.y = Math.sin(date3) * 1.3;

    group.rotation.y = mouse.x;

    renderer.render(scene, camera);
}



render();

