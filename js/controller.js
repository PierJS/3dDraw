var phoneInformation = {"movement":{"x":0 , "y":0, "z":1},"touch":[0,0]}
function sendPhoneData(){
    sRTC.sendJSON(phoneInformation);
}
function handleMovement(eventData){
     // Grab the acceleration from the results
    var acceleration = eventData.acceleration;
    //INTEGRATE TO GET LOCATION
    phoneInformation.movement.z = acceleration.x;
}
function handleTouchStart(event){
    phoneInformation.touch[0]=event.changedTouches[0].pageX;
    phoneInformation.touch[1]=event.changedTouches[0].pageY;
}
function startController(){
        window.setInterval(sendPhoneData, 10);
}       
window.addEventListener('touchstart', handleTouchStart);
window.addEventListener('devicemotion', handleMovement);

