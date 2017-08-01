angular.module('potionBook', [])
  .controller('BookController', function($http) {
    var book = this;
    $http.get("https://potion-making.herokuapp.com/all-data")
      .then(function(response) {
	book.recipes = response.data;
      });
  });
