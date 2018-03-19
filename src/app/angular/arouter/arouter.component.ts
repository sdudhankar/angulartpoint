import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-arouter',
  templateUrl: './arouter.component.html',
  styleUrls: ['./arouter.component.css']
})
export class ArouterComponent implements OnInit {
  constructor(private route:Router){

  }
  ngOnInit() {
    //Scrolling vertical scrollbar when go down
    document.getElementById("ss").scrollTop += 410;
         }
   next():void{
     this.route.navigate(['/aform']);
     }
     prev():void
     {
       this.route.navigate(['/ahttp']);
     }

}
