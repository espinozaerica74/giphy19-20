/* global $ */

console.log('data');

$('button').click(function(){
  fetch("https://api.giphy.com/v1/gifs/search?rating=pg&api_key=dc6zaTOxFJmzC&q=puppy")
  .then(function(response) {
        return response.json();
  })
  .then(function(data) {
        // function body
        console.log(data.data[0].images.original.url);
        var originalLink= data.data[0].images.original.url;
        
        });
      

    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});