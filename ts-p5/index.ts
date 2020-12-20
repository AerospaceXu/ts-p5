import P5 from 'p5';

interface SketchProps {
  [key: string]: (p: P5) => void;
}

const sketchCreator = (props: SketchProps, dom: HTMLElement) => {
  new P5((p: P5) => {
    const fns = Object.keys(props);

    fns.forEach((fn) => {
      // @ts-ignore
      p[fn] = () => props[fn] && props[fn](p);
    });
  }, dom);
};

export { P5, sketchCreator };
