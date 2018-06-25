"use strict";
{   
    let home = {
        template: `<div>
        <h1>MUSICBUFF </h1>
        <p>Think you know music? Enter an artist to find out. You have 5 tries. Break a leg!</p>
        <input type="text" placeholder="Enter an artist" ng-model="$ctrl.artist" class="input"/> <a href= "#!/game"><button class="mybtn" ng-click="$ctrl.updateArtist($ctrl.artist)">Submit</button></a>
        </div>`,
        // empty strings are created here that are filled in when a specific artist chosen by user.  
        controller: function (service) {
            let vm = this;
            vm.artist = "";

            vm.updateArtist = function (artist) {
                service.setArtist(artist);
                console.log(service.beArtist());
            }
        }
    };

    $('input').keypress(function (e) {
        if (e.which == 13) {
          $('.mybtn').click();
          return false;
        }})

    home.$inject = ["service"];

    angular
        .module("app")
        .component("home", home)
}