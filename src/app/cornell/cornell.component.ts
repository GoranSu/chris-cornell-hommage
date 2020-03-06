import { Component, OnInit } from '@angular/core';
import { Artist } from '../model/artist.model';
import { Fade } from '../animations';

@Component({
  selector: 'app-cornell',
  templateUrl: './cornell.component.html',
  styleUrls: ['./cornell.component.css'],
  animations: [ Fade(2000) ]
})
export class CornellComponent {

  artist = <Artist> {
    artistName: 'Chris Cornell',
    artistAbout: '<p> <a href="https://en.wikipedia.org/wiki/Chris_Cornell" ' +
    ' target="_blank">Chris Cornell</a> (born Christopher John Boyle; July 20, 1964 - May 18, 2017)' +
    ' was an American musician, singer, and songwriter. He was best known as the lead vocalist for the' +
    ' rock bands Soundgarden and Audioslave. Cornell was also known for his numerous solo works and soundtrack' +
    ' contributions since 1991, and as the founder and frontman for Temple of the Dog,' +
    ' the one-off tribute band dedicated to his late friend <a href="https://en.wikipedia.org/wiki/Andrew_Wood_(singer)"' +
    ' target="_blank">Andrew Wood</a>.</p>',
    album: [
      {
      id: '1',
      albumYear: '1999',
      albumTitle: 'Euphoria Morning',
      albumArtwork: '/assets/chrisCornell/euph.jpg',
      track: [
        { trackNumber: '1', trackName: 'Can\'t Change Me', trackLength: '3:23'},
        { trackNumber: '2', trackName: 'Flutter Girl', trackLength: '4:25' },
        { trackNumber: '3', trackName: 'Preaching The End Of The World', trackLength: '4:41' },
        { trackNumber: '4', trackName: 'Follow My Way', trackLength: '5:10' },
        { trackNumber: '5', trackName: 'When I\'m Down', trackLength: '4:20' },
        { trackNumber: '6', trackName: 'Mission', trackLength: '4:05' },
        { trackNumber: '7', trackName: 'Wave Goodbye', trackLength: '3:43' },
        { trackNumber: '8', trackName: 'Moonchild', trackLength: '4:02' },
        { trackNumber: '9', trackName: 'Sweet Euphoria', trackLength: '3:08' },
        { trackNumber: '10', trackName: 'Disappearing One', trackLength: '3:48' },
        { trackNumber: '11', trackName: 'Pillow Of Your Bones', trackLength: '4:29' },
        { trackNumber: '12', trackName: 'Steel Rain', trackLength: '5:41' }
      ]
    },
    {
      id: '2',
      albumYear: '2007',
      albumTitle: 'Carry On',
      albumArtwork: '/assets/chrisCornell/carry.jpg',
      track: [
        { trackNumber: '1', trackName: 'No Such Thing', trackLength: '3:44' },
        { trackNumber: '2', trackName: 'Poison Eye', trackLength: '3:57' },
        { trackNumber: '3', trackName: 'Arms Around Your Love', trackLength: '3:34' },
        { trackNumber: '4', trackName: 'Safe And Sound', trackLength: '4:16' },
        { trackNumber: '5', trackName: 'She\'ll Never Be Your Man', trackLength: '3:24' },
        { trackNumber: '6', trackName: 'Ghosts', trackLength: '3:51' },
        { trackNumber: '7', trackName: 'Killing Birds', trackLength: '3:38' },
        { trackNumber: '8', trackName: 'Billie Jean', trackLength: '4:41' },
        { trackNumber: '9', trackName: 'Scar On The Sky', trackLength: '3:40' },
        { trackNumber: '10', trackName: 'Your Soul Today', trackLength: '3:27' },
        { trackNumber: '11', trackName: 'Finally Forever', trackLength: '3:37' },
        { trackNumber: '12', trackName: 'Silence The Voices', trackLength: '4:27' },
        { trackNumber: '13', trackName: 'Disappearing Act', trackLength: '4:33' },
        { trackNumber: '14', trackName: 'You Know My Name', trackLength: '4:01' }
      ]
    },
    {
      id: '3',
      albumYear: '2009',
      albumTitle: 'Scream',
      albumArtwork: '/assets/chrisCornell/scream.jpg',
      track: [
        { trackNumber: '1', trackName: 'Part Of Me', trackLength: '5:14' },
        { trackNumber: '2', trackName: 'Time', trackLength: '4:39' },
        { trackNumber: '3', trackName: 'Sweet Revenge', trackLength: '4:10' },
        { trackNumber: '4', trackName: 'Get Up', trackLength: '3:35' },
        { trackNumber: '5', trackName: 'Ground Zero', trackLength: '3:09' },
        { trackNumber: '6', trackName: 'Never Far Away', trackLength: '5:06' },
        { trackNumber: '7', trackName: 'Take Me Alive', trackLength: '4:36' },
        { trackNumber: '8', trackName: 'Long Gone', trackLength: '5:15' },
        { trackNumber: '9', trackName: 'Scream', trackLength: '6:14' },
        { trackNumber: '10', trackName: 'Enemy', trackLength: '4:35' },
        { trackNumber: '11', trackName: 'Other StrackNumbere Of Town', trackLength: '4:48' },
        { trackNumber: '12', trackName: 'Climbing Up The Walls', trackLength: '4:48' },
        { trackNumber: '13', trackName: 'Watch Out', trackLength: '4:02' },
        { trackNumber: '14', trackName: 'Two Drink Minimum', trackLength: '3:03' }
      ]
    },
    {
      id: '4',
      albumYear: '2015',
      albumTitle: 'Higher Truth',
      albumArtwork: '/assets/chrisCornell/high.jpg',
      track: [
        { trackNumber: '1', trackName: 'Forgot My Broken Heart', trackLength: '3:54' },
        { trackNumber: '2', trackName: 'Dead Wishes', trackLength: '4:55' },
        { trackNumber: '3', trackName: 'Worried Moon', trackLength: '4:32'},
        { trackNumber: '4', trackName: 'Before We Disappear', trackLength: '3:51' },
        { trackNumber: '5', trackName: 'Through The Window', trackLength: '4:41' },
        { trackNumber: '6', trackName: 'Josephine', trackLength: '3:38' },
        { trackNumber: '7', trackName: 'Murderer Of Blue Skies', trackLength: '3:42' },
        { trackNumber: '8', trackName: 'Higher Truth', trackLength: '5:06' },
        { trackNumber: '9', trackName: 'Let Your Eyes Wander', trackLength: '3:42' },
        { trackNumber: '10', trackName: 'Only These Words', trackLength: '3:29' },
        { trackNumber: '11', trackName: 'Circling', trackLength: '3:28' },
        { trackNumber: '12', trackName: 'Our Time In The Universe', trackLength: '4:19' }
      ]
    },
  ],
  };

  constructor() { }

}
