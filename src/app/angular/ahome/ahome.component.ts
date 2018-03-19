import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AHomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  next():void{
    this.route.navigate(['/aoverview']);
    }
}
