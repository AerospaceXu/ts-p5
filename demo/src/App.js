import { sketchCreator } from '../../ts-p5/index';
import RaindropService from './services/raindrop.service';

import { getWindowSize } from '../../ts-p5/utils';

const App = () => {
  let raindropService;

  sketchCreator(
    {
      preload: function () {
        raindropService = new RaindropService();
      },
      setup: function (p) {
        const { width, height } = getWindowSize();
        p.createCanvas(width, height);
        p.background(0);

        setInterval(() => {
          raindropService.update();
        }, 5000);
      },
      draw: function (p) {
        p.background(0);
        p.noStroke();
        if (raindropService) {
          raindropService.raindrops.forEach((raindrop) => {
            const { x, y, thick, len, opacity } = raindrop.raindropAttr;
            p.fill(`rgba(255, 255, 255, ${opacity})`);
            p.rect(x, y, thick, len, 5);
            raindrop.dropFall();
          });
        }
      },
    },
    document.querySelector('#sketch')
  );
};

export default App;
