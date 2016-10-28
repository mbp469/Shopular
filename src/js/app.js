    angular
    .module('inventory', ['ngRoute','LocalStorageModule'])

    .config(function($routeProvider) {
      $routeProvider
      .when("/", {
        templateUrl:"views/main.html",
        controller: 'InventoryController as inventory'
      })
      .when("/edit", {
        templateUrl:"views/edit.html",
        controller: 'InventoryController as inventory'
      });
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

    })
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
      }

    });
