import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor() { }
  showTodayDate() { 
    let today = new Date(); 
    console.log(today);
    return today;
  } 
}
