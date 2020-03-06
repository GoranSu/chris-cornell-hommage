import { Component, OnInit } from '@angular/core';
import { Artist } from '../model/artist.model';
import { Fade } from '../animations';

@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.css'],
  animations: [ Fade(2000) ]
})
export class TempleComponent implements OnInit {

artist = <Artist>  {
  artistName: 'Temple of the dog',
  artistAbout: '<p> <a href="https://en.wikipedia.org/wiki/Temple_of_the_Dog"' +
  'target="_blank">Temple of the Dog</a> was an American rock band that formed in Seattle,' +
  ' Washington in 1990. It was conceived by vocalist Chris Cornell of Soundgarden' +
  ' as a tribute to his friend, the late Andrew Wood, lead singer of the bands Malfunkshun' +
  ' and Mother Love Bone. The line-up includes Stone Gossard on rhythm guitar, Jeff Ament on' +
  ' bass guitar (both ex-members of Mother Love Bone), Mike McCready on lead guitar,' +
  ' and Matt Cameron on drums. Eddie Vedder appeared as a guest to provide some lead and backing vocals.</p>',
  album: [
    {
    id: '1',
    albumYear: '1991',
    albumTitle: 'Temple of the dog',
    albumArtwork: '/assets/templeOfTheDog/ttod.jpg',
    track:
    [
    { trackNumber: '1', trackName: 'Say Hello 2 Heaven' },
    { trackNumber: '2', trackName: 'Reach Down' },
    { trackNumber: '3', trackName: 'Hunger Strike' },
    { trackNumber: '4', trackName: 'Pushin\' Forward Back' },
    { trackNumber: '5', trackName: 'Call Me A Dog' },
    { trackNumber: '6', trackName: 'Times Of Trouble' },
    { trackNumber: '7', trackName: 'Wooden Jesus' },
    { trackNumber: '8', trackName: 'Your Saviour' },
    { trackNumber: '9', trackName: 'Four Walled World' },
    { trackNumber: '10', trackName: 'All Night Thing' }
    ]
  }
],
};

  constructor() {
    console.log(this.artist);
  }

  ngOnInit() {
  }

}
