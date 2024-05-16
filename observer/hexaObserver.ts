import { Observer } from "./observer";
import { Subject } from "./subject";

export class HexaObserver extends Observer {
    constructor(subject: Subject) {
        super()
        this.subject = subject
        this.subject.attach(this)
    }

    update(): void {
        console.log("hexa:")
        console.log((this.subject.getState() >>> 0).toString(16))
    }
}