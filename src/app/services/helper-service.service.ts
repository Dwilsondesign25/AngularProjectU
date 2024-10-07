import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HelperService {
    datePipe: DatePipe = new DatePipe("en-US"); 
    setDateForDisplay(dateToConvert: Date | string){
        // console.log(typeof dateToConvert);
        if (typeof dateToConvert === 'string') {
          dateToConvert = new Date(Date.parse(dateToConvert));
        }
        return this.datePipe.transform(dateToConvert, "MM/DD/YYYY hh:mm:ss a");
      }
}