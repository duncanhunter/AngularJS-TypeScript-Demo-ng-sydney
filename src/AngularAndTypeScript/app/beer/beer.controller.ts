module app.beer {

    import IBeer = services.IBeer;

    interface IBeerScope {
        getBeers(): ng.IPromise<IBeer[]>;
    }

    class BeerController implements IBeerScope {
        beers: any;

        static $inject = ['app.services.BeerService'];
        constructor(private beerService: services.IBeerService) {
            this.getBeers();
        }

        getBeers(): ng.IPromise<IBeer[]> {
            return this.beerService.getBeers()
                .then((data: ng.IHttpPromiseCallbackArg<IBeer[]>): IBeer[]=> {
                return this.beers = <IBeer[]>data;
            });
        }
    }

    angular.module('app')
        .controller('app.beer.BeerController', BeerController);
}