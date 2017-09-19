(function () {
    'use strict';

    angular
            .module('groceriesApp')
            .filter('translate', translate);

    function translate() {

        return translateFn;

        function translateFn(category) {
            if (category == "vegetables") {
                return 'Groente';
            }
            else if (category == "fruit") {
                return 'Fruit';
            } 
            else if (category == "meat") {
                return 'Vlees';
            } 
            else if (category == "fish") {
                return 'Vis';
            } 
            else if (category == "grains") {
                return 'Granen';
            }
            else {
                return 'Overige';
            }
        }
    }

})();
