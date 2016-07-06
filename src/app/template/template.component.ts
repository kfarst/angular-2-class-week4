import { Component } from '@angular/core';

export interface User {
  name: string;
  address?: {
    address1?: string;
    postcode?: string;
  };
}

@Component({
  moduleId: module.id,
  selector: 'app-template',
  templateUrl: 'template.component.html',
  styleUrls: ['template.component.css']
})
export class TemplateComponent {
  public user: User = {
    name: '',
    address: {
      address1: '',
      postcode: ''
    }
  };

  public save(form: User, isValid: boolean) {
    console.log(form, isValid);
  }
}
