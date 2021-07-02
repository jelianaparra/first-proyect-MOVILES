import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaseCPage } from './clase-c.page';

const routes: Routes = [
  {
    path: '',
    component: ClaseCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaseCPageRoutingModule {}
