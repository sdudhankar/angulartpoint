import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-astyle-guide',
  templateUrl: './astyle-guide.component.html',
  styleUrls: ['./astyle-guide.component.css']
})
export class AstyleGuideComponent implements OnInit {

  constructor(private route:Router) {
  }

 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/acomponent']);
   }
   prev():void
   {
     this.route.navigate(['/aarchit']);
   }
}
