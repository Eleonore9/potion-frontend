$( document ).ready(function() {
  console.log( "HELLO!" );
  getAllData();
  console.log( "BYE!" );
});


function getAllData() {
  // Get all programming languages info
  $.getJSON( "http://localhost:5000/all-data", function() {
  }).done(function(data) {
    console.log( "SUCCESS" );
    $.each( data, function( key, val ) {
      $(".list-group").append('<li class="list-group-item">' + val.name + "</li>");
    });
  })
  .fail(function(allData, textStatus, error) {
    console.log( "error" );
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  })
}


// "https://potion-making.herokuapp.com/all-data"
