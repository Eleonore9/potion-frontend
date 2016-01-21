$( document ).ready(function() {
  getAllData();
  
  $(".label.paradigm").click(function(){
    $.getJSON("https://potion-making.herokuapp.com/all-paradigms" , function() {
    }).done(function(data) {
      console.log( "SUCCESS!" );
      $(".filters").empty();
      for(i=0; i < data.length; i++){ $(".filters")
				      .append('<button type="button" class="btn btn-default">' + data[i] + '</button>')}
    });
  });

  $(".label.type").click(function(){
    $.getJSON("https://potion-making.herokuapp.com/all-types" , function() {
    }).done(function(data) {
      console.log( "SUCCESS!!" );
      $(".filters").empty();
      for(i=0; i < data.length; i++){ $(".filters")
				      .append('<button type="button" class="btn btn-default">' + data[i] + '</button>')}
    });
  });

  $(".label.use").click(function(){
    $.getJSON("https://potion-making.herokuapp.com/all-uses" , function() {
    }).done(function(data) {
      console.log( "SUCCESS!!!" );
      $(".filters").empty();
      for(i=0; i < data.length; i++){ $(".filters")
				      .append('<button type="button" class="btn btn-default">' + data[i] + '</button>')}
    });
  });
});


function getAllData() {
  // Get all programming languages info
  $.getJSON( "https://potion-making.herokuapp.com/all-data", function() {
  }).done(function(data) {
    console.log( "SUCCESS" );
    for(i=0; i < data.length; i++){
      var tuts = data[i].tutorials;
      var linksList = [];
      for(j=0; j < tuts.length; j++){
	var link = '<a href="' + tuts[j] + '">' + tuts[j] + '</a>';
	linksList.push(link);
      }
      var tutsLinks = linksList.join();
      //console.log(tutsLinks);
      var info = '<div class="language panel panel-default"><div class="name-label panel-heading"><h4>' + data[i].name + '</h4></div><div class="info hidden panel-body"> <b>Paradigm</b>: ' + data[i].paradigm + '<br><b>Use</b>: ' + data[i].use + '<br><b>Type</b>: ' + data[i].type + '<br><b>Tutorial(s)</b>: ' + tutsLinks + '</div></div>';
      $(".display-data").append(info);
    }
    $(".language").click(function(){
      $(".display-data").find(".info.panel-body").addClass("hidden");
      $(this).find(".info.hidden.panel-body").removeClass("hidden");
    });
  })
  .fail(function(allData, textStatus, error) {
    console.log( "error" );
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  })
}


// "https://potion-making.herokuapp.com/all-data"
// "http://localhost:5000/all-data"
