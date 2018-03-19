import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-abinding',
  templateUrl: './abinding.component.html',
  styleUrls: ['./abinding.component.css']
})
export class AbindingComponent implements OnInit {
  live:boolean=false;
  live1:boolean=false;
  live2:boolean=false;
  live3:boolean=false;
  live4:boolean=false;
  constructor(private route:Router) {
  }
  ngOnInit() {
    //Scrolling vertical scrollbar when go down
    document.getElementById("ss").scrollTop += 90;
         }
     next():void{
       this.route.navigate(['/adirective']);
       }
       prev():void
       {
         this.route.navigate(['/afarrfun']);
       }
      
  demo():void{
      this.live=!this.live;
  }
  demo1():void{
    this.live1=!this.live1;
  }
  demo2():void{
    this.live2=!this.live2;
  }
  demo3():void{
    this.live3=!this.live3;
  }
  demo4():void{
    this.live4=!this.live4;
}
}
