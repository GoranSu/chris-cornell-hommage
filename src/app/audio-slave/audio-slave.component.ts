import { Component, OnInit } from '@angular/core';
import { Artist } from '../model/artist.model';
import { Fade } from '../animations';

@Component({
  selector: 'app-audio-slave',
  templateUrl: './audio-slave.component.html',
  styleUrls: ['./audio-slave.component.css'],
  animations: [ Fade(2000) ]
})
export class AudioSlaveComponent implements OnInit {

  artist = <Artist> {
    artistName: 'Audioslave',
    artistAbout: '<p> <a href="https://en.wikipedia.org/wiki/Audioslave" target="_blank">Audioslave</a>' +
    ' was an American rock supergroup formed in Los Angeles, California, in 2001. The four-piece band consisted' +
    ' of Soundgarden lead singer/rhythm guitarist <a routerLink="/cornell">Chris Cornell</a>, and ' +
    ' <a href="https://en.wikipedia.org/wiki/Rage_Against_the_Machine" target="_blank">Rage Against the Machine</a>' +
    ' members <a href="https://en.wikipedia.org/wiki/Tom_Morello" target="_blank">Tom Morello</a> (lead guitar),' +
    ' <a href="https://en.wikipedia.org/wiki/Tim_Commerford" target="_blank">Tim Commerford</a> (bass/backing vocals),' +
    ' and <a href="https://en.wikipedia.org/wiki/Brad_Wilk" target="_blank">Brad Wilk</a> (drums).</p>',
    album: [
      {
      id: '1',
      albumYear: '2002',
      albumTitle: 'Audioslave',
      albumArtwork: '/assets/audioSlave/audioslave.jpg',
      track: [
        { trackNumber: '1', trackName: 'Cochise' },
        { trackNumber: '2', trackName: 'Show Me How To Live' },
        { trackNumber: '3', trackName: 'Gasoline' },
        { trackNumber: '4', trackName: 'What You Are' },
        { trackNumber: '5', trackName: 'Like A Stone' },
        { trackNumber: '6', trackName: 'Set It Off' },
        { trackNumber: '7', trackName: 'Shadow On The Sun' },
        { trackNumber: '8', trackName: 'I Am The Highway' },
        { trackNumber: '9', trackName: 'Exploder' },
        { trackNumber: '10', trackName: 'Hypnotize' },
        { trackNumber: '11', trackName: 'Bring \'Em Back Alive' },
        { trackNumber: '12', trackName: 'Light My Way' },
        { trackNumber: '13', trackName: 'Getaway Car' },
        { trackNumber: '14', trackName: 'The Last Remaining Light' }
      ]
    },
    {
      id: '2',
      albumYear: '2005',
      albumTitle: 'Out Of Exile',
      albumArtwork: '/assets/audioSlave/ooe.jpg',
      track: [
        { trackNumber: '1', trackName: 'Your Time Has Come' },
        { trackNumber: '2', trackName: 'Out Of Exile' },
        { trackNumber: '3', trackName: 'Be Yourself' },
        { trackNumber: '4', trackName: 'Doesn\'t Remind Me' },
        { trackNumber: '5', trackName: 'Drown Me Slowly' },
        { trackNumber: '6', trackName: 'Heaven\'s Dead' },
        { trackNumber: '7', trackName: 'The Worm' },
        { trackNumber: '8', trackName: 'Man Or Animal' },
        { trackNumber: '9', trackName: 'Yesterday To Tomorrow' },
        { trackNumber: '10', trackName: 'Dandelion' },
        { trackNumber: '11', trackName: '#1 Zero' },
        { trackNumber: '12', trackName: 'The Curse' }
      ]
    },
    {
      id: '3',
      albumYear: '2006',
      albumTitle: 'Revelations',
      albumArtwork: '/assets/audioSlave/rev.jpg',
      track: [
        { trackNumber: '1', trackName: 'Revelations' },
        { trackNumber: '2', trackName: 'One And The Same' },
        { trackNumber: '3', trackName: 'Sound Of A Gun' },
        { trackNumber: '4', trackName: 'Until We Fall' },
        { trackNumber: '5', trackName: 'Original Fire' },
        { trackNumber: '6', trackName: 'Broken City' },
        { trackNumber: '7', trackName: 'Somedays' },
        { trackNumber: '8', trackName: 'Shape Of Things To Come' },
        { trackNumber: '9', trackName: 'Jewel Of The Summertime' },
        { trackNumber: '10', trackName: 'WtrackNumbere Awake' },
        { trackNumber: '11', trackName: 'Nothing Left To Say But Goodbye' },
        { trackNumber: '12', trackName: 'Moth' },
        { trackNumber: '13', trackName: 'Film By Danny Clinch' }
      ]
    },

  ],
  };

  constructor() {
    console.log(this.artist);
   }

  ngOnInit() {
  }

}
