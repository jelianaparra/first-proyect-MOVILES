import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseAPageRoutingModule } from './clase-a-routing.module';

import { ClaseAPage } from './clase-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseAPageRoutingModule
  ],
  declarations: [ClaseAPage]
})
export class ClaseAPageModule {}
