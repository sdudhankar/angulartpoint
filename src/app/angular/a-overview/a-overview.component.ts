import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-a-overview',
  templateUrl: './a-overview.component.html',
  styleUrls: ['./a-overview.component.css']
})
export class AOverviewComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  next():void{
    this.route.navigate(['/aenvironment']);
    }
    prev():void
    {
      this.route.navigate(['/ahome']);
    }
}
