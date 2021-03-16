import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderPage } from './slider.page';

const routes: Routes = [
  {
    path: '',
    component: SliderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SliderPageRoutingModule {}
