(function() {
    'use strict';

    angular
        .module('classwork', [])
        .controller('HeaderController', function () {
            this.title = 'Hello';
            this.firstName = 'Greatest';
            this.lastName = 'Ever';
            this.greet = function() {
              return this.title +', '+ this.firstName +' '+ this.lastName;
            };
        });
})();
