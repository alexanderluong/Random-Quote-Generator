var quotes = [];
var index = 0;

$(document).ready(function() {

  $.ajax({
    dataType: "jsonp",
    type: "GET",
    jsonpCallback: "callback",
    url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&_jsonp=callback",
    success: function(json) {
      quotes = json;
      randomQuote();
    },
    failure: function() {
    	$("#quoteBox").html("<p>" + "Quotes could not be retrieved." + "</p>");
	}
  });

  $("#quoteButton").on("click", function() {
    index = generateIndex();
    randomQuote();
  });

  function randomQuote() {
    if (quotes.length > 0) {
      index = generateIndex();
      $("#quoteBox").html("<p>" + quotes[index].content + "</p>" + "<br><p> - " + quotes[index].title + "</p>");
    } 
  }

  function generateIndex() {
  	return Math.floor(Math.random() * 40);
  }
});
