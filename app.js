angular.module('potionBook', [])
  .controller('BookController', function($http) {
    var book = this;
    $http.get("https://potion-making.herokuapp.com/all-data")
      .then(function(response) {
	book.recipes = response.data;
      });
    $http.get("https://potion-making.herokuapp.com/all-paradigms")
      .then(function(response) {
	book.paradigms = response.data;
      });
    $http.get("https://potion-making.herokuapp.com/all-types")
      .then(function(response) {
	book.types = response.data;
      });
    $http.get("https://potion-making.herokuapp.com/all-uses")
      .then(function(response) {
	book.uses = response.data;
      });
    book.getFilters = function(userInput) {
      if(userInput == 'paradigms'){ book.filters = book.paradigms; }
      else if(userInput == 'types'){ book.filters = book.types; }
      else if(userInput == 'uses'){ book.filters = book.uses; }
    }

    book.selectRecipes = function(filterOption){
      if(book.paradigms.indexOf(filterOption) != -1){
	console.log(1);
    	book.recipes = book.recipes.filter(function(e){
    	                 e.paradigm == filterOption;
	               });
      }
      else if(book.types.indexOf(filterOption) != -1){
	console.log(2);
    	book.recipes = book.recipes.filter(function(e){
    	                 e.type == filterOption;
	               });
      }
      else if(book.uses.indexOf(filterOption) != -1){
	console.log(3);
    	book.recipes = book.recipes.filter(function(e){
    	                 e.use.indexOf(filterOption);
	               });
      }
    }

  });
