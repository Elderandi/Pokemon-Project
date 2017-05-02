angular.module('pokeFightClub')
.directive('fightDir', function($interval){
    return{
        restrict: 'E',
        templateUrl: 'fightButton.html',
        link: function(scope, elem, attrs){
            

            $(".fight-announce").on('click', function(){
                $(".fight-announce").removeClass('fight-button-lit');
                $(".fight-announce").addClass('fight-button');
            })

            $(".fight-announce").on('mouseover', function(){

                if(scope.poke1 && scope.poke2 && scope.poke1.name !== scope.poke2.name && scope.fightDone === false){
                    $(".fight-announce").addClass("fight-button-lit")
                    $(".fight-announce").removeClass('fight-button')
    
                }
             

            })
                       $(".fight-announce").on('mouseleave', function(){
                
                if(scope.poke1 && scope.poke2 && scope.poke1.name !== scope.poke2.name && scope.fightDone === false){
                    $(".fight-announce").removeClass("fight-button-lit")
                    $(".fight-announce").addClass('fight-button')
               
                }
             

            })
            

            
        }
    }
})