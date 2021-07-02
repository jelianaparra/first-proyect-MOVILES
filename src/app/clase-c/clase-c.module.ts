import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClaseCPageRoutingModule } from './clase-c-routing.module';

import { ClaseCPage } from './clase-c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClaseCPageRoutingModule
  ],
  declarations: [ClaseCPage]
})
export class ClaseCPageModule {}
