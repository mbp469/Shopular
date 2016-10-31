"use strict";

angular.module('inventory')
.controller('LoginController', function(loginService){
  this.loginUser = function(user,pw){
    this.userObj = loginService.setUser(user,pw);
    console.log(this.userObj.userName);
  }
})
.controller('SortController', function(dataService,localStorageService){
    this.sortType     = 'name'; // set the default sort type
    this.sortReverse  = false;  // set the default sort order
})

.controller('InventoryController', function($scope,dataService,localStorageService) {

  dataService.getItemsFromLocalStorage(function() {

  });

  dataService.getItems(function(res){
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
    console.log('controller.addItem()');
  };
  $scope.updateItem = function(item, index) {
    dataService.updateItem();
    $scope.allItems.splice(index,1,item);
    localStorageService.set('localStorageItems', $scope.allItems);
    console.log('in controller updateItem');
  };
  $scope.clearForm = function(){
    localStorage.clear();
  };

  $scope.tax = .0575;
  $scope.saleImg = "src/images/sale.png";
  this.isOnSale = function(item){
    return item.discount > 0;
  };

  this.adjustPrice = function(item){
    var adjustedPrice = item.price - item.discount;
    var taxAmount = adjustedPrice * $scope.tax;
    adjustedPrice += taxAmount;
    return adjustedPrice.toFixed(2);
  };

});
