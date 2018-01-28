var quoteTable = [];

function randomQuote() {
  var index = Math.floor(Math.random() * 20);
    $("#quoteBox").html("<p>" + quoteTable[index].content + "</p>" + "<br><p> - " + quoteTable[index].title + "</p>");
}

$(document).ready(function() {
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=20", function(json) {
    quoteTable = json;
    randomQuote();
  });
  
  $("#quoteButton").on("click", function() {
    index = Math.floor(Math.random() * 15);
    randomQuote();
  });
});
