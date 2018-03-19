import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-aclass-object',
  templateUrl: './aclass-object.component.html',
  styleUrls: ['./aclass-object.component.css']
})
export class AclassObjectComponent implements OnInit {
  live:boolean=false;
  constructor(private route:Router) {
  }

 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/astring']);
   }
   prev():void
   {
     this.route.navigate(['/avariable']);
     
   }
  
  demo():void{
      this.live=!this.live;
  }
}

