// MODULE - ng-app
// angularApp is the module name for your application, you can also make use of in-built angular modules in the array argument. Meaning these are dependency modules required for your module 'angularApp'
// For example, I want to use 'message' module from angularJS. include the angularjs-message.js in your html and add the module name 'ngMessages' in the array. Now all the features from 'ngMessages' module is available to your module 'angularApp'
// We will see simple demo on form validation using 'ngMessages' module
 var angularApp = angular.module('angularApp', ['ngMessages']);

// default
//var angularApp = angular.module('angularApp', []);



// CONTROLLERS - ng-controller - $scope is object injected by AnjularJS (dependency injection) $ is nothing but the variable like _ or something else
// All the angularjs services are starts with dollar sign $ - $scope is one of the service
// $log is another service provided by angularjs. there are different services provided by angular js which can be referred in angular API
angularApp.controller('mainController', function ($scope, $log, $filter) {

    // we can add variables to the scope
    $scope.name = 'Henry Ford';

    // we can even add functions to $scope
    $scope.getname = function(){
        return 'Sachin';
    }

    // call the function
    $scope.getname();

    console.log($scope);

    //instead of using console.log, we can user angular js service $log
    $log.log("This is log message");
    $log.warn("This is warning message");
    $log.debug("This is debug message");
    $log.info("This is information message");
    $log.error("This is error message");

    //using another angularjs built-in service $filer
    $scope.firstName = 'Johnson';
    $scope.formattedFirstName = $filter('uppercase')($scope.firstName);

    $log.info($scope.firstName);
    $log.info($scope.formattedFirstName);

    var lastName = "Mistry";
    var formattedLastName = $filter('uppercase')(lastName)

    $log.info(lastName);
    $log.info(formattedLastName);


});



//Javascript function and string

var searchPeople = function(firstName, lastName, age){
    return 'Dummy Name';
}

console.log("Calling the function -->"+searchPeople());

console.log("Calling the varaiable retunrs the entire function as String-->"+searchPeople);

//angular is object from angular.js
// it parses the function and provides it as array of strings
console.log(angular.injector().annotate(searchPeople));


