"use strict";
{
    
    
    
    let home = {
        template: `<div>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist" class="input"/> <a href= "#!/game"><button class="mybtn" ng-click="$ctrl.updateArtist($ctrl.artist)">Submit</button></a>
        </div>`,
        // empty strings are created here that are filled in when a specific artist, lyric, guess is called. 
        controller: function (service) {
            let vm = this;
            vm.artist = "";

            vm.updateArtist = function (artist) {
                service.setArtist(artist);
                console.log(service.beArtist());
            }
        }
    };

    home.$inject = ["service"];

    angular
        .module("app")
        .component("home", home)
}