"use strict";

var VideoInformation = (function() {
	/*** PRIVATE ***/

	// these selectors will likely change as YouTube changes its interface
	const VIDEO_TITLE_SELECTOR = "#info-contents .title";
	const VIDEO_UPLOADER_SELECTOR = "#meta-contents #owner-name";

	var previousVideoInformation = {
		title: "",
		uploader: ""
	};

	function getSingleMatchingNodeText(selector) {
		const matchingNodes = document.querySelectorAll(selector);
		if (matchingNodes.length != 1) {
			throw `Number of nodes matching "${selector}" is not equal to 1 (${matchingNodes.length})`;
		}

		return matchingNodes[0].textContent;
	}

	function videoInformationHasChanged(videoInformation) {
		const titleChanged = (videoInformation.title != previousVideoInformation.title);
		const uploaderChanged = (videoInformation.uploader != previousVideoInformation.uploader);
		return (titleChanged || uploaderChanged);
	}

	/*** PUBLIC ***/

	function getVideoInformationIfNew() {
		const videoInformation = {
			title: getSingleMatchingNodeText(VIDEO_TITLE_SELECTOR),
			uploader: getSingleMatchingNodeText(VIDEO_UPLOADER_SELECTOR)
		};

		if (videoInformationHasChanged(videoInformation)) {
			previousVideoInformation = videoInformation;
			return videoInformation;
		}
		else {
			return null;
		}
	}

	return {
		getVideoInformationIfNew: getVideoInformationIfNew
	};
}());