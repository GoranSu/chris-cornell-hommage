import { Component } from '@angular/core';
import { Fade } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ Fade(1000) ]
})
export class AppComponent {
  navigation = [
    { link: 'cornell', label: 'Chris Cornell' },
    { link: 'audioslave', label: 'Audioslave' },
    { link: 'soundgarden', label: 'Soundgarden'},
    { link: 'temple', label: 'Temple Of The Dog'}
  ];
}
