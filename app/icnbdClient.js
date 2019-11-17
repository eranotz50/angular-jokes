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
            return new Promise(function(resolve,reject){
                $http.get(icndbUrl + 'categories')
                    .then(function(response){

                        if(response.status !== 200){
                            reject('Error getting resource -> ' + icndbUrl + 'categories');
                        }
                        else{
                            resolve(response.data.value);    
                        }
                    })
                    .catch(function(err){
                        reject('Error from -> '  + icndbUrl + 'categories \n'  + JSON.stringify(err))
                    })
            }) 
        }

    }

}])


