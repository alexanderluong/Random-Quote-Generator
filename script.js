var quotes = [];
var index = 0;

$(document).ready(function() {

  $.ajax({
    dataType: "jsonp",
    type: "GET",
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&_jsonp=mycallback",
    success: function(json) {
      console.log("json");
      quotes = json;
      randomQuote();
    }
  });

  $("#quoteButton").on("click", function() {
    index = Math.floor(Math.random() * 30);
    randomQuote();
  });
  
  if (quotes.length == 0) {
    $("#quoteBox").html("<p>" + "There are no quotes available right now." + "</p>");
  }

  function randomQuote() {
    if (quotes.length > 0) {
      console.log("Running random quote.");
      console.log(quotes);
      index = Math.floor(Math.random() * 30);
      console.log(index);
      $("#quoteBox").html("<p>" + quotes[index].content + "</p>" + "<br><p> - " + quotes[index].title + "</p>");
    } 
  }
});
