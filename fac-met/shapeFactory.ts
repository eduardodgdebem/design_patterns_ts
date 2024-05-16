import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";
import { Square } from "./square";

export class ShapeFactory {
    getShape(shapeType: string): Shape |null  {
        if(shapeType === "circle")
            return new Circle()

        if(shapeType === "square")
            return new Square()

        if(shapeType === "rectangle")
            return new Rectangle()

        return null
        
    }
}