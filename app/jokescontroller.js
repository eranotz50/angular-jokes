var app = angular.module('jokes');

app.controller('jokesCtrl',['$scope','icnbdClient' ,function($scope,icnbdClient) {

    $scope.onCategory = function(category){

        icnbdClient.getJokes(category).then(function(jokes){
             $scope.jokes = jokes;
             $scope.$apply();   
        })
        .catch(function(err){
            console.log(util.format("ERROR Getting jokes for category %s, Error -> %j",category,err));
         });
    };

    icnbdClient.getCategories().then(function(data){

        $scope.categories = data;
        $scope.$apply();
    
     })
     .catch(function(err){
        console.log('ERROR Getting Categories -> ' + err);
     });
}]);