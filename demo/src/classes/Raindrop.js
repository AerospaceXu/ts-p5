import { map, getWindowSize } from '../../../ts-p5/utils/index';

const Z_MAX = 20;

class Raindrop {
  x = 0;

  y = 0;

  z = 0;

  len = 0;

  thick = 0;

  opacity = 0;

  ySpeed = 0;

  get raindropAttr() {
    const { x, y, len, thick, opacity } = this;
    return {
      x,
      y,
      len,
      thick,
      opacity,
    };
  }

  constructor() {
    this.replace();
    this.y = -450 * Math.random() - 50;
  }

  replace() {
    const { width } = getWindowSize();
    this.z = Math.random() * Z_MAX;
    this.x = Math.random() * width;
    this.opacity = map(this.z, 0, Z_MAX, 0.12, 0.54);
    this.len = map(this.z, 0, Z_MAX, 8, 20);
    this.ySpeed = map(this.z, 0, Z_MAX, 4, 10);
    this.thick = map(this.z, 0, Z_MAX, 1, 5);
    this.y = Math.random() * -10;
  }

  dropFall() {
    const { height } = getWindowSize();
    this.y += this.ySpeed;
    const gravy = map(this.z, 0, Z_MAX, 0, 0.18);
    this.ySpeed += gravy;

    if (this.y >= height) {
      this.replace();
    }
  }
}

export default Raindrop;
