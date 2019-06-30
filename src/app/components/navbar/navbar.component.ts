import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private ser: SearchService) {}
  public movie = false;
  public results = [];
   public movies = false;
   public  homePageMovie = false;
   public events = false;
   public  plays = false;
public individualMovies = false;
  ngOnInit() {
    this.homePageMovie = true;
  }

  onKey(event: any) {
    console.log(event.target.value);
    this.ser.Search(event.target.value);
    this.individualMovies = true;
    this.homePageMovie = false;
    this.movies = false;
    this.events = false;
    this.plays = false;
    if (event.target.value == '') {
      this.homePageMovie = true;
    }
  }

  onTabClick(event) {
    this.homePageMovie = false;
    this.individualMovies = false;
    this.movies = false;
    this.events = false;
    this.plays = false;
    if (event == 'movie') {
      this.movies = true;
    } else if(event == 'event') {
      this.events = true;
  } else if(event == 'play') {
      this.plays = true;
  }

  this.ser.onTabClickSearch(event);
  }


}
