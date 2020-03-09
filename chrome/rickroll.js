const urls = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=n2bKLqUKb9w'
];

let index = 0;

function getUrl() {
  console.log(index);
  if (index === 1) {
    index = 0;
    return urls[index]
  }
  else {
    index = 1;
    return urls[index]
  }


}

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      redirectUrl: getUrl()

    }
  },
  {
    urls: ["<all_urls>"],
    types: ["main_frame"],
  },
  ["blocking"]
);

// chrome.storage.local.get("roll_time", function(item) {
//   console.log(item);
// });
