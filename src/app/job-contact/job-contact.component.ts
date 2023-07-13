import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { EmailService } from '../email/email.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-job-contact',
  templateUrl: './job-contact.component.html',
  styleUrls: ['./job-contact.component.css']
})
export class JobContactComponent implements OnInit {


  jobForm = new FormGroup({
    inputName: new FormControl('', Validators.required),
    inputAdress: new FormControl(''),
    inputEmail: new FormControl(''),
    inputPhone: new FormControl('', Validators.required),
    inputExperience: new FormControl('Experience'),
    inputLicense: new FormControl('Type of license'),
    inputYol: new FormControl(''),
    inputCurrentCompany: new FormControl(''),
    inputRoutes: new FormControl('')
  });



  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit() {
    console.log('hi');
    // Create an interval of 15 minutes (15 * 60,000 milliseconds)
    const interval$ = interval(14 * 60 * 1000);

    // Use switchMap to switch to a new observable when the interval emits
    interval$
      .pipe(
        startWith(0), // Start immediately
        switchMap(() => this.emailService.getMail())
      )
      .subscribe((response) => {
        // Handle the response from the GET request
        console.log(response);
      });
  }

  onSubmit() {
    console.log(JSON.stringify(this.jobForm.value));
    console.log(this.jobForm.get('inputName')?.value);
    console.warn(this.jobForm.getRawValue());

    this.emailService.sendMail('{"subject":"Contact Driver","text":'+JSON.stringify(this.jobForm.value)+'}').subscribe(
      err => console.log('HTTP Error', err),
    );
    console.log("Mail send");
    this.router.navigate(['/response']);
  }
}
