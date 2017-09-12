(function () {
    'use strict';

    angular
            .module('groceriesApp', [])
            .controller('ingredientController', ingredientController);

    function ingredientController() {
        var vm = this;
        var ingredients = [];

        vm.name = '';
        vm.ingredientName = '';

        vm.addIngredientToList = function () {
            vm.name = vm.ingredientName;

            ingredients[ingredients.length++] = vm.name;
        }

        vm.getIngredientList = function () {
            if (ingredients.length > 0) {
                return ingredients;
            }

            return '';
        }

    }

})();