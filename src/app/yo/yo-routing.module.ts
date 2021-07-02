import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YOPage } from './yo.page';

const routes: Routes = [
  {
    path: '',
    component: YOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YOPageRoutingModule {}
