// "use strict";
// {
    
    
    
//     let game = {
//         template: `<div>
//         <h1>Hi the API is working!</h1>
//         <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist"/><button ng-click="$ctrl.getTrackId()">Submit</button>
//         <p>Lyric: {{$ctrl.lyrics}}</p>
//         <p> Song: {{$ctrl.name}}</p>
//         </div>`,

//         controller: function(service) {
//             let vm = this;   
//             vm.artist = "";
//             // vm.callAPI = service.getAPI();
//             vm.callLyrics = function(artist){
//                 service.getLyrics(vm.artist)
//                 .then(function(response){
                    
//                     vm.lyrics = response;
//                     return vm.lyrics;
//                 });
//             } 
// <<<<<<< HEAD
//             vm.getTrackId = function(artist){
//                 service.getTrackId(vm.artist)
//                 .then(function(response){
//                     vm.name= response; 
//                     return vm.name;
//                 });
//             }
//             // vm.callAPI.then(function(response){
//             //     vm.song = response;
//             // });
//             // vm.callLyrics().then(function(response){
//             //     console.log("hi");
//             //     vm.lyrics = response;
//             // });
// =======
// //             vm.callAPI.then(function(response){
// //                 vm.song = response;
// //             });
// // >>>>>>> ecff9b3566a0151e996847424a59d4b96a807cac
// 		}
// 	};

//     game.$inject = ["service"];

//     angular
//     .module("app")
//     .component("game", game)
// }