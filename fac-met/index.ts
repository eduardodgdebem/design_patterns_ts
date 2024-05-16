import { ShapeFactory } from "./shapeFactory";

const shapeFactory = new ShapeFactory()

const circle = shapeFactory.getShape("circle")
circle?.draw()

const rectangle = shapeFactory.getShape("rectangle")
rectangle?.draw()

const square = shapeFactory.getShape("square")
square?.draw()