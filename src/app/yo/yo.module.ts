import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YOPageRoutingModule } from './yo-routing.module';

import { YOPage } from './yo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YOPageRoutingModule
  ],
  declarations: [YOPage]
})
export class YOPageModule {}
