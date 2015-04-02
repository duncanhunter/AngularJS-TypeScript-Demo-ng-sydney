var app;
(function (app) {
    var beer;
    (function (beer) {
        var BeerController = (function () {
            function BeerController(beerService) {
                this.beerService = beerService;
                this.getBeers();
            }
            BeerController.prototype.getBeers = function () {
                var _this = this;
                return this.beerService.getBeers().then(function (data) {
                    return _this.beers = data;
                });
            };
            BeerController.$inject = ['app.services.BeerService'];
            return BeerController;
        })();
        angular.module('app').controller('app.beer.BeerController', BeerController);
    })(beer = app.beer || (app.beer = {}));
})(app || (app = {}));

//# sourceMappingURL=../beer/beer.controller.js.map