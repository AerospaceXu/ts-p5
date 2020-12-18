import { Injectable } from '../ioc';

import Raindrop from '../components/Raindrop';

import { map } from '../utils';

// m/s
const PERSON_SPEED_MAX = 3;
const PERSON_SPEED_MIN = 0;

const RAINDROP_NUMBER_MAX = 800;
const RAINDROP_NUMBER_MIN = 200;

@Injectable()
class RaindropService {
  private drops: Raindrop[] = [];

  private personSpeed: number = 0;

  constructor() {
    for (let i = 0; i < this.raindropNumber; i += 1) {
      this.drops.push(new Raindrop());
    }
  }

  get raindrops() {
    return this.drops;
  }

  get raindropNumber() {
    return map(
      this.personSpeed,
      PERSON_SPEED_MIN,
      PERSON_SPEED_MAX,
      RAINDROP_NUMBER_MIN,
      RAINDROP_NUMBER_MAX
    );
  }

  public update() {
    if (this.personSpeed + 0.1 <= PERSON_SPEED_MAX) {
      this.personSpeed += 0.1;
    }
    const delta = this.raindropNumber - this.drops.length;
    if (delta > 0) {
      for (let i = 0; i < delta; i += 1) {
        this.drops.push(new Raindrop());
      }
    } else {
      this.drops = this.drops.slice(delta);
    }
  }
}

export default RaindropService;
