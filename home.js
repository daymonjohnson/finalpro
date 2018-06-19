"use strict";
{
    
    
    
    let home = {
        template: `<div>
        <h1>Hi the API is working!</h1>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button ng-click="$ctrl.getTrackId(); $ctrl.callLyrics()">Submit</button>
        <p>Lyric: {{$ctrl.lyrics}}</p>
        <p> Song: {{$ctrl.songNum}}</p>
        </div>`,

        controller: function(service) {
            let vm = this;   
            vm.artist = "";
            
            // vm.callAPI = service.getAPI();
            vm.callLyrics = function(){
                service.getLyrics(service.beId())
                .then(function(response){
                    
                    vm.lyrics = response;
                    return vm.lyrics;
                });
            } 

            vm.getTrackId = function(artist){
                service.getTrackId(vm.artist)
                .then(function(response){
                    vm.songNum= response; 
                    service.beId();
                    service.setId(vm.songNum);
                });
            }
            // vm.callAPI.then(function(response){
            //     vm.song = response;
            // });
            // vm.callLyrics().then(function(response){
            //     console.log("hi");
            //     vm.lyrics = response;
            // });

//             vm.callAPI.then(function(response){
//                 vm.song = response;
//             });
// >>>>>>> ecff9b3566a0151e996847424a59d4b96a807cac
		}
	};

    home.$inject = ["service"];

    angular
    .module("app")
    .component("home", home)
}