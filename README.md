# ts-p5

ts-p5 为了提供给 p5 提供更好的代码提示，与更符合初学者直觉的书写方式。

## 如何写？

安装 `npm i ts-p5`。

```js
import { sketchCreator } from 'ts-p5';
import { getWindowSize } from 'ts-p5/utils';

sketchCreator(
  {
    preload: function () {},
    setup: function (p) {
      const { width, height } = getWindowSize();
      p.createCanvas(width, height);
      p.background(0);
    },
    draw: function (p) {
      p.background(0);
      p.noStroke();
    },
    mousePressed: function (p) {
      console.log(p.mouseX);
      console.log(p.mouseY);
    },
  },
  document.querySelector('#sketch')
);
```

## utils

`import { map, getWindowSize } from 'ts-p5/utils'`

将常用的函数实现了一遍放在该文件夹下，方便使用。

## Service

将动画效果抽象为一项服务是解耦的重点。

例如下雨动画中，我们将雨滴储存在一个数组中 `raindrops: Raindrop`，通过 `update` 方法更新雨滴的数量。
