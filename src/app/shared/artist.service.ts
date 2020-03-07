import { Artist } from './../model/artist.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private inMemoryApiUrl = 'api/artists';

  constructor(private http: HttpClient) { }

  getArtist(artist: string): Observable<Artist> {
    if (!artist.trim()) {
      // if not search term, return empty artist array.
      return of();
    }
    return this.http.get<Artist>(this.inMemoryApiUrl + '/?artistName=' + artist);
  }
}
