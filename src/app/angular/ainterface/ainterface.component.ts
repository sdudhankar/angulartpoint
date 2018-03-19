import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ainterface',
  templateUrl: './ainterface.component.html',
  styleUrls: ['./ainterface.component.css']
})
export class AinterfaceComponent implements OnInit {

 constructor(private route:Router){

 }
 ngOnInit() {
  //Scrolling vertical scrollbar when go down
  document.getElementById("ss").scrollTop += 260;
       }
  next():void{
    this.route.navigate(['/aservice']);
    }
    prev():void
    {
      this.route.navigate(['/ainputoutput']);
    }

}
