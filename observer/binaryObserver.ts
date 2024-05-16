import { Observer } from "./observer";
import { Subject } from "./subject";

export class BinaryObserver extends Observer {
    constructor(subject: Subject) {
        super()
        this.subject = subject
        this.subject.attach(this)
    }

    update(): void {
        console.log("binary:")
        console.log((this.subject.getState() >>> 0).toString(2))
    }
}