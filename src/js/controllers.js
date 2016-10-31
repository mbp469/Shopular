"use strict";

angular.module('inventory').controller('MainController', function($scope) {
    $scope.loggedUser = {
      username: null,
      time: null,
      pw: null
    };

}).controller('LoginController', function(dataService, UserMaker, $scope, $location) {
  this.username;
    this.create = function(user, pw) {
        var person = new UserMaker.create(user, pw);
        $scope.loggedUser.username = person.username;
        $scope.loggedUser.time = person.time;
        $location.path('main');
        return person;
    }
    this.getUser = function() {
      return $scope.loggedUser;
    }
    this.logout = function(){
      $scope.loggedUser.username = null;
      $scope.loggedUser.time = null;
      $scope.loggedUser.pw = null;
      $location.path('/');
    }

}).controller('SortController', function(dataService, localStorageService) {
    this.sortType = 'name'; // set the default sort type
    this.sortReverse = false; // set the default sort order
}).controller('InventoryController', function($scope, dataService, $location, localStorageService) {

    dataService.getItemsFromLocalStorage(function() {});

    dataService.getItems(function(res) {
        $scope.allItems = dataService.getItemsFromLocalStorage() || res.data;
    });

    $scope.deleteItem = function(item, index) {
        dataService.deleteItem(item);
        $scope.allItems.splice(index, 1);
        localStorageService.set('localStorageItems', $scope.allItems);
    };
    $scope.addItem = function(item) {
        dataService.addItem(item);
        $scope.allItems.unshift(item);
        localStorageService.set('localStorageItems', $scope.allItems);
        $location.path('main');
    };
    $scope.updateItem = function(item, index) {
        dataService.updateItem();
        $scope.allItems.splice(index, 1, item);
        localStorageService.set('localStorageItems', $scope.allItems);
        $location.path('main');
    };
    $scope.clearForm = function() {
        localStorage.clear();
        $location.path('/');
    };

    $scope.tax = .0575;
    $scope.saleImg = "src/images/sale.png";
    this.isOnSale = function(item) {
        return item.discount > 0;
    };

    this.adjustPrice = function(item) {
        var adjustedPrice = item.price - item.discount;
        var taxAmount = adjustedPrice * $scope.tax;
        adjustedPrice += taxAmount;
        return adjustedPrice.toFixed(2);
    };

});
