$( document ).ready(function() {
  console.log( "HELLO!" );
  var allData = getAllData();
  console.log(typeof allData)
  console.log( "Bye!" );
});


function getAllData() {
  // Get all program. languages info
  $.getJSON(//"https://potion-making.herokuapp.com/all-data"
    "http://localhost:5000/all-data",
    function( data ){
      data;
    });
    // .done(function(data){
    // 	 data;
    //    });
}
