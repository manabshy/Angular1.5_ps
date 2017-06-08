(function() {
    'use strict';

    var module = angular.module('movieRating');
    module.component("movieApp", {
        templateUrl: "/scripts/movie-rating/movie-app.component.html",
        $routeConfig: [
            { path: "/list", component: "movieList", name: "List" },
            { path: "/about", component: "appAbout", name: "About" },
            { path: "/detail/:id/...",component: "movieDetails",name:"Details"},
            { path: "/**",redirectTo: ["List"] }

        ]
    });
})();