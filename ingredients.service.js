(function() {
    'use strict';

    angular
        .module('groceriesApp')
        .service('ingredientsService', ingredientsService);

    function ingredientsService() {
        var ingredients = [
            {
                name: "Hero comfort plus",
                amount: "1",
                category: "other"
            },
            {
                name: "soorten fruit",
                amount: "3",
                category: "fruit"
            },
            {
                name: "soorten groente",
                amount: "3",
                category: "vegetables"
            },
            {
                name: "zak aardappels",
                amount: "1",
                category: "vegetables"
            },
            {
                name: "soorten beleg",
                amount: "3",
                category: "meat"
            },
            {
                name: "broden",
                amount: "2",
                category: "grains"
            },
            {
                name: "pak koffie",
                amount: "1",
                category: "other"
            },
            {
                name: "pakken kattenvoer",
                amount: "2",
                category: "other"
            },
            {
                name: "pak melk",
                amount: "1",
                category: "dairy"
            },
            {
                name: "doosje eieren",
                amount: "1",
                category: "other"
            },
            {
                name: "pakken kaas",
                amount: "2",
                category: "dairy"
            },
            {
                name: "pot griekse yoghurt",
                amount: "1",
                category: "dairy"
            },
            
        ];
        
        this.get = function() {
            return ingredients;
        };
    }
})();
