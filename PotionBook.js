$( document ).ready(function() {
  console.log( "HELLO!" );
  getAllData();
});


function getAllData() {
  // Get all program. languages info
  $.get(//"https://potion-making.herokuapp.com/all-data"
	"http://localhost:5000/all-data"
	{ signature: authHeader }).done(function(data){ var allData = data;
							for (i = 0; i < allData.length; i++){
							  console.log(allData[i]);
							}
						      }
				       )
}
