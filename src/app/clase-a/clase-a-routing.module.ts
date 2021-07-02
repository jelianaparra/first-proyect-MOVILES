import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseAPage } from './clase-a.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseAPageRoutingModule {}
