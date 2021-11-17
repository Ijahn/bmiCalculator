import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiDetailsPage } from './bmi-details.page';

const routes: Routes = [
  {
    path: '',
    component: BmiDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiDetailsPageRoutingModule {}
