function searchWikipedia(){
  let userInput = document.getElementById('keyword');
  let keyword = userInput.value;
  let searchURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
  let requestURL = searchURL + keyword;

  $.ajax({
    url: requestURL,
    dataType: "jsonp",
    success: function (data){
      createResults(data);
  }});
}

function createResults(jsonObj){
  for(var i = 0 ; i < 10; i++){
    var element = document.getElementById('results');

    var newDiv = document.createElement('div');
    newDiv.className = 'entry';

    var newH1 = document.createElement('h2');
    var newTitleNode = document.createTextNode(jsonObj[1][i]);
    newH1.appendChild(newTitleNode);

    var newP = document.createElement('p');
    var newTextNode = document.createTextNode(jsonObj[2][i]);
    newP.appendChild(newTextNode);

    element.appendChild(newDiv);
    newDiv.appendChild(newH1);
    newH1.appendChild(newP);
  }
}
