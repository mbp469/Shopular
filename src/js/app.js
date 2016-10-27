    angular
    .module('inventory', ['ngRoute','LocalStorageModule'])

    .config(function($routeProvider) {
      $routeProvider
      .when("/", {
        templateUrl:"views/main.html",
        controller: 'InventoryController'
      })
      .when("/edit", {
        templateUrl:"views/edit.html",
        controller: 'InventoryController'
      });
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
      };
      $scope.updateItem = function(item, index) {
        $scope.allItems.splice(index,1,item);
        dataService.updateItem();
        localStorageService.set('localStorageItems', $scope.allItems);
      }
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

    })
    .service('dataService',function($http,localStorageService) {

      this.storeItems = function(){
        localStorageService.set('localStorageItems', $scope.allItems);
      };

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
        return item;
      };

      this.updateItem = function(item,$index) {
        console.log('in update Item');
      }

    });
