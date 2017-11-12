"use strict";

function isCurrentPageWatchPage() {
	return (window.location.pathname === '/watch');
}

// FIXME: rename
function sendMessageToEventPageIfNewVideo() {
	if (!isCurrentPageWatchPage()) {
		return;
	}

	const videoInformation = VideoInformation.getVideoInformationIfNew();

	if (videoInformation === null) {
		log("Video unchanged since last notification.");
		return;
	}
	else {
		log(`Video changed, sending message ${JSON.stringify(videoInformation)}`);	
		chrome.runtime.sendMessage(videoInformation);
	}
}

function main() {
	log("Successfully loaded YoutubeNotifications.");
	setInterval(sendMessageToEventPageIfNewVideo, 1000);
}

main();