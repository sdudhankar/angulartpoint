import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-astring',
  templateUrl: './astring.component.html',
  styleUrls: ['./astring.component.css']
})
export class AstringComponent implements OnInit {

  constructor(private route:Router) {
this.test();
  }
test()
{


}
 ngOnInit() {
 }
 next():void{
   this.route.navigate(['/aoprloop']);
   }
   prev():void
   {
     this.route.navigate(['/aclassobject']);
   }

}




