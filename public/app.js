// Grab the articles as a json
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < 10; i++) {
      // Display the apropos information on the page
      $("#articles").append("<h4 id='article-title' data-id='" + data[i]._id + "' style='background-color: white; margin: 0px; padding: 2px;'> Title: " + data[i].title + "</h4>");
      $("#articles").append("<a id='article-link' target='_blank' data-id='" + data[i]._id + "' href='" + data[i].link + "' style='background-color: white; color: #48a3b8; margin: 0px; padding: 2px;'>Click here for original article</a><br /></div>"); 
      $("#articles").append("<br />");
      //   $( "a" ).after( $( "</div>" ) );

    //   $("#articles").append("<div class='article-display shadow' style='background-color: white; padding: 10px; margin: 20px;'>");
    //   $("#articles").append("<h4 id='article-title' data-id='" + data[i]._id + "'> Title: " + data[i].title + "</h4><br />");
    //   $("#articles").append("<a id='article-link' target='_blank' data-id='" + data[i]._id + "' href='" + data[i].link + "' style='color: #48a3b8;'>Click here for original article</a><br /></div>");
      
    
    };
});
  
  
  // Whenever someone clicks an h4 tag
  $(document).on("click", "h4", function() {
    // Empty the notes from the note section
    $("#notes").empty();
    // Save the id from the p tag
    var thisId = $(this).attr("data-id");
  
    // Now make an ajax call for the Article
    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
      // With that done, add the note information to the page
      .then(function(data) {
        console.log(data);
        // The title of the article
        $("#notes").append("<h2>" + data.title + "</h2><br>");
        // An input to enter a new title
        $("#notes").append("<label id='title'>Title of Note: </label><br>");
        $("#notes").append("<input id='titleinput' class='form-control' name='title' ><br><br>");
        // A textarea to add a new note body
        $("#notes").append("<label id='message'>Message: </label><br>");
        $("#notes").append("<textarea id='bodyinput' class='form-control' name='body'></textarea><br><br>");
        // A button to submit a new note, with the id of the article saved to it
        $("#notes").append("<button data-id='" + data._id + "' id='savenote' class='btn btn-info'>Save Note</button>");
  
        // If there's a note in the article
        if (data.note) {
          // Place the title of the note in the title input
          $("#titleinput").val(data.note.title);
          // Place the body of the note in the body textarea
          $("#bodyinput").val(data.note.body);
        }
      });
  });
  
  // When you click the savenote button
  $(document).on("click", "#savenote", function() {
    // Grab the id associated with the article from the submit button
    var thisId = $(this).attr("data-id");
  
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
        // Value taken from title input
        title: $("#titleinput").val(),
        // Value taken from note textarea
        body: $("#bodyinput").val()
      }
    })
      // With that done
      .then(function(data) {
        // Log the response
        console.log(data);
        // Empty the notes section
        $("#notes").empty();
      });
  
    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");
  });