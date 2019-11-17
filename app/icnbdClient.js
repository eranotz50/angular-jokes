//import angular from 'angular'


//http://www.icndb.com/api/

// /categories



function getCategories(){
    return ['Stam' , 'Chuck' , 'KnockKnock']
}
/* icndbUrl */ 
angular
    .module("jokes")
    .factory('icnbdClient',function(icndbUrl){

        console.log('client factory -> ' + icndbUrl);

    return {

        getCategories : getCategories

    }

})


