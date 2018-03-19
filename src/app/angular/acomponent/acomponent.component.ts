import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.css']
})
export class AcomponentComponent implements OnInit {
  live:boolean=false;
  constructor(private route:Router) {
  }

 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/adatatype']);
   }
   prev():void
   {
     this.route.navigate(['/astyleguide']);
   }
  
  demo():void{
    this.live=!this.live;
  }
}
