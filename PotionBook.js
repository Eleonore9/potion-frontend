$( document ).ready(function() {
  console.log( "HELLO!" );
  getAllData();
});


function getAllData() {
  // Get all program. languages info
  $.get("http://potion-making.herokuapp.com/all-data").done(function(data)
							    { var allData = data;
							      allData;})
}
