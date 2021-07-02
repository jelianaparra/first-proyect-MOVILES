import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseBPage } from './clase-b.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseBPageRoutingModule {}
