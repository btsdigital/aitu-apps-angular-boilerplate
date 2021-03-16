import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SliderPageRoutingModule } from './slider-routing.module';

import { SliderPage } from './slider.page';
import {SliderContentComponent} from '../slider-content/slider-content.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SliderPageRoutingModule
  ],
  exports: [
    SliderPage
  ],
  declarations: [SliderPage, SliderContentComponent]
})
export class SliderPageModule {}
