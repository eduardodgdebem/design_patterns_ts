import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";
import { Square } from "./square";

export class ShapeMaker {
    private circle: Shape
    private rectangle: Shape
    private square: Shape

    constructor() {
        this.circle = new Circle()
        this.rectangle = new Rectangle()
        this.square = new Square()
    }

    drawCircle(): void {
        this.circle.draw()
    }

    drawRectangle(): void {
        this.rectangle.draw()
    }

    drawSquare(): void {
        this.square.draw()
    }
}