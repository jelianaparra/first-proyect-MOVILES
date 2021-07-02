import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseBPageRoutingModule } from './clase-b-routing.module';

import { ClaseBPage } from './clase-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseBPageRoutingModule
  ],
  declarations: [ClaseBPage]
})
export class ClaseBPageModule {}
