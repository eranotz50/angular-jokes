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
            var url = String.format('{0}categories',icndbUrl);    

            return new Promise(function(resolve,reject){
                $http.get(url)
                    .then(function(response){

                        if(response.status !== 200){
                            reject('Error getting resource -> ' + url);
                        }
                        else{
                            resolve(response.data.value);    
                        }
                    })
                    .catch(function(err){
                        reject('Error from -> '  + url + '\n'  + JSON.stringify(err))
                    })
            }) 
        },
        getJokes : function(category){

            return new Promise(function(resolve,reject){
                var url = String.format('{0}jokes/random/10?limitTo=[{1}]',icndbUrl,category);

                $http.get(url)
                    .then(function(response){

                        if(response.status !== 200){
                            reject('Error getting resource -> ' + url);
                        }
                        else{
                            resolve(response.data.value);    
                        }
                    })
                    .catch(function(err){
                        reject('Error from -> ' + url + ' \n'  + JSON.stringify(err))
                    })
            }) 

        }

    }

}])


