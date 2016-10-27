    angular
    .module('inventory', ['ngRoute'])

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

    .controller('InventoryController', function($scope,dataService) {
      dataService.getItems(function(res){
        $scope.allItems = res.data;
      });

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
    .service('dataService',function($http) {
      this.getItems = function(callback) {
      $http.get('src/mock/items.json').then(callback)};
    });
