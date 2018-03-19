import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $ : any

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {
histroy:boolean=false;
default:boolean=true;
  constructor(private route:Router) { }
  
 

  ngOnInit() {
    $(document).ready(function () {
      $('a').click(function () {
       // if(($('.jside').hasClass('active'))){
            //alert("java")
            if($('.li.menu1').hasClass('active')){
              console.log("Java");
              $('.li.menu.angular').removeClass('active');
            $('.nav').find('.java').addClass('active');
            
            //$('.nav').find('.angular').removeClass('active');
             
      }
    

      });
  });
  }

}
