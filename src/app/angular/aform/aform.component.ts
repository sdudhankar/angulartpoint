import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-aform',
  templateUrl: './aform.component.html',
  styleUrls: ['./aform.component.css']
})
export class AformComponent implements OnInit {

  constructor(private route:Router){

  }
  ngOnInit() {
    //Scrolling vertical scrollbar when go down
    document.getElementById("ss").scrollTop += 410;
         }
   next():void{
     this.route.navigate(['/ahome']);
     }
     prev():void
     {
       this.route.navigate(['/arouter']);
     }

}
