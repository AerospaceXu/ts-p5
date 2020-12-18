import P5 from 'p5';
import { Inject } from '../ioc';

import P5Service from '../services/p5.service';

class Sketch {
  @Inject() private p5Service: P5Service;

  private sketchBoard: HTMLDivElement;

  constructor() {
    this.sketchBoard = document.querySelector('#sketch') as HTMLDivElement;
  }

  initSketchBoard() {
    new P5((p: P5) => {
      this.p5Service.injectP5(p);

      p.preload = () => this.p5Service.preload();

      p.setup = () => this.p5Service.setup();

      p.draw = () => this.p5Service.draw();
    }, this.sketchBoard);
  }
}

export default Sketch;
