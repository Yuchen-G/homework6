var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down to " + video.playbackRate);
	video.playbackRate *= 0.9;
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speed up to "+ video.playbackRate);
	video.playbackRate *= 1.1;
});

document.querySelector("#skip").addEventListener("click", function(){
	if (video.duration > video.currentTime + 5) {
		video.currentTime += 5;
		console.log("skip to " + video.currentTime +" s");
	} else {
		video.currentTime = 0;
		console.log("go back to " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("muted = " + video.muted);
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("volume changed to " + video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	document.querySelector("#myVideo").setAttribute('class', 'oldTime');
	console.log("set video to Old style");
});

document.querySelector('#original').addEventListener("click", function() {
	document.getElementById('myVideo').removeAttribute('class', 'oldTime');
	console.log("set video to Original style");
});