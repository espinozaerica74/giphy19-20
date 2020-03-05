/* global $ */

console.log('data');

$('button').click(function(){
   var input = $("input").val();
   var url = "https://api.giphy.com/v1/gifs/search?rating=pg&api_key=dc6zaTOxFJmzC&q=" + input;
  
  fetch(url)

  .then(function(response) {
        return response.json();
  })
  .then(function(data) {
        // function body
       
        console.log(data.data[0].images.original.url);
        var originalLink= data.data[0].images.original.url;
        $("body").append(`<img src="${originalLink}">`);
       
    
        });
      

    
});