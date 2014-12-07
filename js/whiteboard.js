lastClick = new THREE.Vector3(0, 0, 0);
function render () {
        requestAnimationFrame(render);
        controls.update();    
        renderer.render(scene, camera);
}

function startWhiteBoardAnimation(){
    renderer = new THREE.WebGLRenderer({ antialiasing: true,alpha:true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1200);
    camera.position.set(0, 0, 1200);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene = new THREE.Scene();
    var material = new THREE.LineBasicMaterial({
            color: 0x0000ff
    });

    controls = new THREE.TrackballControls( camera );

    controls.target.set( 0, 0, 0 )
    render();
}
function addPoint(x,y,z){
    var material = new THREE.LineBasicMaterial({
            color: 0x000000
    });
    var geometry = new THREE.Geometry();
    var vector = new THREE.Vector3(x,y,z);
    var axis = new THREE.Vector3(1,0,0);
    var angle = -(Math.PI /2);
    vector.applyAxisAngle(axis,angle);
    geometry.vertices.push(vector);
    geometry.vertices.push(lastClick);
    var line = new THREE.Line(geometry, material);
    lastClick=vector;
    scene.add(line);
}
function startWhiteBoard(){
        startWhiteBoardAnimation();
}

