(function () {
    'use strict';

    angular
            .module('groceriesApp', [])
            .controller('ingredientController', ingredientController);

    ingredientController.$inject = ['ingredientsService'];

    function ingredientController(ingredientsService) {
        var vm = this;

        vm.ingredients = ingredientsService.get();
        vm.ingredientName = '';
        vm.ingredientCategory = '';

        vm.addIngredientToList = function () {
            vm.ingredients.push(
                    { name: vm.ingredientName, category: vm.ingredientCategory }
            );
        }

        vm.getIngredientList = function () {
            if (vm.ingredients.length > 0) {
                this.ingredients = ingredientsService.get();
            }

            return '';
        }

    }

})();