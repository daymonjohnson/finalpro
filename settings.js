"use strict";
{
    let settings = {
        template: `<div class="settingsContent">
        <h1>Select your Difficulty</h1>
        <a href="#!/game"><button class="difficultyButton" ng-mouseenter="val=true" ng-mouseleave="val=false" ng-click="$ctrl.difficulty(3,3)">Easy <span ng-show="val">{{$ctrl.text}}</span></button><a>        
        <a href="#!/game"> <button class="difficultyButton" ng-mouseenter="val2=true" ng-mouseleave="val2=false" ng-click="$ctrl.difficulty(5,3)">Medium<span ng-show="val2">{{$ctrl.text2}}</span></button></a>        
        <a href="#!/game"> <button class="difficultyButton" ng-mouseenter="val3=true" ng-mouseleave="val3=false" ng-click="$ctrl.difficulty(7,3)">Hard<span ng-show="val3">{{$ctrl.text3}}</span></button></a>
        <a href="#!/game"> <button class="difficultyButton" ng-mouseenter="val4=true" ng-mouseleave="val4=false" ng-click="$ctrl.difficulty(10,1)">Insane<span ng-show="val4">{{$ctrl.text4}}</span></button></a>
        </div>`,


        controller: function(service){
            let vm = this;
            vm.text = " 3 Wins 3 Losses";
            vm.text2 = " 5 Wins 3 Losses";
            vm.text3= " 7 Wins 3 Losses";
            vm.text4= " 10 Wins 0 Losses";


            vm.difficulty = function(a, b){
                let gameType = {win: a, loss: b}
                service.difficultyType(gameType);
                console.log(gameType);
                return gameType; 

            }            

    }
};

    settings.$inject = ["service"];


 angular
        .module("app")
        .component("settings", settings)
}
