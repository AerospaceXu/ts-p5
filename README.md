# template-p5

该模板希望使用 TypeScript 以及 DI 的思想，为 p5 项目提供更好的模块化与解耦。模板自带一个供参考的下雨动画 Demo。

项目环境：`Node.js v14 及以上`。

- 下载依赖：`npm install`
- 调试项目：`npm run start`
- 构建项目：`npm run build`

对于新手来说，只需要看 `src` 目录，并且不需要看 `src/ioc` 目录。

## 钩子函数

`preload`, `setup`, `draw`, `mousePressed`……等 p5 提供的钩子函数请写在 `p5.service.ts` 中。

如果添加了新的函数，请在 `components/Sketch.ts` 中进行覆写。

例如添加 `preload` 函数：

```ts
// p5.service.ts
class P5Service {
  // ...
  // 在此处书写方法
  preload() {
    // doSomething()
  }
}

// Sketch.ts
new P5((p: P5) => {
  this.p5Service.injectP5(p);

  // 在此处覆写方法
  p.preload = () => this.p5Service.preload();

  p.setup = () => this.p5Service.setup();

  p.draw = () => this.p5Service.draw();
});
```

## utils

将常用的 p5 函数实现了一遍放在该文件夹下，方便使用。不需要 `p.xxx()`。

## Service

将动画效果抽象为一项服务是解耦的重点。

例如下雨动画中，我们将雨滴储存在一个数组中 `raindrops: Raindrop`，通过 `update` 方法更新雨滴的数量。

服务的开头需要使用 `@Injectable()` 进行“注册”，以便在其他位置通过 `@Inject()` 进行依赖注入。
