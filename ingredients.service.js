(function() {
    'use strict';

    angular
        .module('groceriesApp')
        .service('ingredientsService', ingredientsService);

    function ingredientsService() {
        var ingredients = [];
        
        this.get = function() {
            return ingredients;
        };
    }
})();
