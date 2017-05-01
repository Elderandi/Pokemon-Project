angular.module('pokeFightClub')
.service('pokeService', function($http){

this.getPokemon = function(){
return $http({
method: 'GET',
url: 'http://pokeapi.co/api/v2/pokemon/?limit=649'
});
};

// (Input 649 for all pokemon with front and back images)
// (Input 783 for all pokemon with back images)
// (Input 802 for all pokemon)

this.getPokemonPics = function(pokeName){
return $http({
method: 'GET',
url: 'http://pokeapi.co/api/v2/pokemon/'+pokeName
});
};
});