import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-ahttp',
  templateUrl: './ahttp.component.html',
  styleUrls: ['./ahttp.component.css']
})
export class AhttpComponent implements OnInit {

  constructor(private route:Router){

  }
  ngOnInit() {
    //Scrolling vertical scrollbar when go down
    document.getElementById("ss").scrollTop += 380;
         }
   next():void{
     this.route.navigate(['/arouter']);
     }
     prev():void
     {
       this.route.navigate(['/adi']);
     }
}
