import { Component} from '@angular/core';
import { Artist } from '../model/artist.model';import { Fade } from '../shared/animations';
import { ArtistService } from '../shared/artist.service';

@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.css'],
  animations: [ Fade(1000) ]
})
export class TempleComponent {
  artist: Artist;

  constructor(private service: ArtistService) {
    this.service.getArtist('Temple of the Dog').subscribe((response: Artist) => {
      this.artist = response[0];
    });
  }
}
