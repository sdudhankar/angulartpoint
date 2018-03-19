import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aservice',
  templateUrl: './aservice.component.html',
  styleUrls: ['./aservice.component.css']
})
export class AserviceComponent implements OnInit {

  constructor(private route:Router){

  }
  ngOnInit() {
    //Scrolling vertical scrollbar when go down
    document.getElementById("ss").scrollTop += 300;
         }
   next():void{
     this.route.navigate(['/adi']);
     }
     prev():void
     {
       this.route.navigate(['/ainterface']);
     }
 
}
