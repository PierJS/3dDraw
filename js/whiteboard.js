function render () {
        requestAnimationFrame(render);
        renderer.render(scene, camera);
}
function startWhiteBoardAnimation(){
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        var cubegeometry = new THREE.CubeGeometry(1,1,1);
        var cubematerial = new THREE.MeshBasicMaterial( { color: 0x000000  } );
        var cube = new THREE.Mesh( cubegeometry, cubematerial );
        cube.rotation.x += 0.5
        cube.rotation.y += 0.5
        scene.add( cube );
        camera.position.z = 25;
        render();
}
function startWhiteBoard(){
        startWhiteBoardAnimation();
}

