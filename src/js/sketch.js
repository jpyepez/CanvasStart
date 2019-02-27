
export const settings = {
    dimensions: [ 2048, 2048 ]
}

export const sketch = ({ ctx, width, height }) => {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, width, height);

    const offset = 25;
    ctx.fillStyle = 'cyan';
    ctx.fillRect(offset, offset, width - 2 * offset, height - 2 * offset);
}