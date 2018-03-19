import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-aenvironment',
  templateUrl: './aenvironment.component.html',
  styleUrls: ['./aenvironment.component.css']
})
export class AenvironmentComponent implements OnInit {
  constructor(private route:Router) {
   }

  ngOnInit() {
  }
  next():void{
    this.route.navigate(['/acli']);
    }
    prev():void
    {
      this.route.navigate(['/aoverview']);
    }
}
