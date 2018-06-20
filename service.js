"use strict";
{
    let service = function ($http) {
        let vm = this;
        let trackId= 0;
        let lyrics = "";
        const APIKey = "c42ef466fff57d1c817a1efd2f2ebf38";
// beLyrics returns the data from the service
        
       let beLyrics= function(){
            return lyrics;
        }
// Takes the lyrics from the home component and stores it in a new variable        
        let setLyrics = function(newlyrics){
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
                let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.search?format=json&q_artist=${artist}&s_track_rating=desc&apikey=c42ef466fff57d1c817a1efd2f2ebf38`
                return $http.get(url).then(function(response){
                    let i = Math.floor((Math.random() * 10) + 1);
                    //varying difficulties can change the number generated. 
                   console.log(response.data.message.body.track_list[i].track.artist_name);
                    let trackNum = response.data.message.body.track_list[0].track.track_id;
                    getLyrics(trackNum);
                    return trackNum;
                });
            }
// getSongName takes the trackId to get the name of the specific song. 
            let getSongName = function(trackId){
                let url = `https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.get?format=json&track_id=${trackId}&apikey=c42ef466fff57d1c817a1efd2f2ebf38`;
                return $http.get(url).then(function(response){
                    console.log(url);
                    var songName = response.data.message.body.track.track_name;
                    if (songName.indexOf("-") > -1){
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

                return {
                    getLyrics,
                    getTrackId,
                    beLyrics,
                    setLyrics,
                    getSongName
                };
            
        }
        angular
            .module("app")
            .factory("service", service);
}