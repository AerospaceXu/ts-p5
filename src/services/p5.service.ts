import P5 from 'p5';
import { Inject, Injectable } from '../ioc';

import RaindropService from './raindrop.service';

import { getWindowSize } from '../utils';

@Injectable()
class P5Service {
  @Inject() raindropService: RaindropService;

  private p: P5;

  constructor() {}

  injectP5(p: P5) {
    this.p = p;
  }

  preload() {}

  setup() {
    const { width, height } = getWindowSize();
    this.p.createCanvas(width, height);
    this.p.background(0);

    setInterval(() => {
      this.raindropService.update();
    }, 5000);
  }

  draw() {
    this.p.background(0);
    this.p.noStroke();
    if (this.raindropService) {
      this.raindropService.raindrops.forEach((raindrop) => {
        const { x, y, thick, len, opacity } = raindrop.raindropAttr;
        this.p.fill(`rgba(255, 255, 255, ${opacity})`);
        this.p.rect(x, y, thick, len, 5);
        raindrop.dropFall();
      });
    }
  }
}

export default P5Service;
