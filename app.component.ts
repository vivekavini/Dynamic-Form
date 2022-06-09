import { variable } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl,FormGroup,NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamicform';
  LoginForm !:FormGroup;
  submitted :boolean=false;
constructor(private _fb:FormBuilder){}

ngOnInIt()
{
  this.LoginForm=this._fb.group({
    FirstName:['',Validators.required],
    LastName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
 password:['',Validators.required,Validators.minLength(6)]
  })




}
onsubmit()
{
  this.submitted=true;
  console.log("form successfully submited.")
}


}
