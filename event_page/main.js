"use strict";

function processMessage(message) {
	const isValidMessage = ("title" in message && "uploader" in message);
	if (!isValidMessage) {
		log("Received invalid message");
		return;
	}

	log(`Received message ${JSON.stringify(message)}`);

	var notification = {
		type: "basic",
		iconUrl: "logo.png",
		title: message.title,
		message: message.uploader
	};
	chrome.notifications.create(notification);
}

chrome.runtime.onMessage.addListener(processMessage);