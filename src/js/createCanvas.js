import renderSketch from './renderSketch';

const createCanvas = (canvasId, context) => {
    const canvas =  document.getElementById(canvasId);
    const ctx = canvas.getContext(context);
    const render = renderSketch(ctx);
};

export default createCanvas;