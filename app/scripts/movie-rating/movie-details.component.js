(function() {
    'use strict';

    var module = angular.module('movieRating');

    module.component("movieDetails", {
        templateUrl: 'scripts/movie-rating/movie-details.component.html',
        // $canActivate: function ($timeout) {
        //     return $timeout(function () {
        //         return true;
        //     },2000);
        // },
        $routeConfig: [
            { path: "/overview", component: "movieOverview", name: "Overview" },
            { path: "/cast", component: "movieCast", name: "Cast" },
            { path: "/director", component: "movieDirector", name: "Director" }

        ],
        controllerAs: 'model',
        controller: function () {
            var model = this;
            model.$routerOnActivate = function (next,previous) {
                console.log(next);
                model.id = next.params.id;
            };
        }
    });
    module.component("movieOverview", {
        template: "This is the overview"
    });
    module.component("movieCast", {
        template: "This is the cast"
    });
    module.component("movieDirector", {
        template: "This is info about the Director"
    });

})();


