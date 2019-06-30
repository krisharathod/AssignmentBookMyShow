import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { e } from '@angular/core/src/render3';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  public movies = [];
  constructor(private ser: SearchService) {}
public showAllMovie = false;
  ngOnInit() {

    this.ser.tabClickItems$.subscribe(
      events => {
        if (events == 'movie') {
          this.showAllMovie = true;
        }
        else
        {
          this.showAllMovie = false;
        }
      }
    );
  }


}
