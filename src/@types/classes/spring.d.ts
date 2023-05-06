import { IParticle } from "./particle"

export { }
export interface ISpringOptions {
    stiffness?: number
    restLength: number
    dampFactor: number
}

export interface ISpring {
    nodes: IParticle[],
    options: ISpringOptions
    edges: object
}

export interface ISpringConstructor {
    (): ISpring

}