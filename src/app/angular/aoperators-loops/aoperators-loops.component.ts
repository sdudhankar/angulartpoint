import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aoperators-loops',
  templateUrl: './aoperators-loops.component.html',
  styleUrls: ['./aoperators-loops.component.css']
})
export class AoperatorsLoopsComponent implements OnInit {
  live:boolean=false; 
  constructor(private route:Router) {
  }
     ngOnInit() {
      document.getElementById("ss").scrollTop += 30;
     }
     next():void{
       this.route.navigate(['/afarrfun']);
       }
       prev():void
       {
         this.route.navigate(['/astring']);
       }
       
      demo():void{
      this.live=!this.live;
  }

}
