chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        urlContains: 'npmjs.com/package/'
                    },
                }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                    urlContains: 'github.com'
                    },
                })
            ],
            actions: [
              new chrome.declarativeContent.ShowPageAction()
            ]
        }]);
    });
  });