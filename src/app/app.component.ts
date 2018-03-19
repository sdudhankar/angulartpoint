import { Component } from '@angular/core';
declare var $ : any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  ngOnInit()
  {

//Side bar Toggle
$(document).ready(function(){
  var flag=0;
                   $('#sidebarCollapse').on('click', function () {
                     
          if(flag){
          $('.main').css('margin-left', '0');
          flag=0;
          alert("if")
          }
          else{
          $('.main').css('margin-left', '250px');
          flag=1;
          }
                   });
               });
//End



    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
           document.getElementById("myBtn").style.display = "block";
       } else {
           document.getElementById("myBtn").style.display = "none";
       }
   }
   
  }
  title = 'app';
 //To go Top
 
// When the user clicks on the button, scroll to the top of the document
 topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

}