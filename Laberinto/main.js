import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const material = new THREE.MeshBasicMaterial({ color: 0xFF6700 });
const geometry1 = new THREE.PlaneGeometry(35, 0.5);
const line1 = new THREE.Mesh(geometry1, material);
line1.position.x = -7.50;
line1.position.y = -10;
scene.add(line1);

const geometry2 = new THREE.PlaneGeometry(0.5, 10); 
const line2 = new THREE.Mesh(geometry2, material);
line2.position.x = 9.75;
line2.position.y = -5;  
scene.add(line2);

const geometry3 = new THREE.PlaneGeometry(35, 0.5);
const line3 = new THREE.Mesh(geometry3, material);
line3.position.x = -7.50;
line3.position.y = 10;
scene.add(line3);

const geometry4 = new THREE.PlaneGeometry(0.5, 7); 
const line4 = new THREE.Mesh(geometry4, material);
line4.position.x = 9.75;
line4.position.y = 6.75;
scene.add(line4);

const geometry5 = new THREE.PlaneGeometry(0.5, 5); 
const line5 = new THREE.Mesh(geometry5, material);
line5.position.x = -24.75;
line5.position.y = -7.5;  
scene.add(line5);

const geometry6 = new THREE.PlaneGeometry(0.5, 10); 
const line6 = new THREE.Mesh(geometry6, material);
line6.position.x = -24.75;
line6.position.y = 5;
scene.add(line6);

const geometry7 = new THREE.PlaneGeometry(5, 0.5);
const line7 = new THREE.Mesh(geometry7, material);
line7.position.y = 0; 
line7.position.x = -22.5; 
scene.add(line7);

const geometry8 = new THREE.PlaneGeometry(0.5, 5);
const line8 = new THREE.Mesh(geometry8, material);
line8.position.y = -2.25;
line8.position.x = -20;
scene.add(line8);

const geometry9 = new THREE.PlaneGeometry(10, 0.5); 
const line9 = new THREE.Mesh(geometry9, material);
line9.position.y = -7.6;
line9.position.x = -20; 
scene.add(line9);


const geometry10 = new THREE.PlaneGeometry(0.5, 10);
const line10 = new THREE.Mesh(geometry10, material);
line10.position.y = -2.35;
line10.position.x = -15.25;
scene.add(line10);

const geometry11 = new THREE.PlaneGeometry(5, 0.5);
const line11 = new THREE.Mesh(geometry11, material);
line11.position.y = 2.5;
line11.position.x = -17.50;
scene.add(line11);

const geometry12 = new THREE.PlaneGeometry(0.5, 5);
const line12 = new THREE.Mesh(geometry12, material);
line12.position.y = 4.75;
line12.position.x = -20;
scene.add(line12);

const geometry13 = new THREE.PlaneGeometry(5, 0.5);
const line13 = new THREE.Mesh(geometry13, material);
line13.position.y = 7;
line13.position.x = -17.50;
scene.add(line13);

const geometry14 = new THREE.PlaneGeometry(0.5, 17.5);
const line14 = new THREE.Mesh(geometry14, material);
line14.position.y = 1;
line14.position.x = -10;
scene.add(line14);

const geometry15 = new THREE.PlaneGeometry(5, 0.5);
const line15 = new THREE.Mesh(geometry15, material);
line15.position.y = -7.5;
line15.position.x = -7.25;
scene.add(line15);

const geometry16 = new THREE.PlaneGeometry(0.5, 5);
const line16 = new THREE.Mesh(geometry16, material);
line16.position.x = -5; 
line16.position.y = -5.25;   
scene.add(line16);

const geometry17 = new THREE.PlaneGeometry(0.5, 10);
const line17 = new THREE.Mesh(geometry17, material);
line17.position.x = -5;  
line17.position.y = 5;  
scene.add(line17);

const geometry18 = new THREE.PlaneGeometry(10, 0.5);
const line18 = new THREE.Mesh(geometry18, material);
line18.position.x = -0.2;    
line18.position.y = -3; 
scene.add(line18);

const geometry19 = new THREE.PlaneGeometry(0.5, 5);
const line19 = new THREE.Mesh(geometry19, material);
line19.position.y = -5.25;
line19.position.x = 5;
scene.add(line19);

const geometry20 = new THREE.PlaneGeometry(0.5, 2.5);
const line20 = new THREE.Mesh(geometry20, material);
line20.position.y = -8.50;
line20.position.x = -0.8;
scene.add(line20);

const geometry21 = new THREE.PlaneGeometry(2.5, 0.5);
const line21 = new THREE.Mesh(geometry21, material);
line21.position.y = -7;
line21.position.x =  -1.05 + (2.5 / 2);
scene.add(line21);

const geometry22 = new THREE.PlaneGeometry(8, 0.5);
const line22 = new THREE.Mesh(geometry22, material);
line22.position.y = 7.25;  
line22.position.x = 5.50;   
scene.add(line22);

const geometry23 = new THREE.PlaneGeometry(5, 0.5);
const line23 = new THREE.Mesh(geometry23, material);
line23.position.y = -0.2;  
line23.position.x = 7.50;   
scene.add(line23);

const geometry24 = new THREE.PlaneGeometry(0.5, 7);
const line24 = new THREE.Mesh(geometry24, material);
line24.position.y = 0.24;  
line24.position.x = 2;   
scene.add(line24);

const geometry25 = new THREE.PlaneGeometry(7, 0.5);
const line25 = new THREE.Mesh(geometry25, material);
line25.position.y = 3.5;  
line25.position.x = 2;   
scene.add(line25);

const geometry26 = new THREE.PlaneGeometry(0.5, 7);
const line26 = new THREE.Mesh(geometry26, material);
line26.position.y = 3.5;  
line26.position.x = -1.75;  
scene.add(line26);

camera.position.z = 15;

function animate() {
    renderer.render(scene, camera);
}
