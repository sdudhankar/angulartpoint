import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-afarfun',
  templateUrl: './afarfun.component.html',
  styleUrls: ['./afarfun.component.css']
})
export class AfarfunComponent implements OnInit {

 
  constructor(private route:Router) {
  }
     ngOnInit() {
      document.getElementById("ss").scrollTop += 60;
     }
     next():void{
       this.route.navigate(['/abinding']);
       }
       prev():void
       {
         this.route.navigate(['/aoprloop']);
       }
}
