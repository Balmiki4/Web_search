// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the search button
  var searchBtn = document.getElementById("searchbtn");

  // Add event listener to the search button
  searchBtn.addEventListener("click", function () {
    // Get the search query from the input field
    var query = document.querySelector('input[name="searchbox"]').value;

    // Call the performSearch function with the search query
    performSearch(query);
  });
});

// Function to handle the JSONP response
function handleResponse(response) {
  var resultsContainer = document.getElementById("web-content");
  resultsContainer.innerHTML = "";
  var items = response.items;
  if (items) {
    items.forEach(function (item) {
      var resultHTML = "<div>";
      resultHTML +=
        '<a href="' +
        item.link +
        '" target="_blank"><b>' +
        item.title +
        "</b></a><br/>" +
        item.snippet +
        "<div/>";
      resultsContainer.innerHTML += resultHTML;
    });
  }
}

// Function to perform search
function performSearch(query) {
  var script = document.createElement("script");
  script.src =
    "https://www.googleapis.com/customsearch/v1?key=AIzaSyDmzZS6T8pgdF5jod7uARNGsVq1WP70fDA&cx=47cb434d820dd4982&q=" +
    encodeURIComponent(query) +
    "&callback=handleResponse";
  document.body.appendChild(script);
}
