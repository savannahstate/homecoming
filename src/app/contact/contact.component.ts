import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  public received = false;
  public error = false; 
  
  constructor(fb: FormBuilder){
    this.contactForm = fb.group({
        'name': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
        'email': ['',Validators.compose([Validators.required, Validators.pattern(/\w+@\w+/)])],
        'phone': ['',Validators.compose([Validators.required, Validators.minLength(10),Validators.pattern(/[[\D]?\d[\D]?/)])],
        'message': ['',Validators.compose([Validators.required, Validators.minLength(10)])],
    });
  }

  ngOnInit() {

  }
  
  //Submit to email service
  onSubmit(x: FormGroup):void{
    
  }
}
