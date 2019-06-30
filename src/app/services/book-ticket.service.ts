import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookTicketService {

  constructor(private http: HttpClient) {
     }

     public getLocation() {
       return this.http.get<any>('../assets/api/location.json');
      }

      public selectSeats()
      {
        return this.http.get<any>('../assets/api/bookSeats.json');
      }
     }

