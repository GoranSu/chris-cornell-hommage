import { Component } from '@angular/core';
import { Artist } from '../model/artist.model';
import { Fade } from '../shared/animations';
import { ArtistService } from '../shared/artist.service';

@Component({
  selector: 'app-soundgarden',
  templateUrl: './soundgarden.component.html',
  styleUrls: ['./soundgarden.component.css'],
  animations: [ Fade(1000) ]
})
export class SoundgardenComponent {
  artist: Artist;

  constructor(private service: ArtistService) {
    this.service.getArtist('Soundgarden').subscribe((response: Artist) => {
      this.artist = response[0];
    });
  }
}
