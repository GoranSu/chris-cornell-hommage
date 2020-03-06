export class Artist {
  artistName: string;
  artistAbout: string;
  album: Album[];
}

export class Album {
  id: string;
  albumYear: string;
  albumTitle: string;
  albumArtwork: string;
  track: Track[];
}

export class Track {
  trackName: string;
  trackNumber: string;
  trackLength: string;
}
