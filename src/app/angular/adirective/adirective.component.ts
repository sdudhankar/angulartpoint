import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adirective',
  templateUrl: './adirective.component.html',
  styleUrls: ['./adirective.component.css']
})
export class AdirectiveComponent implements OnInit {
  live:boolean=false;
  constructor(private route:Router) {
  }

     ngOnInit() {
       //Scrolling vertical scrollbar when go down
document.getElementById("ss").scrollTop += 120;
     }
     next():void{
       this.route.navigate(['/aclc']);
       }
       prev():void
       {
         this.route.navigate(['/abinding']);
       }
       nav_component():void
      {
          this.route.navigate(['/acomponent']);
      }

       demo():void{
         this.live=!this.live;
       }
}
