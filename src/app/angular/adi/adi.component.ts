import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adi',
  templateUrl: './adi.component.html',
  styleUrls: ['./adi.component.css']
})
export class AdiComponent implements OnInit {
  constructor(private route:Router){

  }
  ngOnInit() {
    //Scrolling vertical scrollbar when go down
    document.getElementById("ss").scrollTop += 340;
         }
   next():void{
     this.route.navigate(['/ahttp']);
     }
     prev():void
     {
       this.route.navigate(['/aservice']);
     }
}
