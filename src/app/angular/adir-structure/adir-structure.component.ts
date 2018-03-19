import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adir-structure',
  templateUrl: './adir-structure.component.html',
  styleUrls: ['./adir-structure.component.css']
})
export class AdirStructureComponent implements OnInit {

  constructor(private route:Router) {
  }

 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/aarchit']);
   }
   prev():void
   {
     this.route.navigate(['/acli']);
   }
}
