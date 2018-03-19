import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aarchitecture',
  templateUrl: './aarchitecture.component.html',
  styleUrls: ['./aarchitecture.component.css']
})
export class AarchitectureComponent implements OnInit {

  constructor(private route:Router) {
  }

 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/astyleguide']);
   }
   prev():void
   {
     this.route.navigate(['/adirstr']);
   }

}
