
export namespace TextEffects {
   export function *traceText(text: string): Generator<[x: number, y: number]> {
        //Create a canvas
        const canvas = document.createElement("canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        const textWidth = ctx.measureText(text).width, textHeight = parseInt(ctx.font) * 1.2;
    
        // Get pixel data of the canvas
        const imageData = ctx.getImageData(0, 0, textWidth, textHeight) as ImageData;

        // Iterate through each pixel and yield the 
        // coordinate of non-transparent pixels
        for (let x = 0; x < canvas.width; x++) {
            for (let y = 0; y < canvas.height; y++) {
                const index = (y * canvas.width + x) * 4;
                if (imageData.data[index + 3] !== 0) {
                    yield [x, y];
                }
            }
        }
    }
}
