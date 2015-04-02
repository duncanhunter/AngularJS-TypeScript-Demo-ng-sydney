module app.services {
    'use strict';

    export interface IBeer {
        id: number;
        name: string;
        colour: string;
        hasTried: string;
    }

   export interface IBeerService {
        getBeers(): ng.IPromise<IBeer[]>;

    }

    class BeerService implements IBeerService{
        beers: IBeer[];

        static $inject = ['$http']
        constructor(private $http:ng.IHttpService) {
        }

        getBeers(): angular.IPromise<IBeer[]> {
            return this.$http.get('/api/beer')
                .then((response: ng.IHttpPromiseCallbackArg<IBeer[]>): IBeer[]=> {
                return <IBeer[]>response.data;
                });
        }
    }

    angular
        .module('app')
        .service('app.services.BeerService', BeerService);

}