

    angular
    .module('inventory', ['ngRoute','LocalStorageModule'])

    .config(function($routeProvider) {
      $routeProvider
      .when("/", {
        templateUrl:"views/login.html",
        controller: 'LoginController as login'
      })
      .when("/main", {
        templateUrl:"views/main.html",
        controller: 'InventoryController as inventory'
      })
      .when("/edit", {
        templateUrl:"views/edit.html",
        controller: 'InventoryController as inventory'
      });
    });
