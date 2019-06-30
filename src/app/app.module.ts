import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieComponent } from './components/navbar/movie/movie.component';
import { IndividualComponent } from './components/individual/individual.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './components/events/events.component';
import { PlaysComponent } from './components/plays/plays.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    IndividualComponent,
    EventsComponent,
    PlaysComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
