(function() {
    'use strict';

    var module = angular.module('movieRating', ['ngComponentRouter','ngAnimate']);
    module.value("$routerRootComponent", "movieApp");
    module.component("appAbout", {
        template: "This is about module"
    });
})();

