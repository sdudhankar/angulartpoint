import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-avariable',
  templateUrl: './avariable.component.html',
  styleUrls: ['./avariable.component.css']
})
export class AvariableComponent implements OnInit {
  live:boolean=false;
  constructor(private route:Router) {
  }

 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/aclassobject']);
   }
   prev():void
   {
     this.route.navigate(['/adatatype']);
   }
  
  demo():void{
      this.live=!this.live;
  }
}
