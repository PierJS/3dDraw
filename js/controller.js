var phoneInformation = { "rotation": {"alpha":0 , "beta":0, "gamma":0} , "movement":{"x":0 , "y":0, "z":0}, "touches":[]}
function sendPhoneData(){
    return;
}

function handleOrientation(eventData) {
    phoneInformation.rotation.alpha = eventData.alpha;
    phoneInformation.rotation.beta = eventData.beta;
    phoneInformation.rotation.gamma = eventData.gamma;
  // Grab the acceleration including gravity from the results
}
function handleMovement(eventData){
     // Grab the acceleration from the results
    var acceleration = eventData.acceleration;
    phoneInformation.movement.x = acceleration.x;
    phoneInformation.movement.y = acceleration.x;
    phoneInformation.movement.z = acceleration.x;
}
function handleTouchStart(event){
    phoneInformation.touches=event.touches
}
function startController(){
        window.setInterval(sendPhoneData, 500);
}       
window.addEventListener('deviceorientation', handleOrientation);
window.addEventListener('touchstart', handleTouchStart);
window.addEventListener('devicemotion', handleMovement);

