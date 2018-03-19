import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
var $:any;
@Component({
  selector: 'app-acomp-life-cycle',
  templateUrl: './acomp-life-cycle.component.html',
  styleUrls: ['./acomp-life-cycle.component.css']
})
export class AcompLifeCycleComponent implements OnInit {

  constructor(private route:Router) {
  }
  ngOnInit() {
//Scrolling vertical scrollbar when go down
document.getElementById("ss").scrollTop += 170;
     }

   
     next():void{
       this.route.navigate(['/ainputoutput']);
       }
       prev():void
       {
         this.route.navigate(['/adirective']);
       }

}
