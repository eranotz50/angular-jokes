//import angular from 'angular'

var app = angular.module('jokes', ['ui.router']);
app.constant('icndbUrl','http://api.icndb.com/');

var _$stateProvider = null;

app.config(function($stateProvider) {
  _$stateProvider = $stateProvider; 

  console.log('config...');

});

/*
.run(['$rootScope', '$state', 'authService', function ($rootScope, $state, authService) {


*/

app.run(['icnbdClient',function(icnbdClient){
  console.log('run...');

        icnbdClient.getCategories()
            .then(function(res){

             })
             .catch(function(err){

             });

}]);

/*app.run(['icndbClient',function(icndbClient){

      var categories = icndbClient.getCategories();

}]);*/
  



/*

    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }
  
    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);


*/
 

