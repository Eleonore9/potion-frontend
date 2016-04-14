$( document ).ready(function() {

  // Get all info available
  $.getJSON( "https://potion-making.herokuapp.com/all-data", function() {
  }).done(function(data) {
    console.log( "ALL THE DATAZ!" );
    for(i=0; i < data.length; i++){
      var tuts = data[i].tutorials;
      var linksList = [];
      for(j=0; j < tuts.length; j++){
	var link = '<a href="' + tuts[j] + '">' + tuts[j] + '</a>';
	linksList.push(link);
      }
      var tutsLinks = linksList.join();

      var info = '<div class="language panel panel-default"><div class="name-label panel-heading"><h3>' + data[i].name +
	  '</h3></div><div class="info hidden panel-body"><p class="p-paradigm"><b>Paradigm</b>: ' + data[i].paradigm +
	  '</p><p class="p-use"><b>Use</b>: ' + data[i].use + '</p><p class="p-type"><b>Type</b>: ' + data[i].type +
	  '</p><p class="p-tutorials"><b>Tutorial(s)</b>: ' + tutsLinks + '</p></div></div>';
      $(".display-data").append(info);
    }
    // Display language info when clicking on the language name
    $(".display-data .language").click(function(){
      console.log("hi");
      if( $(this).find(".info.panel-body").hasClass("hidden") ){
	console.log("if")
	$(this).find(".info.hidden.panel-body").removeClass("hidden");
      } else {
	console.log("else");
	$(this).find(".info.panel-body").addClass("hidden");
      }
    });

  // Functionality of the filter buttons
  var allInfo = $(".display-data").find(".language .info");
  console.log("allInfo: ", allInfo);

  // Get all paradigms when clicking on the "paradigm" button
  $(".label.paradigm").click(function(){
    $.getJSON("https://potion-making.herokuapp.com/all-paradigms" , function() {
    }).done(function(data) {
      console.log( "All paradigms!" );
      $(".filters").empty();
      for(i=0; i < data.length; i++){ $(".filters")
				      .append('<button type="button" class="btn btn-default btn-paradigm">' + data[i] + '</button>')}

      // Filter by paradigm
      $(".filters .btn-paradigm").click(function() {
	console.log("Filter / paradigm");

	var selectedParadigm = $(this).text();
	console.log("selected paradigm: ", selectedParadigm);

	for(i=0; i < allInfo.length; i++){
	  var element = $(allInfo[i]);
	  if(element.attr("display") === "inline" && !element.text().contains(selectedParadigm)){
	    element.find(".language").attr("display", "none");
          }
	}
      });
    });
  });

  // Get all types when clicking on the "type" button
  $(".label.type").click(function(){
    $.getJSON("https://potion-making.herokuapp.com/all-types" , function() {
    }).done(function(data) {
      console.log( "All types!" );
      $(".filters").empty();
      for(i=0; i < data.length; i++){ $(".filters")
				      .append('<button type="button" class="btn btn-default btn-type">' + data[i] + '</button>')}

      // Filter by type
      $(".btn-type").click(function() {
	console.log("Filter / type");

	var selectedType = $(this).text();
	console.log("selected type: ", selectedType);

	for(i=0; i < allInfo.length; i++){
	  if(allInfo[i].attr("display") === "inline" && !allInfo[i].text().contains(selectedType)){
	    allInfo[i].find(".language").attr("display", "none");
	  }
	}
      });
    });
  });

  // Get all uses when clicking on the "use" button
  $(".label.use").click(function(){
    $.getJSON("https://potion-making.herokuapp.com/all-uses" , function() {
    }).done(function(data) {
      console.log( "All uses!" );
      $(".filters").empty();
      for(i=0; i < data.length; i++){ $(".filters")
				      .append('<button type="button" class="btn btn-default btn-use">' + data[i] + '</button>')}

      // Filter by use
      $(".btn-use").click(function() {
	console.log("Filter / use");

	var selectedUse = $(this).text();
	console.log("selected use: ", selectedUse);

	for(i=0; i < allInfo.length; i++){
	  if(allInfo[i].attr("display") === "inline" && !allInfo[i].text().contains(selectedUse)){
	    allInfo[i].find(".language").attr("display", "none");
	  }
	}
      });
    });
  });


  })
  .fail(function(allData, textStatus, error) {
    console.log( "error" );
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  });
 });
