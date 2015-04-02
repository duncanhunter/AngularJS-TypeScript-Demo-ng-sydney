var app;
(function (app) {
    var services;
    (function (services) {
        'use strict';
        var BeerService = (function () {
            function BeerService($http) {
                this.$http = $http;
            }
            BeerService.prototype.getBeers = function () {
                return this.$http.get('/api/beer').then(function (response) {
                    return response.data;
                });
            };
            BeerService.$inject = ['$http'];
            return BeerService;
        })();
        angular.module('app').service('app.services.BeerService', BeerService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));

//# sourceMappingURL=../services/beer.service.js.map