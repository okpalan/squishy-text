import { IVec2, IVec2Constructor, Vec2Like } from "../@types/classes/vector";

export namespace Vector {
    export var Vec2 = function <T extends IVec2>(this: T, x?: number, y?: number): IVec2 {
        return this
    } as IVec2Constructor;

    Object.defineProperty(Vec2, "create", {
        configurable: false,
        writable: false,
        value: function (x: number, y: number) {
            return new (Vec2 as IVec2Constructor)(x, y)
        }
    })

    Object.defineProperty(Vec2, "I", {
        configurable: false,
        writable: false,
        value: new (Vec2 as IVec2Constructor)(1, 0)
    })


    Object.defineProperty(Vec2, "J", {
        configurable: false,
        writable: false,
        value: new (Vec2 as IVec2Constructor)(0, 1)
    })

    Vec2.prototype.add = function (other: Vec2Like) {
        if (typeof other == "number") {
            this.x += other
            this.y += other
        }
        else {
            this.x += other.x;
            this.y += other.y
        }
        return this
    }
    Vec2.prototype.subtract = function (other: Vec2Like) {
        if (typeof other == "number") {
            this.x -= other
            this.y -= other
        }
        else {
            this.x -= other.x;
            this.y -= other.y
        }
        return this
    }
    Vec2.prototype.dot = function (other: Vec2Like) {
        if (typeof other == "number") {
            this.x *= other
            this.y *= other
        }
        else {
            this.x *= other.x;
            this.y *= other.y
        }
        return this
    }
    Vec2.prototype.divide = function (other: Vec2Like) {
        if (typeof other == "number") {
            this.x /= other
            this.y /= other
        }
        else {
            this.x /= other.x;
            this.y /= other.y
        }
        return this
    }
    Vec2.prototype.cross = function (other: Vec2Like) {
        if (typeof other == "number") {
            this.x *= other
            this.y *= other
        }
        else {
            this.x *= other.y
            this.y *= other.x
        }
        return this
    }
    Vec2.prototype.magnitude = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    Vec2.prototype.normalize = function () {
        this.x /= this.magnitude()
        this.y /= this.magnitude()
        return this
    }
    Vec2.prototype.distanceTo = function (other: Vec2Like) {
        return Math.sqrt((this.y - other.y) + (this.x - other.x))
    }

    Vec2.prototype.rotateX = function (theta: number) {
        var angle = Math.PI / 180 * theta;
        this.y += Math.asin(angle)
        return this
    }

    Vec2.prototype.rotateY = function (theta: number) {
        var angle = Math.PI / 180 * theta;
        this.x += Math.acos(angle)
        return this;
    }
    Vec2.prototype.negate = function (){
        this.x =-this.x;
        this.y =- this.y
        return this
    }
    Vec2.prototype.toString = function () {
        return "<" + this.x + "," + this.y + ">"
    }
}