import { Subject } from "./subject";

export abstract class Observer {
    protected subject: Subject
    abstract update(): void
}