const http = require('http');
const PORT = 80;

const urls = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=n2bKLqUKb9w',
]
const numUrls = urls.length-1;
var index = 0;

http.createServer(function(request, response) {
  if (index >= numUrls) {
    index = 0;
  }
  else {
    index += 1;
  }
  let url;
  try {
    url = urls[index];
  }
  catch {
    url = urls[0];
  }
  response.writeHead(302, {'Location': url});
  response.end();
}).listen(PORT);
