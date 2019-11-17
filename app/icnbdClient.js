//import angular from 'angular'


//http://www.icndb.com/api/

// /categories



/* icndbUrl */ 
angular
    .module("jokes")
    .factory('icnbdClient',['icndbUrl','$http',function(icndbUrl,$http){

        console.log('client factory -> ' + icndbUrl);
        
    return {

        getCategories : function(){
            return  $http.get(icndbUrl + 'categories');
        }

    }

}])


