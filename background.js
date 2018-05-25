// Inspiré de l'extension "Youtube Remote"
// https://chrome.google.com/webstore/detail/youtube-remote/ololgenmdnakjpkcmphnllakhpbgcgdf

function getTabAndDispatchAction(action) {
  chrome.tabs.query({url: "https://podcloud.fr/*"}, function(tabs){
    var tab = tabs[0];
    var id = tab.id;
    var actionFile = action + '.js';
    chrome.tabs.executeScript(id, {file: actionFile});
  });
}

function play_pause(){
  getTabAndDispatchAction("pause");
}

chrome.commands.onCommand.addListener(function(command) {
  if (command === "next"){
    getTabAndDispatchAction("next");
  } else if (command === "pause") {
    getTabAndDispatchAction("pause");
  } 
});



//   "___update_url": "https://clients2.google.com/service/update2/crx",
//   "___content_security_policy": "connect-src http: https:; default-src 'self';",
