const getPackageName = url => {
    const parts = url.split('/').filter(Boolean);
    const [org, name] = parts[1].endsWith('npmjs.com')
        ? parts.slice(3, 5)
        : parts.slice(2, 4);
    return org.startsWith('@')
        ? `${org}/${name}`
        : name || org;
};
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
