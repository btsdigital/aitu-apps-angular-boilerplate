import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slider-content',
  templateUrl: './slider-content.component.html',
  styleUrls: ['./slider-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderContentComponent implements OnInit {
  @Output()
  clickButton = new EventEmitter();
  @Input()
  title: string;
  @Input()
  description: string;
  @Input()
  buttonLabel: string;
  @Input()
  imageSrc: string;

  constructor() {}

  ngOnInit() {}

  swipeNext() {
    this.clickButton.emit();
  }
}
