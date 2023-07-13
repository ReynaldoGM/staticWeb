import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { EmailService } from '../email/email.service';
import { Router } from '@angular/router';
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

  constructor(private emailService: EmailService,private router: Router) { }
  onSubmit(){

    console.log(JSON.stringify(this.contactForm.value));
    console.log(this.contactForm.get('inputName')?.value);
    console.warn(this.contactForm.getRawValue());

    this.emailService.sendEmailContact('{"subject":"Contact Message","text":'+JSON.stringify(this.contactForm.value)+'}').subscribe(
      e => console.log('HTTP :', e),
    );
    console.log("Mail send");
    this.router.navigate(['/response']);

  }


}
