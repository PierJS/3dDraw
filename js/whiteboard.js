var lastClick = new THREE.Vector3(0, 0, 0);
var plane;
function render () {
        requestAnimationFrame(render);
        controls.update();    
        renderer.render(scene, camera);
}
var rectMesh;
function startWhiteBoardAnimation(){
    renderer = new THREE.WebGLRenderer({ antialiasing: true,alpha:true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000000);
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

material = new THREE.LineBasicMaterial({
        color: 0x000000,linewidth: 3, fog:true
});

function addPoint(x,y,z){
    var geometry = new THREE.Geometry();
    var vector = new THREE.Vector3(x,y,z);
    geometry.vertices.push(vector);
    geometry.vertices.push(lastClick);
    var line = new THREE.Line(geometry, material);
    lastClick=vector;
    scene.add(line);
}
function updatePlane(rectLength,rectWidth,z){
        if(rectMesh !== undefined){scene.remove(rectMesh)}
        rectShape = new THREE.Shape();
        rectShape.moveTo( 0,0 );
        rectShape.lineTo( 0, rectWidth );
        rectShape.lineTo( rectLength, rectWidth );
        rectShape.lineTo( rectLength, 0 );
        rectShape.lineTo( 0, 0 );
        rectGeom = new THREE.ShapeGeometry( rectShape );
        rectMesh = new THREE.Mesh( rectGeom, new THREE.MeshBasicMaterial( { color: 0x00FFFF,side:THREE.DoubleSide,transparent: true, opacity: 0.5} ) ) ;         
        rectMesh.position.z = z;
        scene.add( rectMesh );
}

function startWhiteBoard(){
    startWhiteBoardAnimation();
    updatePlane(100,100,100);
}

