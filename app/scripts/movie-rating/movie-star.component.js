(function() {
    'use strict';

    var module = angular.module('movieRating');
    function buildEntries(value,max) {
        var entries = [];
        for (var i = 0; i <= max; i++){
            var icon = i <= value ? "glyphicon-star" : "glyphicon-star-empty";
            entries.push(icon);
        }
        return entries;
    }
    module.component("movieStar", {
        templateUrl: "scripts/movie-rating/movie-star.component.html",
        bindings: {
            star: "<",
            max: "<",
            setRating: "&"
        },
        controllerAs: "model",
        controller: function () {
            var model = this;
            model.$onInit = function () {

                model.entries = buildEntries(model.star, model.max);
            };
            model.$onChanges = function () {
                model.entries = buildEntries(model.star, model.max);
            };
        }
    });
})();