console.log("hello world!");

var n = {
	type: "basic",
	iconUrl: "logo.png",
	title: "This...",
	message: "...is a test"
};

setInterval(function() {chrome.notifications.create(n)}, 5000);
