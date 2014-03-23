if(!localStorage.darkhub) {
  setup(false);
}
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus") {
      sendResponse({data: localStorage.darkhub});
      alert('sent status');
    } else {
      sendResponse({});
      alert('sent nothing');
    }
});
function setup(enable) {
  localStorage.darkhub = enable;
}
Zepto(function($){
  $('#blaqueout').on('click', function() {
    var state = (!localStorage.darkhub) ? false : true;
    setup(state);
  });
});