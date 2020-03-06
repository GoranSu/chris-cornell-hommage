import { Component, OnInit } from '@angular/core';
import { Artist } from '../model/artist.model';
import { Fade } from '../animations';

@Component({
  selector: 'app-soundgarden',
  templateUrl: './soundgarden.component.html',
  styleUrls: ['./soundgarden.component.css'],
  animations: [ Fade(2000) ]
})
export class SoundgardenComponent implements OnInit {

  artist = <Artist> {
    artistName: 'Soundgarden',
    artistAbout: '<p> <a href="https://en.wikipedia.org/wiki/Soundgarden" target="_blank">Soundgarden</a>' +
    '  was an American rock band formed in Seattle, Washington, in 1984 by singer and rhythm guitarist' +
    'Chris Cornell, lead guitarist <a href="https://en.wikipedia.org/wiki/Kim_Thayil"' +
    'target="_blank">Kim Thayil</a>, and bassist Hiro Yamamoto. <a href="https://en.wikipedia.org/wiki/Matt_Cameron"' +
    'target="_blank">Matt Cameron</a> became the band\'s full-time drummer in 1986, while bassist' +
    '<a href="https://en.wikipedia.org/wiki/Ben_Shepherd"' +
     'target="_blank">Ben Shepherd</a> became a permanent replacement for Yamamoto in 1990.' +
     'Cornell remained in Soundgarden until his death in May 2017, putting the band\'s future in doubt and leaving Thayil' +
     'as the only remaining original member of the band.</p>',
    album: [
      {
      id: '1',
      albumYear: '1988',
      albumTitle: 'Ultramega OK',
      albumArtwork: '/assets/soundGarden/ouk.jpg',
      track: [
        { trackNumber: '1', trackName: 'Flower' },
        { trackNumber: '2', trackName: 'All Your Lies' },
        { trackNumber: '3', trackName: '665' },
        { trackNumber: '4', trackName: 'Beyond The Wheel' },
        { trackNumber: '5', trackName: '667' },
        { trackNumber: '6', trackName: 'Mood For Trouble' },
        { trackNumber: '7', trackName: 'Circle Of Power' },
        { trackNumber: '8', trackName: 'He DtrackNumbern\'t' },
        { trackNumber: '9', trackName: 'Smokestack Lightning' },
        { trackNumber: '10', trackName: 'Nazi Driver' },
        { trackNumber: '11', trackName: 'Head Injury' },
        { trackNumber: '12', trackName: 'Incessant Mace' },
        { trackNumber: '13', trackName: 'One Minute Of Silence' }
      ]
    },
    {
      id: '2',
      albumYear: '1989',
      albumTitle: 'Louder Than Love',
      albumArtwork: '/assets/soundGarden/loud.png',
      track: [
        { trackNumber: '1', trackName: 'Truth' },
        { trackNumber: '2', trackName: 'Hands All Over' },
        { trackNumber: '3', trackName: 'Gun' },
        { trackNumber: '4', trackName: 'Power Trip' },
        { trackNumber: '5', trackName: 'Get on the Snake' },
        { trackNumber: '6', trackName: 'Full on Kevin\'s Mom' },
        { trackNumber: '7', trackName: 'Loud Love' },
        { trackNumber: '8', trackName: 'I Awake' },
        { trackNumber: '9', trackName: 'No Wrong No Right' },
        { trackNumber: '10', trackName: 'Uncovered' },
        { trackNumber: '11', trackName: 'Big Dumb Sex' },
        { trackNumber: '12', trackName: 'Full On (Reprise)' }
      ]
    },
    {
      id: '3',
      albumYear: '1991',
      albumTitle: 'Badmotorfinger',
      albumArtwork: '/assets/soundGarden/bad.jpg',
      track: [
        { trackNumber: '1', trackName: 'Rusty Cage' },
    { trackNumber: '2', trackName: 'Outshined' },
    { trackNumber: '3', trackName: 'Slaves & Bulldozers' },
    { trackNumber: '4', trackName: 'Jesus Christ Pose' },
    { trackNumber: '5', trackName: 'Face Pollution' },
    { trackNumber: '6', trackName: 'Somewhere' },
    { trackNumber: '7', trackName: 'Searching With My Good Eye Closed' },
    { trackNumber: '8', trackName: 'Room A Thousand Years WtrackNumbere' },
    { trackNumber: '9', trackName: 'Mind Riot' },
    { trackNumber: '10', trackName: 'Drawing Flies' },
    { trackNumber: '11', trackName: 'Holy Water' },
    { trackNumber: '12', trackName: 'New Damage' }
      ]
    },
    {
      id: '4',
      albumYear: '1994',
      albumTitle: 'Superunknown',
      albumArtwork: '/assets/soundGarden/super.jpg',
      track: [
        { trackNumber: '1', trackName: 'Let Me Drown' },
    { trackNumber: '2', trackName: 'My Wave' },
    { trackNumber: '3', trackName: 'Fell On Black Days' },
    { trackNumber: '4', trackName: 'Mailman' },
    { trackNumber: '5', trackName: 'Superunknown' },
    { trackNumber: '6', trackName: 'Head Down' },
    { trackNumber: '7', trackName: 'Black Hole Sun' },
    { trackNumber: '8', trackName: 'Spoonman' },
    { trackNumber: '9', trackName: 'Limo Wreck' },
    { trackNumber: '10', trackName: 'The Day I Tried To Live' },
    { trackNumber: '11', trackName: 'Kickstand' },
    { trackNumber: '12', trackName: 'Fresh Tendrils' },
    { trackNumber: '13', trackName: '4th Of July' },
    { trackNumber: '14', trackName: 'Half' },
    { trackNumber: '15', trackName: 'Like SuictrackNumbere' }
      ]
    },
    {
      id: '5',
      albumYear: '1996',
      albumTitle: 'Down on the Upside',
      albumArtwork: '/assets/soundGarden/down.jpg',
      track: [
        { trackNumber: '1', trackName: 'Pretty Noose' },
    { trackNumber: '2', trackName: 'Rhinosaur' },
    { trackNumber: '3', trackName: 'Zero Chance' },
    { trackNumber: '4', trackName: 'Dusty' },
    { trackNumber: '5', trackName: 'Ty Cobb' },
    { trackNumber: '6', trackName: 'Blow Up The OutstrackNumbere World' },
    { trackNumber: '7', trackName: 'Burden In My Hand' },
    { trackNumber: '8', trackName: 'Never Named' },
    { trackNumber: '9', trackName: 'Applebite' },
    { trackNumber: '10', trackName: 'Never The Machine Forever' },
    { trackNumber: '11', trackName: 'Tighter & Tighter' },
    { trackNumber: '12', trackName: 'No Attention' },
    { trackNumber: '13', trackName: 'Switch Opens' },
    { trackNumber: '14', trackName: 'Overfloater' },
    { trackNumber: '15', trackName: 'An Unkind' },
    { trackNumber: '16', trackName: 'Boot Camp'}
      ]
    },
    {
      id: '6',
      albumYear: '2012',
      albumTitle: 'King Animal',
      albumArtwork: '/assets/soundGarden/king.jpg',
      track: [
        { trackNumber: '1', trackName: 'Been Away Too Long' },
    { trackNumber: '2', trackName: 'Non-State Actor' },
    { trackNumber: '3', trackName: 'By Crooked Steps' },
    { trackNumber: '4', trackName: 'A Thousand Days Before' },
    { trackNumber: '5', trackName: 'Blood On The Valley Floor' },
    { trackNumber: '6', trackName: 'Bones Of Birds' },
    { trackNumber: '7', trackName: 'Taree' },
    { trackNumber: '8', trackName: 'Attrition' },
    { trackNumber: '9', trackName: 'Black Saturday' },
    { trackNumber: '10', trackName: 'Halfway There' },
    { trackNumber: '11', trackName: 'Worse Dreams' },
    { trackNumber: '12', trackName: 'EyeltrackNumber\'s Mouth' },
    { trackNumber: '13', trackName: 'Rowing' }
      ]
    },
  ],
  };

  constructor() { }

  ngOnInit() {
  }

}
