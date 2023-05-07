import { Particle } from "./@types/classes/particle";
import { Spring } from "./classes";
import { TextEffects } from "./utils/index";
import "./utils/polyfills";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const options = {
    text: "Squeeze Me",
    particles: { count: 50 }
}

const text = "Hello, World!";
const trace = ctx.traceText(text);
console.log(trace);

ctx.moveTo((canvas.width / 2), (canvas.height / 2));

// Draw the text using the
// traced coordinates.
for (const [x, y] of trace) {
    ctx.lineTo(x, y);
    console.log(x, y)
}

// Stroke the path 
// to draw the text
ctx.stroke();
