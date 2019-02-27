import { settings, sketch } from './sketch';

const canvasSetup = parentId => {
    const parent =  document.getElementById(parentId);
    const canvas = document.createElement("canvas");
    canvas.id = "canvas";
    canvas.width = settings.dimensions[0];
    canvas.height = settings.dimensions[1];
    parent.appendChild(canvas);

    return canvas;
}

const createCanvas = (parentId, context) => {
    const canvas = canvasSetup(parentId);
    const ctx = canvas.getContext(context);

    const props = {
        ctx,
        width: settings.dimensions[0],
        height: settings.dimensions[1]
    };

    const render = sketch(props);
};

export default createCanvas;