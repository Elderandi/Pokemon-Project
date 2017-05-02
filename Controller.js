angular.module('pokeFightClub')
  .controller('control', function($scope, pokeService) {

    $scope.poke1;
    $scope.poke2;
    $scope.winner;
    $scope.fightDone = false;

    $scope.getPokemon = function() {
      pokeService.getPokemon()
      .then(function(response) {
        $scope.pokemon = response.data.results;
      });
    };
    $scope.getPokemon();

    $scope.setPoke1 = function(pokemon) {
      $scope.poke1 = pokemon; 
      $scope.fightDone = false;
    };

    $scope.setPoke2 = function(pokemon) {
      $scope.poke2 = pokemon;
      $scope.fightDone = false;
      
    };

    $scope.fight = function() {
      if(!$scope.poke1 || !$scope.poke2 || $scope.poke1.name === $scope.poke2.name) {
        return alert('Fight command disabled! Choose a match with two different fighters.');
      }

      var num = Math.floor(Math.random() * (2)) + 1;

      if (num === 1) {
        $scope.winner = $scope.poke1;
        $scope.enabled1 = true;
      } else {
        $scope.winner = $scope.poke2;
        $scope.enabled2 = true;
      }
      $scope.fightDone = true;
    };

$scope.get1Pics = function(pokeName) {
    pokeService.getPokemonPics(pokeName).then(function(response){
        $scope.enabled1=false;
        $scope.enabled2=false;
        $scope.pokePics1 = response.data.sprites.front_default
        console.log(response);
    })
}

$scope.get2Pics = function(pokeName) {
    pokeService.getPokemonPics(pokeName).then(function(response){
        $scope.enabled1=false;
        $scope.enabled2=false;
        $scope.pokePics2 = response.data.sprites.back_default
        console.log(response);
    })
}

$scope.getData = function(pokeName) {
    pokeService.getPokemonPics(pokeName).then(function(response){
        $scope.pokeData = response.data

var undies = {
  type: { name: "None" }
};

var undiez = {
  ability: { name: "None"}
};

if(response.data.types[1] === undefined){
   response.data.types[1] = undies;
  }
if(response.data.abilities[1] === undefined){
   response.data.abilities[1] = undiez;
  }
if(response.data.abilities[2] === undefined){
   response.data.abilities[2] = undiez;
  }
        console.log(response);
        
})
}

  });



