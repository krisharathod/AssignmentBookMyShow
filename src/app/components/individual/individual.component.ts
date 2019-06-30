import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { BookTicketService } from 'src/app/services/book-ticket.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit {
  public movies = [];
  public movieName;
  public selectSeatsFlag = false;
  public location = [];
  public locationFlag = false;
  public seats = '';
  public seatsInTheater = [];
  public selectSeat = [];
  public proceedTowordsPayament = false;
  public count = 0;
  public amount: number;
  public buttonFlag = false;
  constructor(
    private ser: SearchService,
    private ticketSer: BookTicketService
  ) {
    this.movies.push('Bharat');
    this.movies.push('Kabir');
    this.movies.push('Kalank');
  }
  ngOnInit() {
    this.selectSeatsFlag = false;
    this.locationFlag = false;
    this.proceedTowordsPayament = false;
    this.buttonFlag = false;
    //subcribe for search
    this.ser.serachItems$.subscribe(msg => {
      this.movieName = msg;
      if(msg == '')
      {
        this.proceedTowordsPayament = false;
      }
      for (let i = 0; i < this.movies.length; i++)
      {
        if (this.movies[i] == msg)
        {
      this.buttonFlag = true;
      this.proceedTowordsPayament = false;
        }
      }
    });
  }

  // api call taking location
  OnBookTicket() {
    this.selectSeatsFlag = false;
    this.locationFlag = true;
    this.buttonFlag = false;
    this.ticketSer.getLocation().subscribe(res => {
      this.location = res;
    });
  }


  //pop-up to select no. of seats
  SelectMovie(city: any, theater: any, time: any) {
    this.selectSeatsFlag = false;
    this.locationFlag = true;
    const inputOptions = {
      ONE: 'One',
      TWO: 'Two',
      THREE: 'Three',
      Four: 'Four',
      FIVE: 'Five',
      SIX: 'Six',
      SEVEN: 'Seven',
      EIGHT: 'Eight',
      NINE: 'Nine',
      TEN: 'Ten'
    };

    Swal.fire({
      title: 'Select Seat',
      input: 'radio',
      inputOptions: inputOptions,
      width: 'auto',

      inputValidator: value => {
        this.seats = value;
        if (!value) {
          return 'You need to choose something!';
        } else {
          this.selectSeatsFlag = true;
          this.locationFlag = false;
          //api calling for theatre seats
          this.ticketSer.selectSeats().subscribe(seats => {
            this.seatsInTheater = seats;
          });
        }
      }
    });
  }


//shows the result of selected seats and amount
  onBookSeat(f) {
    this.proceedTowordsPayament = true;
    this.selectSeatsFlag = false;
    this.selectSeat.length = 0;
    this.amount = 0.0;
    for (let i = 0; i < this.seatsInTheater.length; i++) {
      if (f.value[i]) {
        this.selectSeat.push(
          this.seatsInTheater[i]['seatsName'] +
            '  ' +
            this.seatsInTheater[i]['SeatType']
        );
        this.count++;
        this.amount += this.seatsInTheater[i]['charges'];
      }
    }
  }
}
