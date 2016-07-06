import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailValidator } from '../email-validator.directive';

@Component({
  moduleId: module.id,
  selector: 'app-model',
  templateUrl: 'model.component.html',
  styleUrls: ['model.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, EmailValidator]
})
export class ModelComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', EmailValidator],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        zip: ['', Validators.required],
        city: ['', Validators.required]
      })
    });

    var formValues = sessionStorage.getItem('form');

    if (formValues) {
      this.applyFormValues(this.registerForm, JSON.parse(formValues));
    }

    this.
      registerForm.
      valueChanges.
      subscribe(form => {
        if (this.registerForm.valid) {
          sessionStorage.setItem('form', JSON.stringify(form));
          console.log('Saved: ', form);
        }
      });
  }

  destroyFormValues () {
    sessionStorage.removeItem('form');
    alert('Saved form data deleted');
  }

  private applyFormValues (group, formValues) {
    Object.keys(formValues).forEach(key => {
      let formControl = group.controls[key];

      if (formControl.hasOwnProperty('controls')) {
        this.applyFormValues(formControl, formValues[key]);
      } else {
        (<FormControl>formControl).updateValue(formValues[key]);
      }
    });
  }
}
