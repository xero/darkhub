var link = document.createElement('link');
link.href =  chrome.extension.getURL('css/darkhub.min.css');
link.rel = 'stylesheet';
head = document.getElementsByTagName ("head")[0] || document.documentElement;
head.insertBefore(link, head.firstChild);
