import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  usr="";
  pwd="";

  isvar=true;
  temp(){

    this.isvar=false;
    this.usr="amit";
    this.pwd="123";
     
  }
temp1(){
  alert("success")
}



}