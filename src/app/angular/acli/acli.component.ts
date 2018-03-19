import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $ : any

@Component({
  selector: 'app-acli',
  templateUrl: './acli.component.html',
  styleUrls: ['./acli.component.css']
})
export class AcliComponent implements OnInit {
  live:boolean=false;
  constructor(private route:Router) {
  }

 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/adirstr']);
   }
   prev():void
   {
     this.route.navigate(['/aenvironment']);
   }
  demo():void{
    this.live=!this.live;
  }
}



