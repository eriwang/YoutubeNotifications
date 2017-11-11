"use strict";

// these selectors will likely change as YouTube changes its interface
const VIDEO_TITLE_SELECTOR = "#info-contents .title";
const VIDEO_UPLOADER_SELECTOR = "#meta-contents #owner-name";

function log(text) {
	console.log(`[YTN] ${text}`);
}

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
	console.log("[YTN] Successfully loaded YoutubeNotifications.");

	setInterval(function() { 
		log(getVideoTitle()); 
	}, 1000);

	setInterval(function() {
		log(getVideoUploader());
	}, 1000);

	// TODO: move to a file that can actually create the notification
	// console.log("hello world!");

	// var n = {
	// 	type: "basic",
	// 	iconUrl: "logo.png",
	// 	title: "This...",
	// 	message: "...is a test"
	// };

	// chrome.notifications.create(n);
}

main();