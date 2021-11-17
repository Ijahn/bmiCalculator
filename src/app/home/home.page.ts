import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  heights = [];
  weights = [];
  bmi: number;
  form: FormGroup;
  message: string;

  public getHeights() {
    for (let i = 100; i <= 230; i++) {
      this.heights.push(i);
    }
  }

  public getWeights() {
    for (let i = 65; i <= 160; i++) {
      this.weights.push(i);
    }
  }

  constructor() { }

  ngOnInit() {
    this.getHeights();
    this.getWeights();
    this.form = new FormGroup({
      weight: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.minLength(2)]
      }),
      height: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.minLength(2)]
      })
    });
  }

  onSubmit() {
    const heightInMeters = this.form.controls['height'].value / 100;
    this.bmi = Math.round(this.form.controls['weight'].value / (heightInMeters * heightInMeters));
    if (this.bmi < 18.5) {
      this.message = `Your BMI is ${this.bmi}, you are underweight.`
    } else if (this.bmi < 25) {
      this.message = `Your BMI is ${this.bmi}, you have a normal weight.`
    } else if (this.bmi < 30) {
      this.message = `Your BMI is ${this.bmi}, you are slightly overweight weight.`
    } else if (this.bmi < 35) {
      this.message = `Your BMI is ${this.bmi}, you are obese.`
    } else {
      this.message = `Your BMI is ${this.bmi}, you are clinically obese.`
    }
  }

  onReset() {
    this.message = '';
    this.bmi = null;
    this.form.reset();
  }
}
