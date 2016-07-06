/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TemplateComponent } from './template.component';

describe('Component: Template', () => {
  it('should create an instance', () => {
    let component = new TemplateComponent();
    expect(component).toBeTruthy();
  });
});
