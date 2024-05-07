function makeAlbum(artist: string, title: string): { artist:string; title:string} {
    const disctionaries = {
        artist: artist.charAt(0).toUpperCase() +artist.slice(1),
        title: artist.charAt(0).toUpperCase() +title.slice(1)
    };
    return disctionaries;
 }


let album = makeAlbum("ali","light")
console.log("album")

album = makeAlbum("bilal","red wave")
console.log("album")


album = makeAlbum("hamza","seenbreez")
console.log("album")