function convertToSeconds(time) {
  let [minutes, seconds] = time.split(':');
  let result = parseInt(minutes)*60 + parseInt(seconds);
  return result.toString();
}

function getTime() {
  const time = document.getElementsByClassName("ytp-time-current")[0].innerHTML;
  return convertToSeconds(time);
}

window.onbeforeunload = function(event) {
  event.preventDefault();
  const time = getTime();
  if (time) {
    chrome.storage.sync.set({'rollTime': time});
  }
}
