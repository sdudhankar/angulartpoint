import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ainputoutput',
  templateUrl: './ainputoutput.component.html',
  styleUrls: ['./ainputoutput.component.css']
})
export class AinputoutputComponent implements OnInit {

  constructor(private route:Router) {
  }

  ngOnInit() {
    //Scrolling vertical scrollbar when go down
    document.getElementById("ss").scrollTop +=220;
         }
     next():void{
       this.route.navigate(['/ainterface']);
       }
       prev():void
       {
         this.route.navigate(['/aclc']);
       }

}
