//import angular from 'angular'

var app = angular.module('jokes', ['ui.router']);
app.constant('icndbUrl','http://api.icndb.com/'); //''

var _$stateProvider = null;

app.config(function($stateProvider) {
  _$stateProvider = $stateProvider; 

  console.log('config...');

});


app.run(['icnbdClient',function(icnbdClient){
  console.log('run...');

        icnbdClient.getCategories()
            .then(function(res){

                angular.forEach(res.value,category => {
                  var state = {
                    "name" : category,
                    "url": "/" + category,
                    "views": {}                                    
                  }

                  _$stateProvider.state(state.name, state);
                });
             })
             .catch(function(err){
                console.log('ERROR Getting Categories -> ' + err);
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
 

