

(function () {
    'use strict';

    // Usage:
    //
    // Creates:
    //

    angular
        .module('movieRating')
        .component('movieList', {

            templateUrl: 'scripts/movie-rating/movie-list.component.html',
            controllerAs: 'ctrl',
            controller: ["$http", ControllerController],
            bindings: {
                Binding: '=',
                "$router": "<"
            },
        });

    function fetchMovies($http) {
        return $http.get("/scripts/movie-rating/movies.json")
            .then(function (response) {
                return response.data;
            });
    }
    function ControllerController($http) {
        var ctrl = this;
        ctrl.movies = [];
        ctrl.message = 'this is my custom message';
        ctrl.changeMessage = function () {
            ctrl.message = 'I am changed';
        }

        ////////////////

        ctrl.$onInit = function () {
            fetchMovies($http).then(function (movies) {
                ctrl.movies = movies;
            });
        };
        ctrl.goTo = function (id) {
            ctrl.$router.navigate(["Details", { id: id },"Overview"]);
        }
        ctrl.setRating = function (movie, newRating) {
            movie.rating = newRating;
        }
        ctrl.upRating = function (movie) {
            console.log('upRating');
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };
        ctrl.downRating = function (movie) {
            console.log('downRating');
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        }
        ctrl.$onChanges = function (changesObj) { };
        ctrl.$onDestroy = function () { };
    }
})();

