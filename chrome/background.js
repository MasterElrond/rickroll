const rickRollUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const rickRollLength = 212;

const cache = {
  rollTime:"0",
};

const includePattern = new RegExp('((porn)|(xxx)|(xvideo)|(chan))');

function getUrl() {
  if (parseInt(cache.rollTime) >=  rickRollLength) {
    cache.rollTime = "0";
  }
  return `${rickRollUrl}&t=${cache.rollTime}`;
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
  const change = changes.rollTime;
  if (change !== undefined) {
    cache.rollTime = change.newValue;
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.url.match(includePattern)) {
      return {
        redirectUrl: getUrl()
      }
    }
  },
  {
    urls: ["<all_urls>"],
    types: ["main_frame", "sub_frame"],
  },
  ["blocking"]
);
