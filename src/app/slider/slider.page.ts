import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { defer } from 'rxjs';
import aituBridge from '@btsd/aitu-bridge';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: 'slider.page.html',
  styleUrls: ['slider.page.scss'],
})
export class SliderPage {
  @ViewChild('sliderContainer') slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  name = defer(() => aituBridge.getMe()).pipe(
    map((item) => item.name + ', '),
    startWith(''),
  );

  swipeNext() {
    this.slides.slideNext();
  }
}
