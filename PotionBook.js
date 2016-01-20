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
    for(i=0; i < data.length; i++){
      var name = '<button type="button" class="list-group-item">' + data[i].name + "</button>";
      var paradigm = '<div class="info hidden">' + data[i].paradigm + "</div>";
      $(".list-group").append(name);
      $(".description").append(paradigm);
    }
  })
  .fail(function(allData, textStatus, error) {
    console.log( "error" );
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  })
}


// "https://potion-making.herokuapp.com/all-data"
