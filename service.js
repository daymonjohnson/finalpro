"use strict";
{
    let service = function ($http) {
        let vm = this;
        let trackId = 0;
        let lyrics = "";
        var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const APIKey = "c42ef466fff57d1c817a1efd2f2ebf38";

        let beArtist = function () {
            return beArtist;
        }

        let setArtist = function (newArtist) {
            beArtist = newArtist;
        }

        // beLyrics returns the data from the service

        let beLyrics = function () {
            return lyrics;
        }
        // Takes the lyrics from the home component and stores it in a new variable        
        let setLyrics = function (newlyrics) {
            lyrics = newlyrics;
        }
        // Grabs a snippet of lyrics from our API. Also updates the lyrics variable. 
        let getLyrics = function (trackId) {
            let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.snippet.get?format=json&track_id=${trackId}&apikey=c42ef466fff57d1c817a1efd2f2ebf38`
            return $http.get(url).then(function (response) {

                let lyrics = response.data.message.body.snippet.snippet_body;
                setLyrics(lyrics);
                return lyrics;
            });
        }
        // getTrackId grabs tracks from our API and puts the trackId into the getLyrics function    
        let getTrackId = function (artist) {
            var artist = artist.split(" ").join("%20");
            let i = array.length;
            let j = 0;
            j = Math.floor(Math.random() * (i));
            let n = array[j];
            console.log(j);
    let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.search?format=json&q_artist=${artist}&s_track_rating=desc&apikey=c42ef466fff57d1c817a1efd2f2ebf38`
    return $http.get(url).then(function (response) {

        //create random number generator between 1 and 10 to find the index of the song. 
        //varying difficulties can change the number generated. 
        console.log(response.data.message.body.track_list[n].track.track_id);
        let trackNum = response.data.message.body.track_list[n].track.track_id;
        getLyrics(trackNum);
        array.splice(j,1);
        console.log(array);
        return trackNum;
    });
}



// getSongName takes the trackId to get the name of the specific song. 
let getSongName = function (trackId) {
    let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.get?format=json&track_id=${trackId}&apikey=c42ef466fff57d1c817a1efd2f2ebf38`;
    return $http.get(url).then(function (response) {
        console.log(url);
        var songName = response.data.message.body.track.track_name;
        if (songName.indexOf("-") > -1) {
            songName = songName.substring(0, songName.indexOf("-") - 1);
            return songName;
        } else if (songName.indexOf("(") > -1) {
            songName = songName.substring(0, songName.indexOf("(") - 1);
            return songName;
        }
        console.log(songName);
        return songName;
    });
}
$('input').keypress(function (e) {
    if (e.which == 13) {
      $('button').click();
      return false;
    }
  });


return {
    getLyrics,
    getTrackId,
    beLyrics,
    setLyrics,
    getSongName,
    beArtist,
    setArtist
};

}
angular
    .module("app")
    .factory("service", service);
}
