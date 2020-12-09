'use strict';
(function () {
	console.log('Hello world');
	const videoEl = document.getElementById('video');
	const btn = document.getElementById('btn');

	// Promt to select media stream, pass to video element, then play
	async function selectMediaStream() {
		try {
			const mediaStream = await navigator.mediaDevices.getDisplayMedia();
			console.log(mediaStream);
			videoEl.srcObject = mediaStream;
			videoEl.onloadedmetadata = () => {
				videoEl.play();
			};
		} catch (error) {
			//catch error here
			console.log(error);
			throw error;
		}
	}

	btn.addEventListener('click', async () => {
		//disable
		btn.disabled = true;
		// start picture to picture
		await videoEl.requestPictureInPicture();
		btn.disabled = false;
	});
	// On load
	selectMediaStream();
})();
