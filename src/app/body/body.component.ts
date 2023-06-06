import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {


  contactForm = new FormGroup({
    inputName: new FormControl('',Validators.required),
    inputCompany: new FormControl(''),
    inputEmail: new FormControl(''),
    inputPhone: new FormControl('',Validators.required),
    inputMessage: new FormControl('')
  });


  onSubmit(){
    
  }


}
