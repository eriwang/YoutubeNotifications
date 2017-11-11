"use strict";

// these selectors will likely change as YouTube changes its interface
const VIDEO_TITLE_SELECTOR = "#info-contents .title";
const VIDEO_UPLOADER_SELECTOR = "#meta-contents #owner-name";

function getSingleMatchingNodeText(selector) {
	const matchingNodes = document.querySelectorAll(selector);
	if (matchingNodes.length != 1) {
		throw `Number of nodes matching "${selector}" is not equal to 1 (${matchingNodes.length})`;
	}

	return matchingNodes[0].textContent;
}

function getVideoTitle() {
	return getSingleMatchingNodeText(VIDEO_TITLE_SELECTOR);
}

function getVideoUploader() {
	return getSingleMatchingNodeText(VIDEO_UPLOADER_SELECTOR);
}

function main() {
	log("Successfully loaded YoutubeNotifications.");

	setInterval(function() {
		const message = {
			title: getVideoTitle(),
			uploader: getVideoUploader()
		};
		log(`Sending message "${message}" to event page`);
		
		chrome.runtime.sendMessage(message);
	}, 5000);
}

main();