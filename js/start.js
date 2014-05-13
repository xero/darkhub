var link = document.createElement('link');
link.href =  chrome.extension.getURL('css/darkhub.min.css');
link.rel = 'stylesheet';
document.documentElement.insertBefore(link);
