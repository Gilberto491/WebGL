window.addEventListener('DOMContentLoaded', ()=>{

    const canvas = document.getElementById('renderCanvas')
    const engine = new BABYLON.Engine(canvas, true)
    const scene = new BABYLON.Scene(engine)
    const camera = new  BABYLON.FreeCamera('camera', new BABYLON.Vector3(0,0,-15), scene);
    const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0,5,0), scene);

    const elipse1 = BABYLON.MeshBuilder.CreateSphere("elipse1", {diameterX: 5, diameterY: 2.5, diameterZ:2.5},scene);
        elipse1.position.x = -4;
        elipse1.position.y = -2;
        elipse1.position.z = 0;

    const elipse2 = BABYLON.MeshBuilder.CreateSphere("elipse2", {diameterX: 2.5, diameterY: 5, diameterZ: 2.5},scene);
        elipse2.position.x = 0;
        elipse2.position.y = 0;
        elipse2.position.z = 0;
            
    camera.attachControl(canvas);

    engine.runRenderLoop(()=>{
        scene.render();

    });
});