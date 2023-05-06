import { IParticle } from "../@types/classes/particle";
import { ISpring, ISpringConstructor, ISpringOptions } from "../@types/classes/spring";
import { } from "../utils/index"

export const Spring = function <T extends ISpring>(this: T, nodes: IParticle[], options: ISpringOptions) {
    this.nodes = nodes;
    this.options = options;
} as ISpringConstructor;

Object.defineProperty(Spring.prototype, "forceSustained", {
    get: function* () {
        for (var [particleA, particleB] of this.nodes) {
            yield particleA.distanceTo(particleB)
                .dot(this.options.restLength)
        }
    },
    writable: false,
    configurable: false
})

Spring.prototype.draw = function (ctx: CanvasRenderingContext2D) {
    const [particleA, particleB] = this.nodes;
    const temp = {};


}