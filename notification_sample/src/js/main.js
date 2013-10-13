var notID = 0;

window.addEventListener("load", function() {
  console.log('load');
  document.getElementById("button1").addEventListener("click", doNotify);

  // set up the event listeners
  chrome.notifications.onClosed.addListener(notificationClosed);
  chrome.notifications.onClicked.addListener(notificationClicked);
  chrome.notifications.onButtonClicked.addListener(notificationBtnClick);
});

var options = {
  type: "basic",
  title: "日本語のタイトル",
  message: "メッセージ",
  expandedMessage: "これはどこに出ているの？"
};

function doNotify(evt) {
  console.log(evt);
  options.priority = 2;

  options.buttons = [];
  options.iconUrl = "../image/inbox-64x64.png";
  chrome.notifications.create("id" + notID++, options, creationCallback);
}

function creationCallback(notID) {
  console.log("Succesfully created " + notID + " notification");
}

// Event handlers for the various notification events
function notificationClosed(notID, bByUser) {
  console.log("The notification '" + notID + "' was closed"
      + (bByUser ? " by the user" : ""));
}

function notificationClicked(notID) {
  console.log("The notification '" + notID + "' was clicked");
}

function notificationBtnClick(notID, iBtn) {
  console.log("The notification '" + notID + "' had button " + iBtn
      + " clicked");
}