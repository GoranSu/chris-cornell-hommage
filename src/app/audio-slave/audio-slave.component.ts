import { ArtistService } from './../shared/artist.service';
import { Component } from '@angular/core';
import { Artist } from '../model/artist.model';
import { Fade } from '../shared/animations';

@Component({
  selector: 'app-audio-slave',
  templateUrl: './audio-slave.component.html',
  styleUrls: ['./audio-slave.component.css'],
  animations: [ Fade(1000) ]
})
export class AudioSlaveComponent {
  artist: Artist;

  constructor(private service: ArtistService) {
    this.service.getArtist('Audioslave').subscribe((response: Artist) => {
      this.artist = response[0];
    });
  }
}
