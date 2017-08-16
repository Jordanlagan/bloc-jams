var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:14' },
    { title: 'Red', duration: '5:01' },
    { title: 'Pink', duration: '3:21' },
    { title: 'Magenta', duration: '2:15' },
  ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
    ]
};

var albumWayne = {
    title: 'Tha Block Is Hot',
    artist: 'Lil Wayne',
    label: 'Cas$h Money',
    year: '1999',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Thablockishot.jpg/220px-Thablockishot.jpg',
    songs: [
        { title: 'Intro ft. Big Tymers', duration: '1:47' },
        { title: 'Tha Block Is Hot', duration: '4:12' },
        { title: 'Loud Pipes ft. Big Tymers & Juvenile & B.G.', duration: '5:14'},
        { title: 'Watcha Wanna Do', duration: '3:50' },
        { title: 'Kisha performed by Hot Boys', duration: '4:17'},
        { title: 'High Beamin ft. B.G.', duration: '4:09' },
        { title: 'Lights Off', duration: '4:07' },
        { title: 'Fuck Tha World', duration: '4:46' },
        { title: 'Remember Me ft. B.G.', duration: '3:54' },
        { title: 'Respect Us ft. Juvenile', duration: '5:01' },
        { title: 'Drop It Like It\'s Hot ft. B.G. & Mannie Fresh', duration: '5:23' },
        { title: 'Young Playa ft. Big Tymers', duration: '3:47' },
        { title: 'Enemy Turf ft. Juvenile', duration: '4:19' },
        { title: 'Not Like Me ft. Big Tymers', duration: '4:03' },
        { title: 'Come On ft. B.G.', duration: '3:35' },
        { title: 'Up To Me ft. Turk', duration: '4:31' },
        { title: 'You Want War ft. Turk', duration: '3:25' },
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
  var template =
  '<tr class="album-view-song-item">'
+ '  <td class="song-item-number">' + songNumber + '</td>'
+ '  <td class="song-item-title">' + songName + '</td>'
+ '  <td class="song-item-duration">' + songLength + '</td>'
+ '</tr>'
;

  return template;
}

var setCurrentAlbum = function(album) {
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  albumSongList.innerHTML = '';

  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

window.onload = function() {
  setCurrentAlbum(albumPicasso);
}

var albumSwitch = document.getElementsByClassName('album-cover-art')[0];
var albumList = [albumPicasso, albumMarconi, albumWayne];
var currentAlbumCount = 0;

albumSwitch.addEventListener('click', function() {
  currentAlbumCount++;
  if (currentAlbumCount>2) {
    currentAlbumCount = 0;
  }
  setCurrentAlbum(albumList[currentAlbumCount]);

})
