export { }
export as namespace Vector;
export declare type Vec2Like = IVec2 | {
    x?: any
    y?: any
}
export declare interface IVec2 {
    x?: number
    y?: number
    add(other: Vec2Like): IVec2
    scale(other: Vec2Like): IVec2
    subtract(other: Vec2Like): IVec2
    divide(other: Vec2Like): IVec2
    dot(other: Vec2Like): IVec2
    cross(other: Vec2Like): IVec2
    magnitude(): number
    normalize(): IVec2
    distanceTo(other: Vec2Like): IVec2
    rotateX(theta: number): IVec2
    rotateY(theta: number): IVec2,
    negate(): IVec2
    toString(): string
}

export declare interface IVec2Constructor {
    (): IVec2
    new(x: number, y: number): IVec2
    readonly I: IVec2
    readonly J: IVec2
    create(x: number, y: number): IVec2
}

export declare function Vec2<T extends IVec2>(this: T, x?: number, y?: number): T
