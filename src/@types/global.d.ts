declare namespace global {
    interface CanvasRenderingContext2D {
      traceText(text: string): Generator<[number, number]>;
    }
}
  