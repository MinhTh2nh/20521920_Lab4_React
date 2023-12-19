var Promise = require("Promise");

function fetchModel(url) {
  return new Promise(function (resolve, reject) {
    url = "http://localhost:3000" + url;
    console.log(url);
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();
    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve({ data: JSON.parse(request.responseText) });
        } else {
          reject({ status: request.status, statusText: request.responseText });
        }
      }
    };
  });
}

export default fetchModel;
