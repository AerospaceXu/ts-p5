import { map, getWindowSize } from '../utils/index';

const Z_MAX = 20;

class Raindrop {
  private x: number = 0;

  private y: number = 0;

  private z: number = 0;

  private len: number = 0;

  private thick: number = 0;

  private opacity: number = 0;

  private ySpeed: number = 0;

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

  public replace() {
    const { width } = getWindowSize();
    this.z = Math.random() * Z_MAX;
    this.x = Math.random() * width;
    this.opacity = map(this.z, 0, Z_MAX, 0.12, 0.54);
    this.len = map(this.z, 0, Z_MAX, 8, 20);
    this.ySpeed = map(this.z, 0, Z_MAX, 4, 10);
    this.thick = map(this.z, 0, Z_MAX, 1, 5);
    this.y = Math.random() * -10;
  }

  public dropFall() {
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
