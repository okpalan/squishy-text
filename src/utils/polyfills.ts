export { }
if (!CanvasRenderingContext2D.prototype.traceText) {
    CanvasRenderingContext2D.prototype.traceText = function* (text: string): Generator<[x: number, y: number]> {
        // Create a canvas with the same size as the text
        const canvas = document.createElement("canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.font = this.font;
        const textWidth = ctx.measureText(text).width, textHeight = parseInt(ctx.font) * 1.2;
        canvas.width = textWidth;
        canvas.height = textHeight;

        // Get pixel data of the canvas
        const imageData = ctx.getImageData(0, 0, textWidth, textHeight) as ImageData;

        // Iterate through each pixel and yield the 
        // coordinate of non-transparent pixels.
        for (let x = 0; x < textWidth; x++) {
            for (let y = 0; y < textHeight; y++) {
                const index = (y * textWidth + x) * 4;
                if (imageData.data[index + 3] !== 0) {
                    yield [x, y];
                }
            }
        }
    }
}

