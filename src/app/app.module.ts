import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CornellComponent } from './cornell/cornell.component';
import { AudioSlaveComponent } from './audio-slave/audio-slave.component';
import { SoundgardenComponent } from './soundgarden/soundgarden.component';
import { TempleComponent } from './temple/temple.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CornellComponent,
    SoundgardenComponent,
    TempleComponent,
    AudioSlaveComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'cornell',
        component: CornellComponent
      },
      {
        path: 'audioslave',
        component: AudioSlaveComponent
      },
      {
        path: 'soundgarden',
        component: SoundgardenComponent
      },
      {
        path: 'temple',
        component: TempleComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
