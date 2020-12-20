import P5 from 'p5';
interface SketchProps {
    [key: string]: (p: P5) => void;
}
declare const sketchCreator: (props: SketchProps, dom: HTMLElement) => void;
export { P5, sketchCreator };
//# sourceMappingURL=index.d.ts.map