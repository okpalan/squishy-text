import { IParticle, IParticleConstructor } from "../@types/classes/particle";

export const Particle = function <T extends IParticle>(this: T, options: IParticle) {
    this.mass = options.mass
    this.pos = options.pos
    this.vel = options.vel
} as IParticleConstructor;


