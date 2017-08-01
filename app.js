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
    book.getFilters = function(UserInput) {
      if(UserInput == 'paradigms'){ book.filters = book.paradigms; }
      else if(UserInput == 'types'){ book.filters = book.types; }
      else if(UserInput == 'uses'){ book.filters = book.uses; }
    }
  });
