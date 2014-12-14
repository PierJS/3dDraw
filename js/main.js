sRTC.init({"debug":true});
sRTC.addEventListener('pc1LocalDescNeeded', function(e) {
        document.getElementById("offers").value = JSON.stringify(e);                        

	role="whiteboard";
})
sRTC.addEventListener('pc2LocalDescNeeded', function(e) {
        document.getElementById("offers").value = JSON.stringify(e);                        

	role="controller";
})
sRTC.addEventListener('channelConnected', function(e) {
        document.getElementById("offers").style.display = "none";                        
	if(role=="controller"){
		startController();	
	}
	else {
		startWhiteBoard();
	}
})
var role;

function whiteboardButton (){
        if( this.step === undefined){this.step=0}
        if(this.step==0){
                sRTC.createLocalOffer();
                document.getElementById("whiteboardButton").value="Accept Answer";
                document.getElementById("controllerButton").style.display = "none";
                this.step++;
        }
        else{
                sRTC.handleAnswerFromPC2(JSON.parse(document.getElementById("offers").value));
                document.getElementById("whiteboardButton").style.display = "none";
                document.getElementById("offers").style.display = "none";
        }
}
function controllerButton (){
        if( this.step === undefined){this.step=0}
        if(this.step==0){
		console.log(document.getElementById("offers").value);
                sRTC.handleOfferFromPC1(JSON.parse(document.getElementById("offers").value));
                document.getElementById("controllerButton").style.display="none";
                document.getElementById("whiteboardButton").style.display = "none";
        }
}
