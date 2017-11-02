var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function() {
  for (item in this.playlists) {
    console.log(item + ": " + this.playlists[item].name + " - " + this.playlists[item].tracks.length + " tracks")
  }
},

  printTracks: function() {
  for (track in this.tracks) {
    console.log(this.tracks[track].id + ": " + this.tracks[track].name + " by " + this.tracks[track].artist + " (" + this.tracks[track].album + ")")
  }
},

  printPlaylist: function (playlistId) {
  console.log(this.playlists.p01.id + ": " + this.playlists.p01.name + " - " + this.playlists.p01.tracks.length + " tracks")
  for (songs of this.playlists.p01.tracks) {
    console.log(this.tracks[songs].id + ": " + this.tracks[songs].name + " by " + this.tracks[songs].artist + " (" + this.tracks[songs].album + ")")
  }
},

  addTrackToPlaylist: function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId)
},

  uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

  addTrack: function (name, artist, album) {
  var id = "t" + this.uid()
  this.tracks[id] = {}
  this.tracks[id].id = id
  this.tracks[id].name = name
  this.tracks[id].artist = artist
  this.tracks[id].album = album
},

  addPlaylist: function (name) {
  var id = 'p' + this.uid()
  this.playlists[id] = {}
  this.playlists[id].id = id
  this.playlists[id].name = name
  this.playlists[id].tracks = ['t05']
  console.log(library.playlists)
},

  printSearchResults: function(query) {
  for (track in this.tracks) {
    var id = this.tracks[track].id
    var name = this.tracks[track].name
    var artist = this.tracks[track].artist
    var album = this.tracks[track].album
    var re = query
    var nameValues = name.search(re)
    var artistValues = artist.search(re)
    var albumValues = album.search(re)
    if (nameValues > 0) {
      console.log("Track: " + id + ", Name: " + name)
    } else {

    }
    if (artistValues > 0) {
      conosole.log("Track: " + id + ", Artist: " + artist)
    } else {

    }
    if (albumValues > 0) {
      console.log("Track: " + id + ", Album: " + album)
    } else {

    }
  }
},
}

// library.printPlaylists()
// library.printTracks()
// library.printPlaylist()
// library.addPlaylist("Tunes")
// library.printSearchResults("Three")

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (item in library.playlists) {
    console.log(item + ": " + library.playlists[item].name + " - " + library.playlists[item].tracks.length + " tracks")
  }
}
// printPlaylists()


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (track in library.tracks) {
    console.log(library.tracks[track].id + ": " + library.tracks[track].name + " by " + library.tracks[track].artist + " (" + library.tracks[track].album + ")")
  }
}
//printTracks()

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  console.log(library.playlists.p01.id + ": " + library.playlists.p01.name + " - " + library.playlists.p01.tracks.length + " tracks")
  for (songs of library.playlists.p01.tracks) {
    console.log(library.tracks[songs].id + ": " + library.tracks[songs].name + " by " + library.tracks[songs].artist + " (" + library.tracks[songs].album + ")")
  }
}
//printPlaylist()

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId)
}
// addTrackToPlaylist("t03", "p01")
// printPlaylist("p01")

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
//console.log(uid())

// adds a track to the library

var addTrack = function (name, artist, album) {
  var id = "t" + uid()
  library.tracks[id] = {}
  library.tracks[id].id = id
  library.tracks[id].name = name
  library.tracks[id].artist = artist
  library.tracks[id].album = album
}
// addTrack("A", "b", "c")
//console.log(library.tracks)

// adds a playlist to the library

var addPlaylist = function (name) {
  var id = 'p' + uid()
  library.playlists[id] = {}
  library.playlists[id].id = id
  library.playlists[id].name = name
  library.playlists[id].tracks = ['t05']
}
// addPlaylist("Tunes")
// console.log(library.playlists)

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  for (track in library.tracks) {
    var id = library.tracks[track].id
    var name = library.tracks[track].name
    var artist = library.tracks[track].artist
    var album = library.tracks[track].album
    var re = query
    var nameValues = name.search(re)
    var artistValues = artist.search(re)
    var albumValues = album.search(re)
    if (nameValues > 0) {
      console.log("Track: " + id + ", Name: " + name)
    } else {

    }
    if (artistValues > 0) {
      conosole.log("Track: " + id + ", Artist: " + artist)
    } else {

    }
    if (albumValues > 0) {
      console.log("Track: " + id + ", Album: " + album)
    } else {

    }
  }
}
//printSearchResults("Three")




