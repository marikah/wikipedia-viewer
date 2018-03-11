function searchWikipedia(){

  let userInput = document.getElementById('keyword');
  let keyword = userInput.value;
  console.log(keyword);

  // Get placeholder JSON for testing
  var requestURL = 'https://jsonplaceholder.typicode.com/posts';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function (){
    var data = request.response;
    createResults(data);
  }

};

// Create elements for displaying results
function createResults(jsonObj){
  for(var i = 0 ; i < 10; i++){
    var element = document.getElementById('results');

    var newDiv = document.createElement('div');
    newDiv.className = 'entry';
    //newDiv.id = 'entry-' + i;

    var newH1 = document.createElement('h2');
    var newTitleNode = document.createTextNode(jsonObj[i].title);
    newH1.appendChild(newTitleNode);

    var newP = document.createElement('p');
    var newTextNode = document.createTextNode(jsonObj[i].body);
    newP.appendChild(newTextNode);

    element.appendChild(newDiv);
    newDiv.appendChild(newH1);
    newH1.appendChild(newP);
  }
};
