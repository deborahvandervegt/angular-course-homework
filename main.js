(function () {
    'use strict';

    angular
            .module('groceriesApp', [])
            .controller('ingredientController', ingredientController);

    function ingredientController() {
        var vm = this;

        vm.name = '';
        vm.ingredientName = '';

        vm.addIngredientToList = function () {
            vm.name = vm.ingredientName;
            
            var ingredients = [];
            
            for(var i = 0; i < vm.name.length; i++) {
                ingredients += vm.name[i];
            }
            console.log(ingredients);
            return ingredients;
        }

    }

})();