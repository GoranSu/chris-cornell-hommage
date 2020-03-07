import { Component, OnInit } from '@angular/core';
import { Artist } from '../model/artist.model';
import { Fade } from '../shared/animations';
import { ArtistService } from '../shared/artist.service';

@Component({
  selector: 'app-cornell',
  templateUrl: './cornell.component.html',
  styleUrls: ['./cornell.component.css'],
  animations: [ Fade(1000) ]
})
export class CornellComponent {
  artist: Artist;

  constructor(private service: ArtistService) {
    this.service.getArtist('Chris Cornell').subscribe((response: Artist) => {
      this.artist = response[0];
    });
  }
}
