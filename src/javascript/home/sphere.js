window.addEventListener('load', function () {
    var guiContainer = document.getElementById('gui');
    var width = Math.round(parseFloat(getComputedStyle(guiContainer).width));
    var height = Math.round(parseFloat(getComputedStyle(guiContainer).height));
    var canvas = document.getElementById('canvas');

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    var ball = {
        rotationX: -0.005,
        rotationY: -0.005,
        rotationZ: -0.005,
        zoom: 0
    };

    var gui = new dat.GUI({
        autoPlace: false,
    });

    guiContainer.appendChild(gui.domElement);
    gui.closed = true;

    gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.001);
    gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001);
    gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.001);
    gui.add(ball, 'zoom').min(-5).max(5).step(1);

    var renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });

    renderer.setClearColor(0x080808);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 5000);
    camera.position.set(0, 0, 1000);

    var light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    var geometry = new THREE.SphereGeometry(200, 35, 35);
    var material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true
    });

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function loop() {
        mesh.rotation.x += ball.rotationX;
        mesh.rotation.y += ball.rotationY;
        mesh.rotation.z += ball.rotationZ;
        mesh.position.z += ball.zoom;
        renderer.render(scene, camera);
        requestAnimationFrame(function () {
            loop();
        });
    }
    loop();
});





