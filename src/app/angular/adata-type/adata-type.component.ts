import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adata-type',
  templateUrl: './adata-type.component.html',
  styleUrls: ['./adata-type.component.css']
})

export class AdataTypeComponent implements OnInit {
  live:boolean=false;
  constructor(private route:Router) {
  }

 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/avariable']);
   }
   prev():void
   {
     this.route.navigate(['/acomponent']);
   }
   demo():void{
    this.live=!this.live;
  }
}
