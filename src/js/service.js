  "use strict";

angular.module('inventory')

.service('dataService',function($http,localStorageService) {


  this.getItemsFromLocalStorage = function(){
    return localStorageService.get('localStorageItems');
  };

  this.getItems = function(callback) {
    $http.get('src/mock/items.json').then(callback);
  };

  this.deleteItem = function(item){
    alert("Deleted " + item.name + " from inventory.");
  };

  this.addItem = function(item) {
    console.log('dataService.addItem()');
    return item;
  };

  this.updateItem = function(item,$index) {
    console.log('dataService: updateItem');
  };

});
