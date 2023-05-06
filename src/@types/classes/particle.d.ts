import { IVec2 } from "."

export { }
export interface IParticle {
    mass?: number
    pos: IVec2
    vel: IVec2
}

export interface IParticleConstructor {
    (): IParticle
    new(options: IParticle): IParticle
}

export declare function Particle<T extends IParticle>(this: T, options: IParticle): T