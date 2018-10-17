//variable de la esena basica
var renderer, scene,camera,luz;
//Variables de los objetos
var geometry,material,paddle1,paddle2,ball,mesh;
var width=640,height=390;
var ballDirX = 1, ballDirY = 1, ballSpeed = 2;
function init() {
	createRenderer();
	createScene();
	createCamera();
	light();
	plane();
	ball();
	box1();
	box2();
	Renderer(); 
}

function createRenderer(){//Render
	renderer= new THREE.WebGLRenderer();
	renderer.setSize(width,height);
	var canvas = document.getElementById("gameCanvas");
	canvas.appendChild(renderer.domElement);
}

function createScene(){//Esena
	scene= new THREE.Scene();
}

function createCamera(){//Camara
	camera=new THREE.PerspectiveCamera(65,width/height,0.1,1000);
	camera.position.set(-410,0,110);
}

function light(){
	pointLight = new THREE.PointLight(0xF8D898);
	pointLight.position.set(10,50,500);
	pointLight.intensity = 2.9;
	pointLight.distance = 10000;
	scene.add(pointLight);
}

function ball(){ 
	geometry= new THREE.SphereGeometry(5,6,6);
	materia =new THREE.MeshLambertMaterial( { color: 0xD43001 } );
	ball =new THREE.Mesh( geometry, materia);
	ball.position.x=-300;
	scene.add(ball);
}

function plane(){
	geometry= new THREE.PlaneGeometry(width*0.95,250,10,10);
	materia =new THREE.MeshLambertMaterial( { color: 0x4BD121,  wireframe:false} );
	mesh =new THREE.Mesh( geometry, materia);
	scene.add(mesh);
}

function box1(){
	geometry= new THREE.BoxGeometry(10,30,10);
	materia =new THREE.MeshLambertMaterial( { color: 0xD43001} );
	paddle1 =new THREE.Mesh( geometry, materia);
	paddle1.position.set(-300,0,10);
	scene.add(paddle1);
}

function box2(){
	geometry= new THREE.BoxGeometry(10,30,10);
	materia =new THREE.MeshLambertMaterial( { color: 0xD43001} );
	paddle2 =new THREE.Mesh( geometry, materia);
	paddle2.position.set(300,0,10);
	scene.add(paddle2);
}

function movementball(){
	
	if (ball.position.y <= -250 / 2){
    	ballDirY = -ballDirY;
	}

	if (ball.position.y >= 250 / 2){
    	ballDirY = -ballDirY;
	}
	var Speed= ballSpeed*2;
	if(ballDirY > Speed){
		ballDirY=Speed;
	} else{
		if (ballDirY< -Speed) {
			ballDirY=-Speed;
		}
	}
	ball.position.x += ballDirX * ballSpeed;
	ball.position.y += ballDirY * ballSpeed;
}

function Renderer(){
	movementball();
	camera.rotation.z = -90 * Math.PI / 180;
	camera.rotation.y = -60 * Math.PI / 180;
	requestAnimationFrame(Renderer);
	renderer.render(scene,camera);
}
init();
Renderer();