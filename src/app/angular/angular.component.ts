import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $ : any

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent{
    hasBeenClicked:boolean=false;
  constructor(private route:Router) { 
/*This code helps to start each and every webpage from top*/ 
    $(document).ready(function(){
        $(this).scrollTop(0);
    });
  }
  ngOnInit(){
//Blink Live Demo button
/*
var blink = function(){
    $('.blink_me').fadeIn(500);
    $('.blink_me').fadeOut(500);         
  };
  var blinkID = setInterval(blink, 1500);
  
  $("#c").click(function(){
     clearInterval(blinkID); 
  });
   */
    //End Blinking live button
    $(document).ready(function () {  
        $('a').click(function () {
          if($(this).hasClass("s")){
            console.log("Angular");
            $('#about').removeClass('active');
             $('.nav').find('#ang').addClass('active');
          }
            //else if($('a').hasClass('active')){
                else if($(this).hasClass("about")){
                    console.log("About");
                    $('#ang').removeClass('active');
                     $('.nav').find('#about').addClass('active');
        }
        });
    });
      //Side bar 
      /*
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
  });
  */
  //End
  }

  ngAfterViewInit(){
    //To hide and show Top prev and next button 
   var mywindow = $(window);
   var mypos = mywindow.scrollTop();
   mywindow.scroll(function() {
       if(mywindow.scrollTop() > 14)
       {
           $('.prevBtn').fadeOut(); 
       }
       else
       {
           $('.prevBtn').fadeIn();
       }
        if(mywindow.scrollTop() > 14)
       {
           $('.nextBtn').fadeOut(); 
       }
       else
       {
           $('.nextBtn').fadeIn();
       }
       //add
       
   //end
       mypos = mywindow.scrollTop();
   });
    
  }

}
