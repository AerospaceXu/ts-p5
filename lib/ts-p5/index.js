import P5 from 'p5';
var sketchCreator = function (props, dom) {
    new P5(function (p) {
        var fns = Object.keys(props);
        fns.forEach(function (fn) {
            // @ts-ignore
            p[fn] = function () { return props[fn] && props[fn](p); };
        });
    }, dom);
};
export { P5, sketchCreator };
//# sourceMappingURL=index.js.map