import { Shape } from "./shape";

export class Square implements Shape {
    draw() {
        console.log("square:")
        console.log("XXXXXX")
        console.log("XX  XX")
        console.log("XXXXXX")
    }
}