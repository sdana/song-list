$(document).ready(function () {

    // Use jQuery to get a reference to `load-songs`
    const loadSongsBTN = $("#load-songs")
    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list")


    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
    loadSongsBTN.click(() => {
        $.ajax("./songs.json").then((songObject) =>{
            for (let song in songObject.songs){
                let songTitle = songObject.songs[song].title
                let songArtist = songObject.songs[song].artist
                let songAlbum = songObject.songs[song].album
                console.log(songTitle, songArtist, songAlbum )
                let songSectionEl = $("<section class='song'></section>")
                let songTitleEl = $(`<h1 class='song__title'>${songTitle}</h1>`)
                let innerSectionEl = $(`<section class='song__description'>Performed by <em>${songArtist}</em> on the album <em>${songAlbum}</em></section>`)
                songList.append(songSectionEl)
                songSectionEl.append(songTitleEl)
                songSectionEl.append(innerSectionEl)
            }

        })
    })

    /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>
    */
})
