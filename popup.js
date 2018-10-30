const getPackageName = url => url.split('/').filter(Boolean).slice(0, 4).slice(-1);
const getBundlephobiaUrl = name => `https://bundlephobia.com/result?p=${name}&src=bundlephobia-extension`;
const getIframe = () => document.querySelector('iframe');

chrome.tabs.query({
    active: true,
    currentWindow: true
  }, ([currentTab]) => {
       const url = currentTab.url;
       const packageName = getPackageName(url);
       const iframe = getIframe();

       iframe.onload = () => {
           document.body.className = "";
           iframe.onload = null;
       };

       iframe.src = getBundlephobiaUrl(packageName);
  });
