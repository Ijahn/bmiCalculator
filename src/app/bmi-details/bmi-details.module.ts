import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiDetailsPageRoutingModule } from './bmi-details-routing.module';

import { BmiDetailsPage } from './bmi-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiDetailsPageRoutingModule
  ],
  declarations: [BmiDetailsPage]
})
export class BmiDetailsPageModule {}
