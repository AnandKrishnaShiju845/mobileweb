document.addEventListener('DOMContentLoaded', function () {
    
    const songForm = document.getElementById('songForm');
    const songTitleInput = document.getElementById('songTitle');
    const artistNameInput = document.getElementById('artistName');
    const errorMessage = document.getElementById('errorMessage');
    const songList = document.getElementById('songList');


    const songs = [];


    function addSong(title, artist) {
        const song = { title, artist };
        songs.push(song);


        const listItem = document.createElement('li');
        listItem.textContent = `${title} by ${artist}`;
        songList.appendChild(listItem);


        songTitleInput.value = '';
        artistNameInput.value = '';
    }


    songForm.addEventListener('submit', function (e) {
        e.preventDefault();


        const title = songTitleInput.value.trim();
        const artist = artistNameInput.value.trim();


        if (title === '' || artist === '') {
            errorMessage.textContent = 'Please enter both a song title and artist name.';
        } else {
            errorMessage.textContent = '';
            addSong(title, artist);
        }
    });
});
