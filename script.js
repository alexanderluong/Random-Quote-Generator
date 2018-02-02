var quotes = [];
var currentQuote = "";
var currentTitle = "";
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
      $("#twitterButton").css("pointer-events", "auto");
    },
    failure: function() {
      $("#quoteBox").html("<p>" + "Quotes could not be retrieved." + "</p>");
    }
  });

  // Generate a new quote when quote button is clicked
  $("#quoteButton").on("click", function() {
    index = generateIndex();
    randomQuote();
  });
  
  // Open a tweet with quote and title filled in
  $("#twitterButton").on("click", function() {
    $("#twitterButton").attr('href', "https://twitter.com/intent/tweet?text="+encodeURIComponent(currentQuote + "- " + currentTitle));
  });

  function randomQuote() {
    if (quotes.length > 0) {
      index = generateIndex();
      currentQuote = quotes[index].content;
      currentTitle = quotes[index].title;
      $("#quoteBox").html("<p>" + currentQuote + "</p>" + "<br><p> - " + currentTitle + "</p>");
    } 
  }

  function generateIndex() {
    return Math.floor(Math.random() * 40);
  }
  
});
