/**
 * Created by Niyas on 12/12/2016.
 */

/*var angularApp = angular.module('angularApp', []);
angularApp.controller('mainController', function ($scope, $log, $filter) {
        console.log($scope);
});*/

// When we are minify this JS file for the above lines, then we get like below.
// Minified version will remove all the spaces, carriage return and long variable names, so that it can be downloaded faster.
// But when the variables like $scope, $log, $filter are changes for 1, a, n angular jst couldn't identify and throw error.
//var angularApp=angular.module("angularApp",[]);angularApp.controller("mainController",function(l,a,n){console.log(l)});

// ERROR:
/*angular.js:10627Error: [$injector:unpr] http://errors.angularjs.org/1.3.0-rc.1/$injector/unpr?p0=lProvider%20%3C-%20l
    at angular.js:38
at angular.js:3926
at Object.d [as get] (angular.js:4059)
at angular.js:3931
at d (angular.js:4059)
at Object.e [as invoke] (angular.js:4091)
at E.instance (angular.js:7729)
at angular.js:7006
at r (angular.js:339)
at z (angular.js:7005)*/

// In order to avoid this error, specify the angular JS specific variables as a String in the array.
// NOTE: the parameter order is important here
/*var angularApp = angular.module('angularApp', []);
 angularApp.controller('mainController', ["$scope","$log","$filter",function ($scope, $log, $filter) {
 console.log($scope);
}]);*/

// Minified version of the above JS where the angular JS services are declared as String in the array.
// Below minified version is working fine
var angularApp=angular.module("angularApp",[]);angularApp.controller("mainController",["$scope","$log","$filter",function(l,o,a){console.log(l)}]);